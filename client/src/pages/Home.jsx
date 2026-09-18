import { Link } from "react-router-dom";

import hospital from "../assets/hospital.png";
import nurse from "../assets/nurse.png";

function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative h-[670px] w-full">

        {/* Hospital Background */}
        <img
          src={hospital}
          alt="Hospital"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-black/25"></div>


        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto max-w-[1100px] px-8 pt-[125px]">

          <div className="max-w-[570px]">

            {/* Welcome text */}
            <p className="mb-4 text-[15px] font-semibold tracking-wide text-[#b8efc4]">
              WELCOME TO HEALTH HUB
            </p>


            {/* Main heading */}
            <h1 className="font-serif text-[48px] font-bold leading-[1.12] tracking-[-1px] text-white md:text-[58px]">
              Care That Connects.
              <br />
              Health That Matters.
            </h1>


            {/* Description */}
            <p className="mt-6 max-w-[430px] text-[16px] leading-6 text-white">
              Connecting you to trusted doctors and personalized
              <br className="hidden sm:block" />
              care, all in one place.
            </p>

          </div>

        </div>


        {/* =================================================
            FLOATING CARDS
            They cross the hero/about boundary
        ================================================== */}

        <div className="absolute bottom-[-65px] left-0 z-30 w-full px-5">

          <div className="mx-auto flex max-w-[900px] items-stretch justify-center gap-6 md:gap-12">


            {/* =================================================
                DOCTORS CARD
            ================================================== */}

            <Link
              to="/doctors"
              className="group flex h-[172px] w-[260px] flex-shrink-0 flex-col items-center justify-between rounded-[22px] bg-[#e2f5df] px-7 py-6 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
            >

              {/* Icon */}
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#d4efd3]">

                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0b3e35]"
                >

                  {/* Head */}
                  <circle
                    cx="24"
                    cy="11"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />

                  {/* Body */}
                  <path
                    d="M14 39C14.8 30.8 18.2 25 24 25C29.8 25 33.2 30.8 34 39"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Stethoscope */}
                  <path
                    d="M19 17V20C19 23 21 25 24 25C27 25 29 23 29 20V17"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="34"
                    cy="35"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                </svg>

              </div>


              {/* Card footer */}
              <div className="flex w-full items-center justify-between">

                <span className="font-serif text-[18px] font-semibold text-[#173d35]">
                  Doctors
                </span>

                <span className="text-[20px] text-[#173d35] transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>

              </div>

            </Link>


            {/* =================================================
                LOCATION CARD
            ================================================== */}

            <Link
              to="/location"
              className="group flex h-[172px] w-[260px] flex-shrink-0 flex-col items-center justify-between rounded-[22px] bg-[#e2f5df] px-7 py-6 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
            >

              {/* Icon */}
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#d4efd3]">

                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0b3e35]"
                >

                  <path
                    d="M24 43C24 43 36 31.5 36 20C36 13.37 30.63 8 24 8C17.37 8 12 13.37 12 20C12 31.5 24 43 24 43Z"
                    stroke="currentColor"
                    strokeWidth="2.7"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="24"
                    cy="20"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2.7"
                  />

                </svg>

              </div>


              {/* Card footer */}
              <div className="flex w-full items-center justify-between">

                <span className="font-serif text-[18px] font-semibold text-[#173d35]">
                  Location
                </span>

                <span className="text-[20px] text-[#173d35] transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>

              </div>

            </Link>


            {/* =================================================
                APPOINTMENTS CARD
            ================================================== */}

            <Link
              to="/appointments"
              className="group flex h-[172px] w-[260px] flex-shrink-0 flex-col items-center justify-between rounded-[22px] bg-[#e2f5df] px-7 py-6 shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
            >

              {/* Icon */}
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#d4efd3]">

                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0b3e35]"
                >

                  <rect
                    x="8"
                    y="10"
                    width="32"
                    height="30"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2.7"
                  />

                  <path
                    d="M15 6V14"
                    stroke="currentColor"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M33 6V14"
                    stroke="currentColor"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                  />

                  <path
                    d="M8 19H40"
                    stroke="currentColor"
                    strokeWidth="2.7"
                  />

                  {/* Calendar dots */}
                  <circle cx="16" cy="26" r="1.7" fill="currentColor" />
                  <circle cx="24" cy="26" r="1.7" fill="currentColor" />
                  <circle cx="32" cy="26" r="1.7" fill="currentColor" />

                  <circle cx="16" cy="33" r="1.7" fill="currentColor" />
                  <circle cx="24" cy="33" r="1.7" fill="currentColor" />
                  <circle cx="32" cy="33" r="1.7" fill="currentColor" />

                </svg>

              </div>


              {/* Card footer */}
              <div className="flex w-full items-center justify-between">

                <span className="font-serif text-[18px] font-semibold text-[#173d35]">
                  Appointments
                </span>

                <span className="text-[20px] text-[#173d35] transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT HEALTHHUB SECTION
      ====================================================== */}

      <section className="bg-[#edfff9] pt-[125px]">

        <div className="mx-auto flex max-w-[1100px] flex-col md:min-h-[430px] md:flex-row">


          {/* =================================================
              ABOUT TEXT
          ================================================== */}

          <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-[55px]">

            {/* Small green line */}
            <div className="mb-5 h-[2px] w-[48px] bg-[#63ad82]"></div>


            {/* Heading */}
            <h2 className="font-serif text-[22px] font-semibold tracking-wide text-[#183e35]">
              ABOUT HEALTHHUB
            </h2>


            {/* Text */}
            <div className="mt-6 max-w-[510px] text-[15px] leading-7 text-[#304943]">

              <p>
                HealthHub makes healthcare simple,
                <br />
                accessible, and connected.
              </p>

              <p className="mt-3">
                We bring trusted doctors, medical services,
                <br />
                and appointments together in one place.
              </p>

              <p className="mt-3">
                Our goal is to provide better care and a
                <br />
                better healthcare experience for everyone.
              </p>

            </div>

          </div>


          {/* =================================================
              NURSE IMAGE
          ================================================== */}

          <div className="flex w-full items-center justify-center px-7 py-10 md:w-[45%] md:px-8">

            <img
              src={nurse}
              alt="Healthcare professionals"
              className="h-[300px] w-full rounded-[14px] object-cover object-center shadow-[0_5px_20px_rgba(0,0,0,0.08)]"
            />

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;