# HealthHub

HealthHub is a hospital-management solution for patients, hospital staff, hospital administrators, and super administrators. It combines a Laravel REST API, a React web client, and a patient-focused React Native mobile app to provide hospital discovery, appointments, bed availability, ambulance tracking, OPD queues, emergency routing, blood-bank information, patient records, administration, analytics, and realtime updates.

## Features

- Browse hospitals, bed availability, ambulance locations, and OPD queues.
- Book appointments and OPD tokens, including guest appointment booking.
- Find nearby hospitals for emergencies using location and optional blood-group filters.
- Browse blood-bank inventory and register/request blood donors.
- Manage beds, ambulances, OPD queues, appointments, patient records, and hospital staff.
- Manage hospitals and users from the super-admin dashboard.
- View bed occupancy, ambulance response, and OPD wait-time analytics.
- Receive bed, ambulance, OPD, and appointment updates through Laravel Reverb WebSockets.
- Use the mobile app for patient login, appointment booking, medical records, and emergency requests.

## Technology

| Area            | Technology                                        |
| --------------- | ------------------------------------------------- |
| Web client      | React 19, Vite 8, React Router, Axios             |
| Mobile app      | React Native, Expo, React Navigation              |
| Styling         | Tailwind CSS 3, PostCSS                           |
| Maps and charts | Mapbox GL, `react-map-gl`, Recharts               |
| API             | Laravel 13, PHP 8.3+, REST endpoints              |
| Authentication  | Laravel Sanctum bearer tokens                     |
| Database        | MySQL for development; SQLite in-memory for tests |
| Realtime        | Laravel Reverb and queued broadcast events        |
| Tooling         | Composer, npm, Oxlint, PHPUnit                    |

## Repository Layout

```text
hms/
├── client/                 # React/Vite web application
│   ├── src/
│   │   ├── components/     # Admin, hospital, ambulance, blood, chart, emergency, and OPD UI
│   │   ├── pages/          # Public, patient, hospital-admin, and super-admin pages
│   │   ├── services/       # API service modules
│   │   ├── context/        # Authentication context
│   │   ├── hooks/          # Active hospital and WebSocket hooks
│   │   ├── config/         # Mapbox configuration
│   │   └── App.jsx         # Client routes
│   ├── package.json
│   └── vite.config.js

├── mobile/                 # React Native/Expo patient mobile app
│   ├── src/
│   ├── app.json
│   ├── package.json
│   └── README.md

├── server/                 # Laravel API and WebSocket server
│   ├── app/
│   │   ├── Http/           # Controllers, middleware, requests, and resources
│   │   ├── Models/
│   │   ├── Services/
│   │   ├── Events/         # Broadcast events
│   │   └── Helpers/
│   ├── database/           # Migrations, factories, and seeders
│   ├── routes/api.php      # API route definitions
│   ├── routes/channels.php # Private broadcast channel authorization
│   ├── tests/
│   └── composer.json
└── README.md
```

## Prerequisites

Install the following before starting:

- PHP `8.3` or newer with the extensions required by Laravel and PDO MySQL.
- Composer `2.x`.
- Node.js compatible with Vite 8 (Node.js `20.19+` or `22.12+` is recommended).
- npm.
- MySQL `8.x` or MariaDB, running locally or on an accessible host.
- A Mapbox public access token for live maps and directions. Map features have fallback behavior when no token is configured.

## Installation

### 1. Clone the repository

```bash
git clone <repository-url> hms
cd hms
```

### 2. Configure the Laravel server

```bash
cd server
composer install
cp .env.example .env
php artisan key:generate
```

Create the database, or create it with your preferred MySQL client:

```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS healthhub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

Update `server/.env` if your MySQL credentials differ from the defaults:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=healthhub
DB_USERNAME=root
DB_PASSWORD=
```

Run the schema and seed the development records:

```bash
php artisan migrate
php artisan db:seed
```

The seeder creates three Kathmandu-area hospitals, hospital staff, beds, ambulances, OPD queues, blood-bank inventory, donors, patient records, and a super-admin account.

### 3. Configure the React client

Open a second terminal from the repository root:

```bash
cd client
npm install
cp .env.example .env
```

Set the public Mapbox token in `client/.env` for live maps:

```dotenv
VITE_API_URL=http://localhost:8000/api
VITE_MAPBOX_TOKEN=your_mapbox_public_token
```

The Vite development server already proxies `/api` requests to `http://localhost:8000` as configured in `client/vite.config.js`.

## Running the application

### Web app

Use separate terminals for the API and client:

```bash
# Terminal 1: Laravel API
cd server
php artisan serve
```

```bash
# Terminal 2: React client
cd client
npm run dev
```

Open `http://localhost:3000`. The API is available at `http://localhost:8000`.

### Mobile app

The repository also includes a React Native patient app in `mobile/`.

```bash
cd mobile
npm install
npx expo start
```

For the mobile app, update the backend URL in `mobile/src/api/config.ts` to point to your Laravel server, such as:

```ts
export const API_BASE_URL = "http://localhost:8000/api";
```

The mobile app is documented in more detail in `mobile/README.md`.

### Realtime updates

Realtime features use Laravel Reverb on port `8080`. The default queue driver is the database driver, and broadcast events implement `ShouldBroadcast`, so run both processes when testing realtime updates:

```bash
# Terminal 3: Reverb WebSocket server
cd server
php artisan reverb:start
```

```bash
# Terminal 4: queued broadcast worker
cd server
php artisan queue:work
```

For local development, keep the Reverb values in `server/.env` and `client/.env` aligned. The relevant server values are `REVERB_APP_ID`, `REVERB_APP_KEY`, `REVERB_APP_SECRET`, `REVERB_HOST`, `REVERB_PORT`, and `REVERB_SCHEME`. The client uses the corresponding `VITE_REVERB_*` values.

## Environment Variables

### Server

`server/.env.example` contains the complete template. The important groups are:

- `APP_*`: application name, URL, environment, and generated encryption key.
- `DB_*`: MySQL connection settings.
- `SESSION_DRIVER`, `CACHE_STORE`, and `QUEUE_CONNECTION`: local database-backed session, cache, and queue settings.
- `BROADCAST_CONNECTION` and `REVERB_*`: realtime broadcasting and WebSocket server settings.
- `MAIL_*`: mail is configured with the `log` driver by default, so messages are written to the Laravel log during development.
- `FILESYSTEM_DISK` and `AWS_*`: local storage is the default; S3 settings are available for deployments that need them.

### Client

`client/.env.example` contains the frontend template:

| Variable              | Purpose                                                        |
| --------------------- | -------------------------------------------------------------- |
| `VITE_API_URL`        | Laravel API base URL; defaults to `http://localhost:8000/api`. |
| `VITE_MAPBOX_TOKEN`   | Public Mapbox token for live maps and directions.              |
| `VITE_APP_NAME`       | Optional application name shown by the client.                 |
| `VITE_REVERB_APP_KEY` | Reverb application key.                                        |
| `VITE_REVERB_HOST`    | Reverb host, normally `localhost`.                             |
| `VITE_REVERB_PORT`    | Reverb port, normally `8080`.                                  |
| `VITE_REVERB_SCHEME`  | `http` locally or `https` when TLS is configured.              |

Do not commit `.env` files or private Reverb secrets. Only expose public client configuration through `VITE_*` variables.

## Demo Accounts

Run `php artisan db:seed` before using these accounts. The seeded password is intended only for local development.

| Role           | Email                                               | Password   |
| -------------- | --------------------------------------------------- | ---------- |
| Super admin    | `admin@healthhub.com`                               | `password` |
| Hospital admin | `birhospital@healthhub.com`                         | `password` |
| Hospital admin | `tribhuvanuniversityteachinghospital@healthhub.com` | `password` |
| Hospital admin | `patanhospital@healthhub.com`                       | `password` |

Hospital staff accounts are also seeded, but their generated email addresses are factory data. Inspect the `users` table or create staff from the super-admin panel. Change all seeded passwords before deploying.

## Application Roles

- `public`: browse public hospital, emergency, blood-bank, and appointment functionality.
- `patient`: manage personal appointments and view the patient dashboard.
- `hospital_staff`: manage operational hospital resources and patient records for the assigned hospital.
- `hospital_admin`: manage hospital resources and staff for the assigned hospital.
- `super_admin`: manage all hospitals and users and view system-wide analytics.

The API uses Sanctum bearer tokens. The client stores the token locally and sends it with authenticated Axios requests. Hospital users are tenant-isolated to their assigned hospital; super admins can access all hospitals.

## API Overview

All API routes are prefixed with `/api` and are defined in `server/routes/api.php`.

| Area               | Representative endpoints                                                  | Access                                   |
| ------------------ | ------------------------------------------------------------------------- | ---------------------------------------- |
| Authentication     | `POST /auth/login`, `POST /auth/register`, `GET /auth/me`                 | Public or authenticated                  |
| Hospitals          | `GET /hospitals`, `GET /hospitals/{id}`                                   | Public                                   |
| Hospital resources | `/hospitals/{id}/beds`, `/ambulances`, `/opd`                             | Public reads; hospital roles write       |
| Appointments       | `POST /appointments`, `GET /appointments`, cancellation and status routes | Public booking; authenticated management |
| Blood services     | `/blood-banks`, `/blood-donors`, `/blood-donors/request`                  | Public, with protected stock updates     |
| Emergency          | `GET /emergency/find-nearest-hospital`                                    | Public                                   |
| Patient records    | `/patient-records`                                                        | Hospital roles                           |
| Administration     | `/admin/stats`, `/admin/hospitals`, `/admin/users`, `/admin/analytics/*`  | Super admin                              |

Use the route file and controller request classes as the authoritative reference for request fields, validation, and response formats.

## Realtime Events

The server broadcasts the following events through Reverb:

- `BedAvailabilityUpdated` on hospital resource changes.
- `AmbulanceLocationUpdated` when an ambulance is tracked.
- `OPDQueueUpdated` when an OPD queue changes.
- `AppointmentBooked` and `AppointmentStatusUpdated` for appointment changes.

The client subscribes through `client/src/hooks/useWebSocket.js`. Feature channels are configured as public channels; the authenticated user channel is authorized in `server/routes/channels.php`.

## Useful Commands

### Client

```bash
cd client
npm run dev       # Start Vite on port 3000
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Run Oxlint
```

### Server

```bash
cd server
php artisan serve              # Start the API
php artisan migrate            # Apply pending migrations
php artisan migrate:fresh --seed  # Rebuild local data from scratch
php artisan db:seed            # Seed demo data
php artisan route:list         # Inspect registered routes
php artisan reverb:start      # Start WebSockets
php artisan queue:work         # Process queued broadcasts/jobs
php artisan healthhub:check   # Run the project health check command
php artisan test               # Run PHPUnit tests
composer test                  # Clear config and run tests
```

The `server/composer.json` includes Laravel's default setup aliases, but this repository keeps the frontend in `client/`, not inside `server/`. Run the client commands from `client/` as shown above rather than relying on a server-side npm workflow.

## Testing

The test suite is configured in `server/phpunit.xml` to use an in-memory SQLite database, array cache/session drivers, synchronous queues, null broadcasting, and array mail. It does not require the development MySQL database:

```bash
cd server
php artisan test
```

The visible tests cover public hospital APIs, authentication/admin statistics, emergency routing, and hospital deletion cascades. Reverb delivery, Mapbox behavior, and production queue infrastructure should be verified separately when those integrations are changed.

## Troubleshooting

### Database connection errors

Confirm MySQL is running, the `healthhub` database exists, and the `DB_*` values in `server/.env` match your local installation. After changing environment or config values, run:

```bash
cd server
php artisan config:clear
```

### Maps are blank or use fallback behavior

Set a valid public `VITE_MAPBOX_TOKEN` in `client/.env`, restart Vite, and confirm the token has the required Mapbox permissions. The application can still run without live Mapbox tiles.

### Realtime updates do not appear

Check that the API, Reverb server, and queue worker are all running. Confirm the server and client Reverb host, port, scheme, and app key match. Browser WebSocket errors usually indicate a mismatch in these values or an unavailable port.

### CORS or API URL problems

During local development, use the Vite server at `http://localhost:3000` and keep `VITE_API_URL` pointed at the Laravel API. The Vite proxy handles `/api` requests. Restart the client after changing any `VITE_*` variable.

## Security Notes

- Never commit `.env` files, database credentials, Mapbox tokens with inappropriate restrictions, or Reverb secrets.
- Replace the seeded demo password before sharing a development database or deploying the application.
- Review `APP_DEBUG`, allowed origins, HTTPS, queue workers, storage, and mail configuration before production deployment.
- Use HTTPS and appropriately restricted Mapbox tokens outside local development.
