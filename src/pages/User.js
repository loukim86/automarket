import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "../styles/login-modal.css";

const LoginModal = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      email === userData.email &&
      password === userData.password
    ) {
      alert("Successful Login!");
      navigate("/user-page");
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="modal">
          <p className="modal-title">LOGIN</p>
          <p className="modal-greeting">welcome to Automarket</p>
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <Link to="/restore-password" className="forgot-password">
                Forgot your password?
              </Link>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="middle-word">or</div>
            <button
              type="button"
              className="signin-button"
              onClick={handleSignUpClick}
            >
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

export default LoginModal;
