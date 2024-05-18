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
          slidesToShow: 3,
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
