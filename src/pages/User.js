import '../styles/login-modal.css'

const LoginModal = () => {

  return (
    <div className="container">
      <div className="modal">
        <p className="modal-title">LOGIN</p>
        <p className='modal-greeting'>welcome to Automarket</p>
        <form className='modal-form'>
          <input id="email" type="email" placeholder="Email" />
          <input id="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button type="button">
            Close
          </button>
        </form>
        <button >Sign up</button>
      </div>
    </div>
  );
};

export default LoginModal;
