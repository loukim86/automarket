import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import cardImg from "../../assets/img/new-arrival.png";
import "../../styles/card-car.css";

const CardCar = () => {
  return (
    <div className="card-car">
      <div className="card-car__header">
        <p>HYUNDAI</p>
        <span className="card-car__price">15,000$</span>
      </div>
      <img src={cardImg} alt="Hyundai Car" className="card-car__image" />
      <div className="card-car__info">
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
      <div className="card-car__actions">
        <button className="card-car__details-button">
          View details <IoIosArrowForward className="card-car__icon"/>
        </button>
        <FaRegHeart className="card-car__like-icon" />
      </div>
    </div>
  );
};

export default CardCar;
