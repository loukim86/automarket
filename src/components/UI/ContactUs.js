import React, { useEffect, useState } from "react";
import SuccessPopup from "./SuccessPopup";
import ErrorPopup from "./ErrorPopup";
import ContactForm from "./ContactForm";
import ContactUsCard from "./ContactUsCard";

import "../../styles/contact-us.css";

const ContactUs = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSubmit = () => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setShowSuccessPopup(true);
    }, 2000);
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
    if (showErrorPopup) {
      const errorPopupTimeout = setTimeout(() => {
        setShowErrorPopup(false);
      }, 2000);

      return () => clearTimeout(errorPopupTimeout);
    }
  }, [showErrorPopup]);

  return (
    <div className="container">
      <div className="contact-us-container">
        <ContactUsCard />

        <ContactForm onSubmit={handleSubmit} />

        {showSuccessPopup && (
          <SuccessPopup
            closePopup={closeSuccessPopup}
            title="Thank you!"
            message1="Your application is accepted. We will contact you shortly."
          />
        )}
        {showErrorPopup && <ErrorPopup closePopup={closeErrorPopup} />}
      </div>
    </div>
  );
};

export default ContactUs;
