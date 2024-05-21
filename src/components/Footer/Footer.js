import { NavLink, Link } from "react-router-dom";
import alogo from "../../assets/img/a-logo.svg";
import pin from "../../assets/img/pin.svg";
import phone from "../../assets/img/device-phone.svg";
import email from "../../assets/img/email.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/arcticons_twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";
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
          <div className="contact-details">
            <p className="contact">
              <img className="contact-icon" src={phone} alt="phone icon" />
              010-1234-5678
            </p>
            <p className="contact">
              <img className="contact-icon" src={email} alt="email icon" />
              info@automarket.com
            </p>
            <p className="contact address">
              <img className="contact-icon" src={pin} alt="pin icon" /> 123 Main
              Street Apt 4B <br /> City, State 56789 Country
            </p>
            <div className="media-icons">
              <img src={instagram} alt="Instagram icon" className="intagram" />
              <img src={twitter} alt="Twitter icon" className="twitter" />
              <img src={facebook} alt="Facebook icon" className="facebook" />
              <img src={youtube} alt="Youtube icon" className="youtube" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
