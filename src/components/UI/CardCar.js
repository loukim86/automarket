import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import cardImg from "../../assets/img/new-arrival.png";
import "../../styles/card-car.css";

const CardCar = () => {
  return (
    <div className="car-card">
      <div className="car-card__header">
        <p>HYUNDAI</p>
        <span className="car-card__price">15,000$</span>
      </div>
      <img src={cardImg} alt="Hyundai Car" className="car-card__image" />
      <div className="car-card__info">
        <p>
          <span>Year</span>2020
        </p>
        <p>
          <span>Fuel</span> Gas
        </p>
        <p>
          <span>Mileage </span>10,000km
        </p>
      </div>
      <div className="car-card__actions">
        <button className="car-card__details-button">
          View details <IoIosArrowForward className="car-card__icon"/>
        </button>
        <FaRegHeart className="car-card__like-icon" />
      </div>
    </div>
  );
};

export default CardCar;
