import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">


      {/* =========================
          FOOTER CONTENT
      ========================= */}

      <div className="footer-main">


        {/* BRAND */}

        <div className="footer-brand">

          <img
            src={logo}
            alt="HealthHub"
          />

          <h3>
            Care That Connects.
          </h3>

          <h3>
            Health That Matters.
          </h3>

        </div>


        {/* EXPLORE */}

        <div className="footer-column">

          <h4>
            Explore
          </h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/departments">
            Departments
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/about">
            About Us
          </Link>

        </div>


        {/* PATIENT CARE */}

        <div className="footer-column">

          <h4>
            Patient Care
          </h4>

          <Link to="/find-doctor">
            Find a doctor
          </Link>

          <Link to="/appointment">
            Book Appointment
          </Link>

          <Link to="/support">
            Patient Support
          </Link>

          <Link to="/faqs">
            FAQs
          </Link>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <h4>
            Contact
          </h4>

          <p>
            ⌖ Kathmandu, NEPAL
          </p>

          <p>
            ♧ +97798XXXXXXXX
          </p>

          <p>
            ✉ healthhub@gmail.com
          </p>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <span>
          Privacy Policy
        </span>

        <span>
          |
        </span>

        <span>
          Terms of Service
        </span>

      </div>

    </footer>
  );
}

export default Footer;