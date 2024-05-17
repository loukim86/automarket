import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../styles/account-registered.css";

const AccountRegistered = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/user");
  };

  return (
    <>
      <div className="container">
        <div className="success">
          <p className="success-title">Congratulation!</p>
          <p className="success-text">Account registration was successful</p>
          <button className="success-button" onClick={handleSubmit}>
            Go to Login
          </button>
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default AccountRegistered;
