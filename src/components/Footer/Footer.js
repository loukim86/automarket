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
  { path: "/home", display: "Home" },
  { path: "/catalog", display: "Catalog" },
  { path: "/application", display: "Application" },
  { path: "/about", display: "About us" },
  { path: "/contacts", display: "Contacts" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link to="/">
          <img src={alogo} alt="Auto Market Logo" className="footer-img" />
          <p className="footer-text">
            AUTO<span>MARKET</span>
          </p>
        </Link>
      </div>
      <nav className="footer-menu">
        {navLinks.map((item, index) => (
          <NavLink to={item.path} key={index}>
            {item.display}
          </NavLink>
        ))}
      </nav>
      <address className="contact-us-card-mobile">
        <div className="contact-details">
          <p className="contact">
            <img className="contact-icon" src={phone} alt="Phone icon" />
            010-1234-5678
          </p>
          <p className="contact">
            <img className="contact-icon" src={email} alt="Email icon" />
            info@automarket.com
          </p>
          <p className="contact address">
            <img className="contact-icon" src={pin} alt="Address icon" />
            123 Main Street Apt 4B <br /> City, State 56789 Country
          </p>
          <div className="media-icons">
            <a href="#" target="_blank">
              <img src={instagram} alt="Instagram icon" className="instagram" />
            </a>
            <a href="#" target="_blank">
              <img src={twitter} alt="Twitter icon" className="twitter" />
            </a>
            <a href="#" target="_blank">
              <img src={facebook} alt="Facebook icon" className="facebook" />
            </a>
            <a href="#" target="_blank">
              <img src={youtube} alt="Youtube icon" className="youtube" />
            </a>
          </div>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
