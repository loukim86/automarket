import Slider from "react-slick";
import {
  CustomPrevArrow,
  CustomNextArrow,
} from "../pages/TabContents/SliderVerticalArrows";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CarSlider = ({ car, activeImage, setActiveImage }) => {
  const settings = {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          <Slider {...settings}>
            {car.images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image)}>
                <img
                  src={image}
                  alt={`Car Image ${index + 1}`}
                  style={{
                    width: "11.3012rem",
                    height: "9.02rem",
                    borderRadius: "0.3125rem",
                  }}
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
