import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import heart from "../../assets/img/heart.svg";
import user from "../../assets/img/user.png";
import burgerMenu from "../../assets/img/burger.png";
import alogo from "../../assets/img/a-logo.svg";
import CartIcon from "../UI/CartIcon";

import "../../styles/header.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const links = [
    { to: "/home", label: "Home" },
    { to: "/catalog", label: "Catalog" },
    { to: "/application", label: "Application" },
    { to: "/about", label: "About us" },
    { to: "/contacts", label: "Contacts" },
  ];

  return (
    <header>
      <nav>
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <GrClose />
          </div>
          <ul className="mobile-navbar__links">
            {links.map((link) => (
              <li key={link.to}>
                <Link onClick={openNav} to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar">
          <div className="mobile-hamb" onClick={openNav}>
            <img src={burgerMenu} alt="mobile menu" />
          </div>
          <div className="navbar__img">
            <Link to="/">
              <img src={alogo} alt="logo-img" className="main-logo" />
              <p className="logo-text">
                AUTO<span>MARKET</span>
              </p>
            </Link>
          </div>
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink activeClassName="active" to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar__icons">
            <Link to="/favorite">
              <img src={heart} alt="heart icon" className="heart-icon" />
            </Link>
            <Link to="/cart">
              <CartIcon />
            </Link>
            <Link to="/user">
              <img src={user} alt="user icon" className="user-icon" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

// const Header = () => {
//   const [nav, setNav] = useState(false);

//   const openNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       <nav>
//         <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
//           <div onClick={openNav} className="mobile-navbar__close">
//             <GrClose />
//           </div>
//           <ul className="mobile-navbar__links">
//             <li>
//               <Link onClick={openNav} to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/catalog">
//                 Catalog
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/application">
//                 Application
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/about">
//                 About us
//               </Link>
//             </li>
//             <li>
//               <Link onClick={openNav} to="/contacts">
//                 Contacts
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="navbar">
//           <div className="mobile-hamb" onClick={openNav}>
//             <img src={burgerMenu} alt="mobile menu" />
//           </div>
//           <div className="navbar__img">
//             <Link to="/" onClick={() => window.scrollTo(0, 0)}>
//               <img src={alogo} alt="logo-img" className="main-logo" />
//               <p className="logo-text">
//                 AUTO<span>MARKET</span>
//               </p>
//             </Link>
//           </div>
//           <ul className="navbar__links">
//             <li>
//               <NavLink activeClassName="active" to="/home">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/catalog">
//                 Catalog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/application">
//                 Application
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/about">
//                 About us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink activeClassName="active" to="/contacts">
//                 Contacts
//               </NavLink>
//             </li>
//           </ul>
//           <div className="navbar__icons">
//             <Link to="/favorite">
//               <img src={heart} alt="heart icon" className="heart-icon" />
//             </Link>
//             <Link to="/cart">
//               <CartIcon />
//             </Link>
//             <Link to="/user">
//               <img src={user} alt="user icon" className="user-icon" />
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

export default Header;
