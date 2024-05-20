import { NavLink, Link } from "react-router-dom";
import alogo from "../../assets/img/a-logo.svg";
import ContactUsCard from "../UI/ContactUsCard";
import "../../styles/footer.css";

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
          <Link to="/">
            <img src={alogo} alt="logo-img" className="footer-img" />
            <p className="footer-text">
              AUTO<span>MARKET</span>
            </p>
          </Link>
        </div>
        <div className="footer-menu">
          {navLinks.map((item, index) => (
            <NavLink to={item.path} key={index}>
              {item.display}
            </NavLink>
          ))}
        </div>
        <div className="contact-us-card-mobile">
          <ContactUsCard />
        </div>
      </div>
    </>
  );
};

export default Footer;
