import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import UserProfileForm from "./UserProfileForm";
import UserSidebar from "./UserSidebar";
import OrderStatus from "./order-history/OrderStatus";
import Notification from "./notification/Notification";
import Faq from "./help-support/Faq";
import UserFavourite from "./UserFavourite";
import Footer from "../../components/Footer/Footer";

import UserShoppingCart from "./UserShoppingCart";

import "../../styles/user-page.css";

const UserPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowSidebar(location.pathname === "/user-page");
    }
  }, [location, isMobile]);

  const handleBackToSidebar = () => {
    navigate("/user-page");
    setShowSidebar(true);
  };

  return (
    <>
      <div className="container">
        <div className="user-page-wrapper">
          <div className="user-page">
            {isMobile ? (
              showSidebar ? (
                <UserSidebar
                  onSelect={() => setShowSidebar(false)}
                  className="user-sidebar"
                />
              ) : (
                <div className="user-profile-container active">
                  <button className="back-button" onClick={handleBackToSidebar}>
                    <RiArrowLeftDoubleFill className="double-arrow" />
                    Go back to menu
                  </button>
                  <Routes>
                    <Route path="profile" element={<UserProfileForm />} />
                    <Route
                      path="shopping-cart"
                      element={<UserShoppingCart />}
                    />
                    <Route path="favourite" element={<UserFavourite />} />
                    <Route path="order-history" element={<OrderStatus />} />
                    <Route path="notification" element={<Notification />} />
                    <Route path="help-&-support" element={<Faq />} />
                    <Route
                      path="*"
                      element={<Navigate to="/user-page/profile" />}
                    />
                  </Routes>
                </div>
              )
            ) : (
              <>
                <UserSidebar className="user-sidebar" />
                <div className="user-profile-container">
                  <Routes>
                    <Route path="profile" element={<UserProfileForm />} />
                    <Route
                      path="shopping-cart"
                      element={<UserShoppingCart />}
                    />
                    <Route path="favourite" element={<UserFavourite />} />
                    <Route path="order-history" element={<OrderStatus />} />
                    <Route path="notification" element={<Notification />} />
                    <Route path="help-&-support" element={<Faq />} />
                    <Route
                      path="*"
                      element={<Navigate to="/user-page/profile" />}
                    />
                  </Routes>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default UserPage;
