import React, { useEffect, useState } from "react";
import phone from "../../assets/img/device-phone.svg";
import email from "../../assets/img/email.svg";
import pin from "../../assets/img/pin.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/arcticons_twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";
import closeButton from "../../assets/img/popup-close.svg";

import "../../styles/contact-us.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    carInterest: "",
    additionalComment: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setIsFormSubmitted(false);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
    setIsFormSubmitted(false);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setShowSuccessPopup(true);
      }, 2000);
    }
  }, [isFormSubmitted]);

  useEffect(() => {
    if (showErrorPopup) {
      const errorPopupTimeout = setTimeout(() => {
        setShowErrorPopup(false);
      }, 5000);

      return () => clearTimeout(errorPopupTimeout);
    }
  }, [showErrorPopup]);

  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <div className="contact-us">
          <h2>CONTACT US</h2>
        </div>
        <div className="contact-details">
          <p className="contact">
            <img className="contact-icon" src={phone} alt="phone icon" />{" "}
            010-1234-5678
          </p>
          <p className="contact">
            <img className="contact-icon" src={email} alt="email icon" />{" "}
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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="carInterest"
          placeholder="The car you are interested in"
          value={formData.carInterest}
          onChange={handleInputChange}
        />
        <textarea
          name="additionalComment"
          placeholder="Additional comment"
          value={formData.additionalComment}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Apply</button>
      </form>

      {showSuccessPopup && (
        <div className="popup success">
          <div className="popup-content">
            <div className="popup-close-button">
              <img src={closeButton} onClick={closeSuccessPopup} alt="Close button"/>
            </div>

            <div className="popup-title">Thank you!</div>
            <div className="popup-text">
              Your application is accepted. <br /> We will contact you shortly.
            </div>
          </div>
        </div>
      )}

      {showErrorPopup && (
        <div className="popup error">
          <div className="popup-content">
            <p>Error... Something went wrong. Please, try again.</p>
            <button onClick={closeErrorPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
