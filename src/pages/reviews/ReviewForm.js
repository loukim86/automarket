import { useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import ReviewCard from "./ReviewCard";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import SuccessPopup from "../../components/UI/SuccessPopup";
import iconDw from "../../assets/img/icon-dw.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "additionalComment") {
      const words = value.split(/\s+/);
      if (words.length > 40) {
        return;
      }
    }
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
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <div className="review-form__wrapper">
          <p className="review-form__title">CAR OWNER REVIEWS</p>
          <div className="review-form__card">
            {isMobile ? (
              <Slider {...settings}>
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
              </Slider>
            ) : (
              reviews.map((review, index) => (
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
              ))
            )}
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
                  type="date"
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
                    type="file"
                    id="file4"
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
                  <input
                    type="file"
                    id="file5"
                    className="file-input"
                    name="image"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file5" className="file-label">
                    <img
                      src={iconDw}
                      alt="Upload"
                      className="upload-thumbnail"
                    />
                  </label>
                </div>
                <button type="submit" className="review-btn">Send</button>
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
