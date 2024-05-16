import { useState } from "react";
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
  const [selectedComponent, setSelectedComponent] = useState("Profile");

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
        return <UserProfileForm />;
    }
  };

  return (
    <>
      <div className="container">
        <div className="user-page-wrapper">
          <div className="user-page">
            <UserSidebar onSelect={setSelectedComponent} />
            <div className="user-profile-container">{renderComponent()}</div>
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
