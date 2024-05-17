import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonials-carousel.css";
import "../../styles/slider-arrows.css";

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="currentColor"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </div>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="currentColor"
      >
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    </div>
  );
};
