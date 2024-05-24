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
  const [activeItem, setActiveItem] = useState("profile");
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 1000;

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (onSelect) {
      onSelect(item);
    }
    navigate(`/user-page/${item.replace(/\s+/g, "-").toLowerCase()}`);
    if (item === "log out") {
      localStorage.removeItem("userData");
      navigate("/user");
    }
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "profile" ? "active" : ""
          }`}
          onClick={() => handleItemClick("profile")}
        >
          <img src={profile} alt="" className="sidebar-icon profile" />
          Profile
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "shopping cart" ? "active" : ""
          }`}
          onClick={() => handleItemClick("shopping cart")}
        >
          <img src={cart} alt="" className="sidebar-icon cart" />
          Shopping cart
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "favourite" ? "active" : ""
          }`}
          onClick={() => handleItemClick("favourite")}
        >
          <img src={heart} alt="" className="sidebar-icon heart" />
          Favourite
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "order history" ? "active" : ""
          }`}
          onClick={() => handleItemClick("order history")}
        >
          <img src={shoppingBag} alt="" className="sidebar-icon bag" />
          Order history
        </li>
        <li
          className={`sidebar-item ${
            !isMobile && activeItem === "notification" ? "active" : ""
          }`}
          onClick={() => handleItemClick("notification")}
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
            !isMobile && activeItem === "help & support" ? "active" : ""
          }`}
          onClick={() => handleItemClick("help & support")}
        >
          <img src={aq} alt="" className="sidebar-icon aq" />
          Help & Support
        </li>
        <hr />
        <li
          className={`sidebar-item logout ${
            !isMobile && activeItem === "log out" ? "active" : ""
          }`}
          onClick={() => handleItemClick("log out")}
        >
          <img src={logout} alt="" className="sidebar-icon logout" />
          Log out
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
