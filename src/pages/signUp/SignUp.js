import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../styles/sign-up.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords must match");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));

    navigate("/code-from-email");
  };

  return (
    <>
      <div className="container">
        <div className="sign-up">
          <p className="sign-up-title">SIGN UP</p>
          <p className="sign-up-greeting">welcome to Automarket</p>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className="input-field"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper input-row">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat password"
                className="input-field"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                className="input-field"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="sign-up-button">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
