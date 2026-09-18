import { Routes, Route } from "react-router-dom";

import Layout from "../Layouts/Layout.jsx";
import Home from "../pages/Home.jsx";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;