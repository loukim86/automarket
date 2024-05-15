import { useState } from "react";
import avatar from "../../assets/img/user-img.png";
import "../../styles/user-profile-form.css";

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "Ivan Ivanov",
    email: "ivanov@gmail.com",
    password: "",
    confirmPassword: "",
    phone: "010 1234 5678",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <img src={avatar} alt="Profile" className="profile-image" />
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <div className="password-input password-row">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Repeat password"
        />
      </div>

      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
      />
      <button type="submit" className="edit-button">
        Edit
      </button>
    </form>
  );
};

export default UserProfileForm;
