import { IoMdStarOutline } from "react-icons/io";
import { useFavorites } from "./context/FavoriteContext";
import { useState, useEffect, useRef } from "react";

import "../styles/car-info.css";

const CarInfo = ({ car, carBrandAndModel, carNumber, carCEngineCapacity }) => {
  const { addToCart, removeFromCart, cartItems } = useFavorites();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const hasViewed = useRef(false);

  useEffect(() => {
    setIsAddedToCart(
      cartItems.some((item) => item.pk_car_id === car.pk_car_id)
    );
  }, [cartItems, car.pk_car_id]);

  const handleAddToCart = () => {
    if (isAddedToCart) {
      removeFromCart(car.pk_car_id);
    } else {
      addToCart(car);
    }
    setIsAddedToCart(!isAddedToCart);
  };

  useEffect(() => {
    if (!hasViewed.current) {
      car.views = (car.views || 0) + 1;
      hasViewed.current = true;
    }
  }, [car]);

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
      <p className="car-details-content">
        Engine capacity: <span className="details">{carCEngineCapacity}</span>
      </p>
      <p className="car-details-content">
        Fuel: <span className="details">{car.fuel_type_ru}</span>
      </p>
      <p className="car-details-content">
        Transmission: <span className="details">Automatic</span>
      </p>
      <p className="car-details-content">
        Car model: <span className="details">{car.v_type_ru}</span>
      </p>
      <p className="car-details-content">
        Color: <span className="details">{car.color_ru}</span>
      </p>
      <p className="car-details-content">
        Area: <span className="details">Seoul</span>
      </p>
      <p className="car-details-content">
        Number of views: <span className="details">{car.views}</span>
      </p>
      <p className="car-details-content">
        In favorites: <span className="details">{car.favorites || 0}</span>
      </p>
      <p className="car-details-price">{car.price}$</p>

      <button className="car-details-button" onClick={handleAddToCart}>
        {isAddedToCart ? "Added To Cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default CarInfo;
