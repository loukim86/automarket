import Slider from "react-slick";
import CardCar from "./CardCar";
import { PrevArrow, NextArrow } from "../../pages/TabContents/SliderArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials-carousel.css";

import "../../styles/new-arrival.css";

const NewArrival = () => {
  const settingsArrival = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 600,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 400,
        settings: {
          dots: true,
          slidesToShow: 1.7,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 370,
        settings: {
          dots: true,
          slidesToShow: 1.7,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="arrival-container">
        <div className="arrival-title">
          <p>NEW ARRIVAL</p>
        </div>
        <Slider {...settingsArrival}>
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
        </Slider>
      </div>
    </div>
  );
};

export default NewArrival;
