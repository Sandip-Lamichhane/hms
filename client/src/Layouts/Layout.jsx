import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

import "./Layout.css";

function Layout() {
  return (
    <div className="layout">

      <NavBar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;