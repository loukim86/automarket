import PropTypes from "prop-types";
import "../../styles/car-information-card.css";

const CarInformationCard = ({ toggleCarInfo, cardStyle, infoStyle, data }) => {
  if (!data) {
    return <div className={cardStyle}>No data available</div>;
  }

  return (
    <div className={cardStyle} onClick={toggleCarInfo}>
      {Object.keys(data).map((key) => (
        <p key={key} className={infoStyle}>
          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
          <span className="info-details">{data[key]}</span>
        </p>
      ))}
    </div>
  );
};

CarInformationCard.propTypes = {
  cardStyle: PropTypes.string.isRequired,
  infoStyle: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default CarInformationCard;
