import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="min-h-screen">

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Normal Footer */}
      <Footer />

    </div>
  );
}

export default Layout;