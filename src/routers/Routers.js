import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Application from "../pages/Application";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import Favorite from "../pages/Favorite";
import Cart from "../pages/Cart";
import CarDetails from "../pages/CarDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:carId" element={<CarDetails />} />
      <Route path="/application" element={<Application />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
};

export default Routers;
