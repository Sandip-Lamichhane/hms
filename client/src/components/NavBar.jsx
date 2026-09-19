import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="HealthHub" />
      </Link>


      {/* NAVIGATION */}
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/Contact Us">
          Contact Us
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/about">
          About Us
        </Link>

      </div>
      <div className="auth-links">
        <Link to="/login" className="login">
  Login
</Link>

 
<Link to="/register" className="signup">
  Register
</Link>

</div>

     

    </nav>
  );
}

export default NavBar;