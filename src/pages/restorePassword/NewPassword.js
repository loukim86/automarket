import "../../styles/new-password.css";

const NewPassword = () => {
  return (
    <div className="container">
      <div className="password">
        <p className="password-title">New password</p>
        <form className="password-form">
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="New password"
              className="input-field"
              required
            />
          </div>
          <div className="code-input-wrapper">
            <input
              type="password"
              placeholder="Repeat new password"
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
