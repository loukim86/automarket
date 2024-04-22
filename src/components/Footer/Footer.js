import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/footer-logo.png'
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
      <Container>
        <div className='footer'>
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-menu">
            {navLinks.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
