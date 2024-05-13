import { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import { GrClose } from "react-icons/gr";
import heart from "../../assets/img/heart.svg";
import cart from "../../assets/img/cart1.svg";
import user from "../../assets/img/user.png";
import burgerMenu from "../../assets/img/burger.png";
import alogo from '../../assets/img/a-logo.svg'

import "./header.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* for mobile temporarily!!!*/}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
          <GrClose />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/catalog">
                Catalog
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/application">
                Application
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
        <div className="mobile-hamb" onClick={openNav}>
            <img src={burgerMenu} alt="mobile menu" />
          </div>
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={alogo} alt="logo-img" className="main-logo"/>
              <p className="logo-text">AUTO<span>MARKET</span></p>
            </Link>
          </div>
          <ul className="navbar__links">
         
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/application">
                Application
              </NavLink>
            </li>
            <li>
             
              <NavLink activeClassName="active" to="/about">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contacts">
                Contacts
              </NavLink>
            </li>
          
          </ul>
          <div className="navbar__icons">
            <Link to="/favorite">
              <img src={heart} alt="heart icon" className="heart"/>
            </Link>
            <Link to="/cart">
              <img src={cart} alt="cart icon" className="cart"/>
            </Link>
            <Link to="/user">
              <img src={user} alt="user icon" className="user"/>
            </Link>
          </div>

          {/* mobile */}
         
        </div>
      </nav>
    </>
  );
};

export default Header;
