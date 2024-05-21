import CardCar from "../../components/UI/CardCar";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "./SliderArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials-carousel.css";
import "../../styles/similar-cars-slider.css";

const SimilarCarsSlider = () => {
  const settings = {
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="similar-cars-slider">
      <Slider {...settings}>
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </Slider>
    </div>
  );
};

export default SimilarCarsSlider;
