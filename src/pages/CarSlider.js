import Slider from "react-slick";
import {
  CustomPrevArrow,
  CustomNextArrow,
} from "../pages/TabContents/SliderVerticalArrows";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "../styles/car-slider.css";

const CarSlider = ({ car, activeImage, setActiveImage }) => {
  const settingsCars = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          prevArrow: null,
          nextArrow: null,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          prevArrow: null,
          nextArrow: null,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          prevArrow: null,
          nextArrow: null,
        },
      },
    ],
  };

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <>
      <div className="car-slider slider-desktop">
        <Slider {...settingsCars}>
          {car.images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(image)}
              className={`slider-image-wrapper ${
                activeImage === image ? "active" : ""
              }`}
            >
              <img
                src={image}
                alt={`Car Image ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="selected-img-box img-box-desktop">
        {activeImage ? (
          <img src={activeImage} alt="Selected" className="selected-img" />
        ) : (
          <p>Choose picture</p>
        )}
      </div>

      <div className="mobile-car-slider">
        <div className="selected-img-box">
          {activeImage ? (
            <img src={activeImage} alt="Selected" className="selected-img" />
          ) : (
            <p>Choose picture</p>
          )}
        </div>
        <div className="car-slider">
          <Slider {...settingsCars}>
            {car.images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                className={`slider-image-wrapper ${
                  activeImage === image ? "active" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Car Image ${index + 1}`}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarSlider;
