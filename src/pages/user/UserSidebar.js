import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/img/person.svg";
import cart from "../../assets/img/shopping-cart.svg";
import heart from "../../assets/img/heart-icon.svg";
import shoppingBag from "../../assets/img/shopping-bag.svg";
import notification from "../../assets/img/notification-new.svg";
import aq from "../../assets/img/comments.svg";
import logout from "../../assets/img/share.svg";
import "../../styles/user-sidebar.css";

const UserSidebar = ({ onSelect }) => {
  const [activeItem, setActiveItem] = useState("Profile");
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 1000;

  const handleItemClick = (item) => {
    setActiveItem(item);
    onSelect(item);
    if (item === "Log out") {
      localStorage.removeItem("userData");
      navigate("/user");
    }
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "Profile" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Profile")}
        >
          <img src={profile} alt="" className="sidebar-icon profile" />
          Profile
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "Shopping cart" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Shopping cart")}
        >
          <img src={cart} alt="" className="sidebar-icon cart" />
          Shopping cart
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "Favourite" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Favourite")}
        >
          <img src={heart} alt="" className="sidebar-icon heart" />
          Favourite
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "Order history" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Order history")}
        >
          <img src={shoppingBag} alt="" className="sidebar-icon bag" />
          Order history
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "Notification" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Notification")}
        >
          <img
            src={notification}
            alt=""
            className="sidebar-icon notification"
          />
          Notification
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "Help & Support" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Help & Support")}
        >
          <img src={aq} alt="" className="sidebar-icon aq" />
          Help & Support
        </li>
        <hr />
        <li
          className={`sidebar-item logout ${
            !isMobile && activeItem === "Log out" ? "active" : ""
          }`}
          onClick={() => handleItemClick("Log out")}
        >
          <img src={logout} alt="" className="sidebar-icon logout" />
          Log out
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
