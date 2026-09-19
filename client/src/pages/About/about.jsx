import { Link } from "react-router-dom";

import hospitalImage from "../../assets/emergency.jpg";
import patientImage from "../../assets/about.jpg";

export default function About() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#111]">

      {/* =====================================================
          ABOUT INTRO
      ===================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:px-10 lg:px-14">

        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.05fr] lg:gap-20">

          {/* TEXT */}
          <div className="max-w-md">

            <p className="mb-5 text-[15px] font-bold uppercase tracking-[0.12em] text-[#39754a]">
              About Us
            </p>

            <h1 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.8px] sm:text-[38px]">
              Better health
              <br />
              for a brighter tomorrow.
            </h1>

            <p className="mt-7 max-w-[400px] text-[12px] leading-[1.8] text-[#777] sm:text-[13px]">
              HealthHub is a modern healthcare platform built to
              make quality medical care more accessible,
              convenient, and personalized for everyone.
            </p>

          </div>


          {/* IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2px]">
              <img
                src={hospitalImage}
                alt="HealthHub hospital"
                className="h-[220px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02] sm:h-[250px] lg:h-[275px]"
              />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 lg:px-14">

        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.05fr] lg:gap-20">

          {/* TEXT */}
          <div>

            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#39754a]">
              Our Mission
            </p>

            <h2 className="text-[27px] font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[32px]">
              Accessible. Reliable.
              <br />
              For You.
            </h2>

            <p className="mt-7 max-w-[430px] text-[12px] leading-[1.8] text-[#777] sm:text-[13px]">
              We believe that everyone deserves timely,
              high-quality healthcare. Our mission is to bridge
              the gap between patients and care — by using
              technology, compassion, and innovation to create
              a healthier community.
            </p>


            {/* STATISTICS */}
            <div className="mt-9 flex items-stretch">

              {/* 10K */}
              <div className="pr-7 sm:pr-9">

                <h3 className="text-[20px] font-semibold tracking-tight">
                  10K+
                </h3>

                <p className="mt-2 text-[10px] text-[#888] sm:text-[11px]">
                  Happy Patients
                </p>

              </div>


              {/* DIVIDER */}
              <div className="w-px bg-[#c8c8c8]" />


              {/* 50 */}
              <div className="px-7 sm:px-9">

                <h3 className="text-[20px] font-semibold tracking-tight">
                  50+
                </h3>

                <p className="mt-2 text-[10px] text-[#888] sm:text-[11px]">
                  Expert Doctors
                </p>

              </div>


              {/* DIVIDER */}
              <div className="w-px bg-[#c8c8c8]" />


              {/* 24/7 */}
              <div className="pl-7 sm:pl-9">

                <h3 className="text-[20px] font-semibold tracking-tight">
                  24/7
                </h3>

                <p className="mt-2 text-[10px] text-[#888] sm:text-[11px]">
                  Support
                </p>

              </div>

            </div>

          </div>


          {/* IMAGE */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2px]">
              <img
                src={patientImage}
                alt="Healthcare professional caring for patient"
                className="h-[230px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02] sm:h-[260px] lg:h-[285px]"
              />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-10 lg:px-14">

        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#39754a]">
          Our Values
        </p>

        <h2 className="text-[28px] font-semibold tracking-[-0.5px] sm:text-[32px]">
          Care at the core.
        </h2>


        <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-10">


          {/* ================= COMPASSION ================= */}
          <div>

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#dff1e3] text-[#39754a]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="5" cy="7" r="2" />
                <circle cx="19" cy="7" r="2" />
                <circle cx="5" cy="17" r="2" />
                <circle cx="19" cy="17" r="2" />
                <path d="M7 8.5l3 2" />
                <path d="M17 8.5l-3 2" />
                <path d="M7 15.5l3-2" />
                <path d="M17 15.5l-3-2" />
              </svg>

            </div>

            <h3 className="text-[15px] font-semibold">
              Compassion
            </h3>

            <p className="mt-3 max-w-[230px] text-[11px] leading-[1.7] text-[#888]">
              We treat every patient with
              respect and empathy.
            </p>

          </div>


          {/* ================= TRUST ================= */}
          <div>

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#dff1e3] text-[#39754a]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M7 11l3 3 7-7" />
                <path d="M4 7l4-3 4 2 4-2 4 3-2 8-6 5-6-5z" />
              </svg>

            </div>

            <h3 className="text-[15px] font-semibold">
              Trust
            </h3>

            <p className="mt-3 max-w-[230px] text-[11px] leading-[1.7] text-[#888]">
              Your health and data are
              always secure with us.
            </p>

          </div>


          {/* ================= COMMUNITY ================= */}
          <div>

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#dff1e3] text-[#39754a]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M3 19c0-3.5 2.5-5.5 6-5.5s6 2 6 5.5" />
                <path d="M14 14c3.5-.5 6 1.5 6 5" />
              </svg>

            </div>

            <h3 className="text-[15px] font-semibold">
              Community
            </h3>

            <p className="mt-3 max-w-[230px] text-[11px] leading-[1.7] text-[#888]">
              We're committed to building
              a healthier tomorrow.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="mx-auto max-w-5xl px-5 pb-6 sm:px-10">

        <div className="flex items-center rounded-[12px] bg-[#e5faf2] px-5 py-4 sm:px-7">

          {/* Logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">

            <span className="text-lg">
              🌿
            </span>

          </div>


          {/* Divider */}
          <div className="mx-4 h-10 w-px bg-[#b8d8c7]" />


          {/* Content */}
          <div className="min-w-0 flex-1">

            <h3 className="text-[12px] font-semibold tracking-wide text-[#356b42] sm:text-[14px]">
              Together for a healthier you.
            </h3>

            <p className="mt-1 truncate text-[9px] text-[#888] sm:text-[10px]">
              We're here to support you at every step of your health journey.
            </p>

          </div>


          {/* Arrow */}
          <Link
            to="/services"
            className="ml-4 text-[24px] text-[#356b42] transition-transform duration-200 hover:translate-x-1"
          >
            →
          </Link>

        </div>

      </section>

    </main>
  );
}