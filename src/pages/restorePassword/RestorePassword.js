import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../styles/restore-password.css";

const RestorePassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/code-from-email");
  };

  return (
    <>
      <div className="container">
        <div className="restore-password">
          <p className="restore-password-title">Restore Password</p>
          <form className="restore-form" onSubmit={handleSubmit}>
            <div className="restore-input-wrapper">
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                required
              />
            </div>

            <button type="submit" className="restore-button">
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

export default RestorePassword;
