import { useNavigate } from 'react-router-dom';
import '../../styles/account-registered.css'

const AccountRegistered = () => {
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/user");
  };

  return (
    <div className="container">
      <div className="success">
        <p className="success-title">Congratulation!</p>
        <p className="success-text">Account registration was successful</p>
        <button className="success-button" onClick={handleSubmit}>Go to Login</button>
      </div>
    </div>
  );
};

export default AccountRegistered;
