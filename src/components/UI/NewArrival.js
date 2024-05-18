import Slider from "react-slick";
import CardCar from "./CardCar";
import { PrevArrow, NextArrow } from "../../pages/TabContents/SliderArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials-carousel.css";

import "../../styles/new-arrival.css";

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 6,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 6,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 320,
        settings: {
          dots: true,
          slidesToShow: 1.05,
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
        <Slider {...settings}>
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
