import { Outlet } from "react-router-dom";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="layout">

      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;