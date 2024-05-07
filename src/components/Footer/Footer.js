import { NavLink } from "react-router-dom";
import logo from "../../assets/img/footer-logo.png";
import logoMobile from "../../assets/img/mobile-logo.png";
import ContactUsCard from "../UI/ContactUsCard";
import "./Footer.css";

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

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-desktop" />
          <img src={logoMobile} alt="Logo" className="logo-mobile" />
        </div>
        <div className="footer-menu">
          {navLinks.map((item, index) => (
            <NavLink to={item.path} key={index}>
              {item.display}
            </NavLink>
          ))}
        </div>
        <div className="contact-us-card">
          <ContactUsCard />
        </div>
      </div>
    </>
  );
};

export default Footer;
