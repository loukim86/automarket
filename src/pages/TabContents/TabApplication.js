import "../../styles/tab-application.css";

const TabApplication = () => {
  return (
    <div className="tab-application">
      <div className="inner-box">
        <form className="application-form">
          <input type="text" name="fullName" placeholder="Full name" />
          <input type="text" name="phoneNumber" placeholder="Phone number" />
          <input type="email" name="email" placeholder="Email" />
          <input
            type="text"
            name="carInterest"
            placeholder="The car you are interested in"
          />
          <textarea
            name="additionalComment"
            placeholder="Additional comment"
          ></textarea>
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default TabApplication;
