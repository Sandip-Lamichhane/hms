<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRecordRequest;
use App\Http\Requests\UpdatePatientRecordRequest;
use App\Http\Resources\PatientRecordResource;
use App\Models\PatientRecord;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PatientRecordController extends Controller
{
    /**
     * GET /api/patient-records
     * List all patient records for hospital staff (strictly scoped by hospital_id).
     */
    public function index(Request $request): AnonymousResourceCollection|JsonResponse
    {
        $user = $request->user();

        // Non-super-admins must be assigned to a hospital
        if (! $user->isSuperAdmin() && $user->hospital_id === null) {
            return response()->json([
                'message' => 'Forbidden. Your account is not associated with any hospital.',
            ], 403);
        }

        $query = PatientRecord::with(['hospital', 'creator']);

        // Enforce tenant isolation
        if (! $user->isSuperAdmin()) {
            $query->where('hospital_id', $user->hospital_id);
        } elseif ($request->filled('hospital_id')) {
            // Super admin can optionally filter by a specific hospital
            $query->where('hospital_id', (int) $request->hospital_id);
        }

        // Search by patient name, phone, or diagnosis
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('patient_name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('diagnosis', 'like', "%{$search}%");
            });
        }

        // Filter by gender if specified
        if ($request->filled('gender')) {
            $query->where('gender', $request->gender);
        }

        $perPage = (int) $request->input('per_page', 15);
        $records = $query->orderBy('created_at', 'desc')->paginate($perPage);

        return PatientRecordResource::collection($records);
    }

    /**
     * GET /api/my-medical-records
     * A patient's own unified medical history — every record created
     * for them by every hospital they have ever visited, not just one
     * tenant. This intentionally bypasses hospital tenant isolation
     * because the records belong to the patient, not to any single
     * hospital.
     */
    public function myRecords(Request $request): AnonymousResourceCollection|JsonResponse
    {
        $user = $request->user();

        if ($user->role !== 'patient') {
            return response()->json([
                'message' => 'Forbidden. Only patients can view their unified medical records.',
            ], 403);
        }

        $query = PatientRecord::with(['hospital', 'creator'])
            ->where(function ($q) use ($user) {
                $q->where('user_id', $user->id);

                // As a safety net for older records created before a
                // patient account existed / before linking, also surface
                // records that match this patient's registered phone
                // number but were never linked to a user_id yet.
                if (! empty($user->phone)) {
                    $q->orWhere(function ($sub) use ($user) {
                        $sub->whereNull('user_id')->where('phone', $user->phone);
                    });
                }
            });

        // Optional filter by a specific hospital, while still pulling
        // from every hospital by default.
        if ($request->filled('hospital_id')) {
            $query->where('hospital_id', (int) $request->hospital_id);
        }

        $records = $query->orderBy('created_at', 'desc')->get();

        // Opportunistically backfill user_id on any phone-matched but
        // unlinked records so future lookups are a direct, fast match.
        if (! empty($user->phone)) {
            PatientRecord::whereNull('user_id')
                ->where('phone', $user->phone)
                ->update(['user_id' => $user->id]);
        }

        return PatientRecordResource::collection($records);
    }

    /**
     * GET /api/patient-records/{id}
     * Show details of a specific patient record.
     */
    public function show(Request $request, int|string $id): PatientRecordResource|JsonResponse
    {
        $user = $request->user();
        $record = PatientRecord::with(['hospital', 'creator'])->findOrFail($id);

        if ($user->role === 'patient') {
            // A patient may only open a record that belongs to them,
            // regardless of which hospital created it.
            $belongsToPatient = (int) $record->user_id === (int) $user->id
                || (! empty($user->phone) && $record->user_id === null && $record->phone === $user->phone);

            if (! $belongsToPatient) {
                return response()->json([
                    'message' => 'Forbidden. You do not have permission to access this record.',
                ], 403);
            }

            return new PatientRecordResource($record);
        }

        // Tenant check: staff can only view records of their own hospital
        if (! $user->isSuperAdmin() && (int) $record->hospital_id !== (int) $user->hospital_id) {
            return response()->json([
                'message' => 'Forbidden. You do not have permission to access records belonging to another hospital.',
            ], 403);
        }

        return new PatientRecordResource($record);
    }

    /**
     * POST /api/patient-records
     * Create a new patient record.
     */
    public function store(StorePatientRecordRequest $request): JsonResponse
    {
        $user = $request->user();

        // Determine tenant hospital ID
        if ($user->isSuperAdmin()) {
            $hospitalId = $request->input('hospital_id') ?? $user->hospital_id;
            if (! $hospitalId) {
                return response()->json([
                    'message' => 'The hospital_id field is required for super administrators.',
                ], 422);
            }
        } else {
            if ($user->hospital_id === null) {
                return response()->json([
                    'message' => 'Forbidden. Your account is not associated with any hospital.',
                ], 403);
            }
            $hospitalId = $user->hospital_id;
        }

        $validated = $request->validated();
        $validated['hospital_id'] = $hospitalId;
        $validated['created_by']  = $user->id;

        // Link this record to the patient's own account (if one exists)
        // so it shows up on their unified profile no matter which
        // hospital created it. Matched by phone number since that is
        // the one identifier staff always have on hand at intake.
        $validated['user_id'] = $this->resolvePatientUserId($validated['phone'] ?? null);

        $record = PatientRecord::create($validated);

        return response()->json([
            'message' => 'Patient record created successfully.',
            'data'    => new PatientRecordResource($record->load(['hospital', 'creator'])),
        ], 201);
    }

    /**
     * PUT /api/patient-records/{id}
     * Update an existing patient record.
     */
    public function update(UpdatePatientRecordRequest $request, int|string $id): JsonResponse
    {
        $user = $request->user();
        $record = PatientRecord::findOrFail($id);

        // Tenant check: staff can only update records belonging to their own hospital
        if (! $user->isSuperAdmin() && (int) $record->hospital_id !== (int) $user->hospital_id) {
            return response()->json([
                'message' => 'Forbidden. You do not have permission to update records belonging to another hospital.',
            ], 403);
        }

        $validated = $request->validated();

        // Prevent modification of tenant ownership and author by hospital staff
        unset($validated['hospital_id'], $validated['created_by']);

        // Re-resolve the linked patient account if the phone number changed
        if (array_key_exists('phone', $validated) && $validated['phone'] !== $record->phone) {
            $validated['user_id'] = $this->resolvePatientUserId($validated['phone']);
        }

        $record->update($validated);

        return response()->json([
            'message' => 'Patient record updated successfully.',
            'data'    => new PatientRecordResource($record->fresh()->load(['hospital', 'creator'])),
        ]);
    }

    /**
     * DELETE /api/patient-records/{id}
     * Delete a patient record.
     */
    public function destroy(Request $request, int|string $id): JsonResponse
    {
        $user = $request->user();
        $record = PatientRecord::findOrFail($id);

        // Tenant check: staff can only delete records belonging to their own hospital
        if (! $user->isSuperAdmin() && (int) $record->hospital_id !== (int) $user->hospital_id) {
            return response()->json([
                'message' => 'Forbidden. You do not have permission to delete records belonging to another hospital.',
            ], 403);
        }

        $record->delete();

        return response()->json([
            'message' => 'Patient record deleted successfully.',
        ]);
    }

    /**
     * Try to find an existing patient account matching a phone number,
     * so newly created hospital records can be linked to that patient's
     * unified profile automatically.
     */
    private function resolvePatientUserId(?string $phone): ?int
    {
        if (empty($phone)) {
            return null;
        }

        return User::where('role', 'patient')
            ->where('phone', $phone)
            ->value('id');
    }
}