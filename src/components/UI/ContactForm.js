import React, { useState } from "react";
import "../../styles/contact-form.css";

const ContactForm = ({ onSubmit }) => {
  const initialFormData = {
    fullName: "",
    phoneNumber: "",
    email: "",
    carInterest: "",
    additionalComment: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  const handlePhoneInput = (e) => {
    const { name, value } = e.target;
    const onlyNumbers = value.replace(/\D/g, "");
    setFormData({
      ...formData,
      [name]: onlyNumbers,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Full name"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        value={formData.phoneNumber}
        onChange={handlePhoneInput}
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
  );
};

export default ContactForm;
