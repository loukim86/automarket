import closeButton from '../../assets/img/popup-close.svg'
import "../../styles/success-popup.css";

const SuccessPopup = ({ closePopup }) => {
  return (
    <div className="popup success">
      <div className="success-content">
        <img
          src={closeButton}
          onClick={closePopup}
          alt="Close button"
          className="close-button"
        />
        <div className="success-title">Thank you!</div>
        <div className="success-text">
          Your application is accepted. <br /> We will contact you shortly.
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
