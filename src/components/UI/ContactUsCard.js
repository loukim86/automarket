import phone from "../../assets/img/device-phone.svg";
import email from "../../assets/img/email.svg";
import pin from "../../assets/img/pin.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/arcticons_twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";
import '../../styles/contact-us-card.css'

const ContactUsCard = () => {
  return (
    <div className="contact-info hide-on-mobile">
    <div className="contact-us">
      <h2>CONTACT US</h2>
    </div>
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
  )
}

export default ContactUsCard