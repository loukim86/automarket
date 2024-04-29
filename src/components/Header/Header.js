import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";
import favorite from "../../assets/img/Vector.svg";
import cart from "../../assets/img/cart1.svg";
import user from "../../assets/img/user.png";

import "./header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/catalog",
    display: "Catalog",
  },
  {
    path: "/application",
    display: "Application",
  },
  {
    path: "/about",
    display: "About us",
  },

  {
    path: "/contacts",
    display: "Contacts",
  },
];

const extraLinks = [
  {
    path: "/favorite",
    display: <img src={favorite} alt="Favorite" className="heart" />,
  },
  {
    path: "/cart",
    display: <img src={cart} alt="Cart" className="cart" />,
  },
  {
    path: "/user",
    display: <img src={user} alt="User" className="user" />,
  },
];
const Header = () => {
  const [active, setActive] = useState("navbar");
  const [transparent, setTransparent] = useState("header");

  useEffect(() => {
    const addBg = () => {
      if (window.scrollY >= 10) {
        setTransparent("header active-header");
      } else {
        setTransparent("header");
      }
    };

    window.addEventListener("scroll", addBg);

    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

  const showNav = () => {
    setActive("navbar active-navbar");
  };

  const removeNav = () => {
    setActive("navbar");
  };

  return (
    <section className="navbar-section">
      <header className={transparent}>
        <div className="logo-div">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className={active}>
          <ul onClick={removeNav} className="nav-lists flex">
            {navLinks.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink to={item.path} className="nav-link">
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="header-icon flex">
            {extraLinks.map((item, index) => (
              <div key={index}>
                <NavLink to={item.path} className="icon icon-item">
                  {item.display}
                </NavLink>
              </div>
            ))}
          </div>
          <div onClick={showNav} className="toggle-navbar">
            <img src={burger} alt="Burger menu" className="burger-menu" />
          </div>
          
          
        </div>
        <div onClick={removeNav} className="close-navbar">
            <GrClose className="close-icon" />
          </div>
      </header>
    </section>
  );
};

export default Header;
