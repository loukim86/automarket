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
import User from "../pages/User";
import RestorePassword from "../pages/restorePassword/RestorePassword";
import CodeFromEmail from "../pages/restorePassword/CodeFromEmail";
import NewPassword from "../pages/restorePassword/NewPassword";
import SignUp from "../pages/signUp/SignUp";
import ReviewForm from "../pages/reviews/ReviewForm";
import AccountRegistered from "../pages/signUp/AccountRegistered";
import UserPage from "../pages/user/UserPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalog/all" element={<Catalog />} />
      <Route path="/catalog/all/:category" element={<Catalog />} />
      <Route path="/catalog/:carId" element={<CarDetails />} />
      <Route path="/application" element={<Application />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/user" element={<User />} />
      <Route path="/restore-password" element={<RestorePassword />} />
      <Route path="/code-from-email" element={<CodeFromEmail />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reviews" element={<ReviewForm />} />
      <Route path="/account-registered" element={<AccountRegistered />} />
      <Route path="/user-page/*" element={<UserPage />} />
    </Routes>
  );
};

export default Routers;
