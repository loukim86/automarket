import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../styles/code-from-email.css";

const CodeFromEmail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData && code === userData.password) {
      navigate("/account-registered");
    } else {
      alert("Неверный код подтверждения. Попробуйте еще раз.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="email-code">
          <p className="email-code-title">Code from email</p>
          <p className="email-code-subtitle">
            Enter the code sent to email{" "}
            {userData ? userData.email : "your email"}
          </p>
          <form className="email-code-form" onSubmit={handleSubmit}>
            <div className="code-input-wrapper">
              <input
                type="text"
                placeholder="Code"
                className="input-field"
                value={code}
                onChange={handleChange}
                required
              />
            </div>
            <p className="code-notice">
              If you have not received a confirmation code within 2 minutes,
              contact Help&Support
            </p>

            <button type="submit" className="code-button">
              Send
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

export default CodeFromEmail;
