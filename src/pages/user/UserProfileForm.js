import { useState, useEffect, useRef } from "react";
import iconDw from "../../assets/img/icon-dw.svg";
import "../../styles/user-profile-form.css";

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const data = JSON.parse(savedData);
      setFormData(data);
      if (data.profileImage) {
        setProfileImage(data.profileImage);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const dataToSave = { ...formData, profileImage };
    localStorage.setItem("userData", JSON.stringify(dataToSave));
    alert("Profile updated successfully");
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      {profileImage ? (
        <img src={profileImage} alt="Profile" className="profile-image" />
      ) : (
        <div className="profile-image-placeholder">No Image</div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
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
      <div className="upload-button" onClick={handleUploadClick}>
        <img src={iconDw} alt="Upload" />
      </div>
      <div className="edit-button-container">
        <button type="submit" className="edit-button">
          Edit
        </button>
      </div>
    </form>
  );
};

export default UserProfileForm;
