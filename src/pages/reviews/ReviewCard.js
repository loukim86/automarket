import "../../styles/review-card.css";

const ReviewCard = ({ image, name, date, rating, text }) => {
  return (
    <div className="review-card">
      <div className="review-card__image">
        <img src={image} alt={`${name}'s review`} className="user-avatar" />
      </div>
      <div className="review-card__content">
        <div className="review-card__header">
          <div className="review-card__inner">
            <p className="review-card__title">{name}</p>
            <div className="review-card__rating">
              {rating.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
          </div>

          <div className="review-card__date">{date}</div>
        </div>

        <p className="review-card__text">{text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
