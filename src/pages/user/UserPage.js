import React, { useState, useEffect } from "react";
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
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    setSelectedComponent(window.innerWidth > 800 ? "Profile" : null);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Profile":
        return <UserProfileForm />;
      case "Shopping cart":
        return <UserShoppingCart />;
      case "Favourite":
        return <UserFavourite />;
      case "Order history":
        return <OrderStatus />;
      case "Notification":
        return <Notification />;
      case "Help & Support":
        return <Faq />;
      default:
        return null;
    }
  };

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  const handleBackToSidebar = () => {
    setSelectedComponent(null);
  };

  return (
    <>
      <div className="container">
        <div className="user-page-wrapper">
          <div className="user-page">
            {isMobile && !selectedComponent && (
              <UserSidebar
                onSelect={handleSelectComponent}
                className="user-sidebar"
              />
            )}
            {isMobile && selectedComponent && (
              <div className="user-profile-container active">
                <button className="back-button" onClick={handleBackToSidebar}>
                  Go back to menu
                </button>
                {renderComponent()}
              </div>
            )}
            {!isMobile && (
              <>
                <UserSidebar
                  onSelect={handleSelectComponent}
                  className="user-sidebar"
                />
                <div className="user-profile-container">
                  {renderComponent()}
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
