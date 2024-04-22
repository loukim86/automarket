import { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import SearchCar from "../UI/SearchCar";
import BannerHeading from "../UI/BannerHeading";
import logo from "../../assets/img/logo.png";
import burger from "../../assets/img/burger.png";
import favorite from "../../assets/img/heart.png";
import cart from "../../assets/img/cart.png";
import user from "../../assets/img/user.png";

import "./Header.css";

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
    display: <img src={favorite} alt="Favorite" />,
  },
  {
    path: "/cart",
    display: <img src={cart} alt="Cart" />,
  },
  {
    path: "/user",
    display: <img src={user} alt="User" />,
  },
];
const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <div className="main-navbar">
      <Container>
        <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <span className="mobile__menu">
            <img src={burger} alt="burger menu" onClick={toggleMenu} />
          </span>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="navbar">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
              <div className="extra-links">
                {extraLinks.map((item, index) => (
                  <div key={index}>
                    <NavLink to={item.path} className="logo__items">
                      {item.display}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    <BannerHeading/> 
    <SearchCar/>
    </div>
  );
};

export default Header;
