import "./Home.css";

import hospitalImage from "../assets/hospital.png";
import nurseImage from "../assets/nurse.png";

function Home() {
  return (
    <div className="home">


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <img
          src={hospitalImage}
          alt="HealthHub Hospital"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            Care That Connects.
            <br />
            Health That Matters.
          </h1>

          <p>
            Connecting you to trusted doctors and personalized
            <br />
            care, all in one place.
          </p>

        </div>

      </section>



      {/* =========================
          QUICK LINKS
      ========================= */}

      <section className="quick-links">


        {/* DOCTORS */}

        <div className="quick-card">

          <div className="quick-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M8 3v4" />
              <path d="M6 5h4" />
              <path d="M8 7v3a4 4 0 0 0 4 4h1" />
              <path d="M16 3v5a4 4 0 0 1-4 4" />
              <path d="M16 3a3 3 0 0 1 3 3v2" />
              <path d="M19 8a2 2 0 0 1-2 2" />
              <path d="M13 14v2a4 4 0 0 0 4 4h1" />
              <circle cx="19" cy="20" r="2" />
            </svg>

          </div>

          <span>Doctors</span>

          <span className="arrow">↗</span>

        </div>



        {/* LOCATION */}

        <div className="quick-card">

          <div className="quick-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2V5z" />
              <path d="M9 3v16" />
              <path d="M15 5v16" />
              <path d="M12 8c1.7 0 3 1.3 3 3 0 2.2-3 5-3 5s-3-2.8-3-5c0-1.7 1.3-3 3-3z" />
              <circle cx="12" cy="11" r="0.7" />
            </svg>

          </div>

          <span>Location</span>

          <span className="arrow">↗</span>

        </div>



        {/* APPOINTMENTS */}

        <div className="quick-card">

          <div className="quick-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2"
              />

              <path d="M7 3v4" />
              <path d="M17 3v4" />
              <path d="M3 10h18" />

              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />

              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>

          </div>

          <span>Appointments</span>

          <span className="arrow">↗</span>

        </div>

      </section>



      {/* =========================
          ABOUT
      ========================= */}

      <section className="about">

        <div className="about-content">

          <h2>
            ABOUT HEALTHHUB
          </h2>

          <p>
            HealthHub makes healthcare simple,
            accessible, and connected.
          </p>

          <p>
            We bring trusted doctors, medical services,
            and appointments together in one place.
          </p>

          <p>
            Our goal is to provide better care and a
            better healthcare experience for everyone.
          </p>

        </div>


        <div className="about-image">

          <img
            src={nurseImage}
            alt="HealthHub medical team"
          />

        </div>

      </section>


    </div>
  );
}

export default Home;