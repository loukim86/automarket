import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import SuccessPopup from "../../components/UI/SuccessPopup";
import iconDw from "../../assets/img/icon-dw.svg";
import "../../styles/review-form.css";

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfPurchase: "",
    additionalComment: "",
    image: "",
    rating: 0,
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, formData]);
    setFormData({
      fullName: "",
      dateOfPurchase: "",
      additionalComment: "",
      image: "",
      rating: 0,
    });
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <>
      <div className="container">
        <div className="review-form__wrapper">
          <p className="review-form__title">CAR OWNER REVIEWS</p>
          <div className="review-form__card">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                image={review.image}
                name={review.fullName}
                date={review.dateOfPurchase}
                rating={Array(5)
                  .fill(<IoMdStarOutline className="review-icon" />)
                  .map((star, i) =>
                    i < review.rating ? (
                      <IoMdStar key={i} className="review-icon filled" />
                    ) : (
                      <IoMdStarOutline key={i} className="review-icon" />
                    )
                  )}
                text={review.additionalComment}
              />
            ))}
          </div>

          <div className="review-form__content">
            <p className="review-form__title">LEAVE YOUR REVIEW</p>
            <div className="review-form">
              <form
                className="review-form__application"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dateOfPurchase"
                  placeholder="Date of purchase/sale"
                  value={formData.dateOfPurchase}
                  onChange={handleChange}
                />
                <div className="textarea-wrapper">
                  <textarea
                    name="additionalComment"
                    placeholder="Freely tell us your impressions of the purchase/sale, your opinion about the services, etc."
                    value={formData.additionalComment}
                    onChange={handleChange}
                  ></textarea>
                  <div className="stars">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <span key={i} onClick={() => handleRatingChange(i + 1)}>
                          {i < formData.rating ? (
                            <IoMdStar className="review-icon filled" />
                          ) : (
                            <IoMdStarOutline className="review-icon" />
                          )}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="file-upload-wrapper">
                  <input
                    t
                    type="file"
                    id="file1"
                    className="file-input"
                    name="image"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file1" className="file-label">
                    <img
                      src={iconDw}
                      alt="Upload"
                      className="upload-thumbnail"
                    />
                  </label>
                  <input
                    t
                    type="file"
                    id="file2"
                    className="file-input"
                    name="image"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file2" className="file-label">
                    <img
                      src={iconDw}
                      alt="Upload"
                      className="upload-thumbnail"
                    />
                  </label>
                  <input
                    t
                    type="file"
                    id="file3"
                    className="file-input"
                    name="image"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file3" className="file-label">
                    <img
                      src={iconDw}
                      alt="Upload"
                      className="upload-thumbnail"
                    />
                  </label>
                  <input
                    t
                    type="file"
                    id="file4"
                    className="file-input"
                    name="image"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file3" className="file-label">
                    <img
                      src={iconDw}
                      alt="Upload"
                      className="upload-thumbnail"
                    />
                  </label>
                  <input
                    t
                    type="file"
                    id="file5"
                    className="file-input"
                    name="image"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file4" className="file-label">
                    <img
                      src={iconDw}
                      alt="Upload"
                      className="upload-thumbnail"
                    />
                  </label>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
       {showSuccessPopup && (
        <SuccessPopup
          closePopup={closeSuccessPopup}
          title="Thank you!"
          message1="Your feedback has been received."
          message2="We will take into account your"
          message3="opinions and wishes."
        />
      )}
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default ReviewForm;
