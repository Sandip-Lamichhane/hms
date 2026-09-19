
import { Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout";

import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Services from "../pages/services/services.jsx";
import About from "../pages/About/about.jsx";


function AppRoutes() {
  return (
    <Routes>

      {/* Pages with Navbar + Footer */}
      <Route element={<Layout />}>

  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route path="/register" element={<Register />} />

  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<About />} />

</Route>


    </Routes>
  );
}

export default AppRoutes;

