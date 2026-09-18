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
      <div className="auth-links">

 <button className="login">Log In</button>
 <button className="signup">Sign up</button>

</div>

     

    </nav>
  );
}

export default NavBar;