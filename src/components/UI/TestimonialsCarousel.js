import Slider from "react-slick";
import CustomerCard from "./CustomerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/testimonials-carousel.css';

const TestimonialsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-title">
        <p>WHAT OUR CUSTOMER SAY</p>
      </div>
      <Slider {...settings}>
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </Slider>
      <div className="testimonial-container__button">
        <button className="testimonial-button">Leave a review</button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
