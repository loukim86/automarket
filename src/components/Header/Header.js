
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import bgImage from "../../assets/img/main-image.jpg";
import logo from "../../assets/img/logo.png";
import logoMob from "../../assets/img/mobile-logo.png";
import closeButton from "../../assets/img/popup-close.svg";
import heart from "../../assets/img/heart.svg";
import cart from "../../assets/img/cart1.svg";
import user from "../../assets/img/user.png";
import burgerMenu from "../../assets/img/burger.png";

import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <img src={bgImage} alt="Automarket" className="header-background" />
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <img src={closeButton} alt="Close icon" />
          ) : (
            <img src={burgerMenu} alt="Mobile menu" />
          )}
        </div>
        <div className="logo">
          <Link to="/"><img src={isMobile ? logoMob : logo} alt="Logo" className="logo-image" /></Link>
        </div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/application">Application</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          <div className="close-icon" onClick={toggleMenu}>
            <img src={closeButton} alt="Close button" />
          </div>
        </div>
        <div className="icons">
          <Link to="/favorite">
            <img src={heart} alt="Heart icon" className="heart" />
          </Link>
          <Link to="/cart">
            <img src={cart} alt="Cart icon" className="cart" />
          </Link>
          <Link to="/user">
            <img src={user} alt="User icon" className="user" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
