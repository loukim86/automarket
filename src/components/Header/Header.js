import { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";

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
    display: "About",
  },

  {
    path: "/contacts",
    display: "Contacts",
  },
  {
    path: "/favorite",
    display: "Favorite",
  },
  {
    path: "/cart",
    display: "Cart",
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
            <i class="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
