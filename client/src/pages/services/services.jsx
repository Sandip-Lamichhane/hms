import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[360px] overflow-hidden bg-[#edf5ef] sm:min-h-[430px]">

        {/* Decorative circles */}
        <div className="absolute -right-16 -top-12 h-[220px] w-[220px] rounded-full bg-[#a9dcb1]" />

        <div className="absolute right-[70px] top-[70px] h-[150px] w-[150px] rounded-full bg-[#c2f5ce]" />

        <div className="absolute -right-16 bottom-[40px] h-[190px] w-[190px] rounded-full bg-[#b5d6a9]" />

        <div className="absolute right-[90px] -bottom-[65px] h-[220px] w-[220px] rounded-full bg-[#8ceba0]" />


        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20">

          <p className="mb-5 text-sm font-medium tracking-widest text-[#4c8658]">
            OUR SERVICES
          </p>

          <h1 className="max-w-[520px] font-serif text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-6xl">
            Less waiting.
            <br />
            Better care.
          </h1>

          <p className="mt-6 max-w-[430px] text-sm leading-7 text-[#333] sm:text-base">
            Get the care you need faster, while keeping your
            medical records organized in one place.
          </p>


          {/* Appointment button */}
          <Link
            to="/appointment"
            className="mt-8 inline-flex items-center gap-4 rounded-xl bg-[#438553] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-[#367344] hover:shadow-md"
          >
            <span>Book Appointment</span>

            <span className="text-xl leading-none">
              →
            </span>
          </Link>

        </div>
      </section>


      {/* ================= SERVICE CARDS ================= */}
      <section className="px-6 py-14 sm:px-10 sm:py-20">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">


          {/* ================= BOOK APPOINTMENT ================= */}
          <div className="group flex min-h-[150px] items-center rounded-2xl border border-[#d0d0d0] bg-[#f8f9f8] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Icon */}
            <div className="mr-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcefe1] text-[#438553]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
              >
                <rect x="4" y="5" width="16" height="15" rx="2" />
                <path d="M8 3v4" />
                <path d="M16 3v4" />
                <path d="M4 9h16" />
                <path d="M8 13h.01" />
                <path d="M12 13h.01" />
                <path d="M16 13h.01" />
                <path d="M8 16h.01" />
                <path d="M12 16h.01" />
                <path d="M16 16h.01" />
              </svg>

            </div>


            {/* Text */}
            <div className="min-w-0 flex-1">

              <h3 className="text-base font-semibold text-black sm:text-lg">
                Book Appointment
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777]">
                Choose your doctor and time slot
                without the wait.
              </p>

            </div>


            {/* Arrow */}
            <Link
              to="/appointment"
              className="ml-3 self-end text-2xl leading-none text-black transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </Link>

          </div>



          {/* ================= MEDICAL REPORTS ================= */}
          <div className="group flex min-h-[150px] items-center rounded-2xl border border-[#d0d0d0] bg-[#f8f9f8] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Icon */}
            <div className="mr-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcefe1] text-[#438553]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
              >
                <path d="M6 3h9l3 3v15H6z" />
                <path d="M15 3v4h4" />
                <path d="M9 11h6" />
                <path d="M9 14h4" />
                <path d="M9 17h3" />
                <path d="M16 14l2 2 3-4" />
              </svg>

            </div>


            {/* Text */}
            <div className="min-w-0 flex-1">

              <h3 className="text-base font-semibold text-black sm:text-lg">
                Access Medical Reports
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777]">
                View and download your reports,
                prescriptions and history.
              </p>

            </div>


            {/* Arrow */}
            <Link
              to="/reports"
              className="ml-3 self-end text-2xl leading-none text-black transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </Link>

          </div>



          {/* ================= FIND SPECIALIST ================= */}
          <div className="group flex min-h-[150px] items-center rounded-2xl border border-[#d0d0d0] bg-[#f8f9f8] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Icon */}
            <div className="mr-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dcefe1] text-[#438553]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-7 w-7"
              >
                <circle cx="12" cy="7" r="3" />
                <path d="M5 20c0-3.8 3.1-6 7-6s7 2.2 7 6" />
                <path d="M5 11a3 3 0 0 0-3 3" />
                <path d="M19 11a3 3 0 0 1 3 3" />
                <path d="M3 20v-2" />
                <path d="M21 20v-2" />
              </svg>

            </div>


            {/* Text */}
            <div className="min-w-0 flex-1">

              <h3 className="text-base font-semibold text-black sm:text-lg">
                Find a Specialist
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777]">
                Get the right care from the right
                expert.
              </p>

            </div>


            {/* Arrow */}
            <Link
              to="/doctors"
              className="ml-3 self-end text-2xl leading-none text-black transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;