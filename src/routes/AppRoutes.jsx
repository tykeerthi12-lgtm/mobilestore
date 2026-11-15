import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Mobiles from "../pages/Mobiles";
import Favorites from "../pages/Favorites";

function AppRoutes() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/mobiles" element={<Mobiles />} />

      <Route path="/favorites" element={<Favorites />} />

    </Routes>

  );

}

export default AppRoutes;