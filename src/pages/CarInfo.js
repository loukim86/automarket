import { IoMdStarOutline } from "react-icons/io";
import { useFavorites } from "./context/FavoriteContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CarInfo = ({ car, carBrandAndModel, carNumber }) => {
  const { addToCart } = useFavorites();
  const navigate = useNavigate();

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(car);
    setIsAddedToCart(true);
  };

  return (
    <div className="car-details-info">
      <p className="car-details-title">{carBrandAndModel}</p>

      <div className="car-stars">
        <IoMdStarOutline className="star-icon" />
        <IoMdStarOutline className="star-icon" />
        <IoMdStarOutline className="star-icon" />
        <IoMdStarOutline className="star-icon" />
        <IoMdStarOutline className="star-icon" />
      </div>
      <p className="car-details-content">
        Car number: <span className="details">{carNumber}</span>
      </p>
      <p className="car-details-content">
        Year of issue: <span className="details">{car.production_year}</span>
      </p>
      <p className="car-details-content">
        Mileage: <span className="details">{car.distance} km</span>
      </p>
      <p className="car-details-content">Engine capacity: </p>
      <p className="car-details-content">
        Fuel: <span className="details">{car.fuel_type_ru}</span>
      </p>
      <p className="car-details-content">Transmission: </p>
      <p className="car-details-content">
        Car model: <span className="details">{car.v_type_ru}</span>
      </p>
      <p className="car-details-content">
        Color: <span className="details">{car.color_ru}</span>
      </p>
      <p className="car-details-content">Area: </p>
      <p className="car-details-content">Number of views: </p>
      <p className="car-details-content">In favorites: </p>
      <p className="car-details-price">{car.price}$</p>
      <button className="car-details-button" onClick={handleAddToCart}>
        {isAddedToCart ? "Added To Cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default CarInfo;
