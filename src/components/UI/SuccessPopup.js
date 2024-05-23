import closeButton from "../../assets/img/popup-close.svg";
import "../../styles/success-popup.css";

const SuccessPopup = ({ closePopup, title, message1, message2, message3 }) => {
  return (
    <div className="popup success">
      <div className="success-content">
        <img
          src={closeButton}
          onClick={closePopup}
          alt="Close button"
          className="close-button"
        />
        <div className="success-title">{title}</div>
        <div className="success-text1">{message1}</div>
        <div className="success-text2">{message2}</div>
        <div className="success-text3">{message3}</div>
        <button className="ok-button" onClick={closePopup}>OK</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
