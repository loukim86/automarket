import { useParams } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import { IoMdStarOutline } from "react-icons/io";
import carsData from "../data/carsData.json";
import "slick-carousel/slick/slick-theme.css";
import "../styles/car-details.css";

const CarDetails = () => {
  const { carId } = useParams();
  const car = carsData.cars.find((car) => car.pk_car_id.toString() === carId);
  const [activeImage, setActiveImage] = useState(car ? car.images[0] : null);

  if (!car) {
    return <div>Car not found!</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // beforeChange: (oldIndex, newIndex) => {
    //   setActiveImage(car.images[newIndex]);
    // }
  };

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const carNumberAttribute = car.attributes.find(
    (attr) => attr.attribute_id === 33924
  );
  const carNumber = carNumberAttribute
    ? carNumberAttribute.value
    : "Car number not specified";

  return (
    <div className="container">
      <div className="car-details-container">
        <div className="car-slider">
          <Slider {...settings}>
            {car.images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image)}>
                <img
                  src={image}
                  alt={`Car Image ${index + 1}`}
                  style={{ width: "11.3012rem", height: "9.02rem" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="selected-img-box">
          {activeImage ? (
            <img src={activeImage} alt="Selected" className="selected-img" />
          ) : (
            <p>Choose picture</p>
          )}
        </div>

        <div className="car-details-info">
          <p className="car-details-title">{car.title_ru}</p>
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
            Year of issue:{" "}
            <span className="details">{car.production_year}</span>
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
          <button className="car-details-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
