import closeButton from "../../assets/img/popup-close.svg";
import "../../styles/error-popup.css";

const ErrorPopup = ({ closePopup }) => {
  return (
    <div className="popup error">
      <div className="error-content">
        <img
          src={closeButton}
          onClick={closePopup}
          alt="Close button"
          className="close-button"
        />
        <div className="error-title">Error...</div>
        <div className="error-text">
          Something went wrong. <br /> Please, try again.
        </div>
        <button className="ok-button" onClick={closePopup}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
