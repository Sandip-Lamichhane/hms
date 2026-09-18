
import { Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout";

import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

function AppRoutes() {
  return (
    <Routes>

      {/* Pages with Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/departments" element={<div>Departments</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/about" element={<div>About Us</div>} />
      </Route>


      {/* Authentication Pages - NO Navbar / Footer */}
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

    </Routes>
  );
}

export default AppRoutes;

