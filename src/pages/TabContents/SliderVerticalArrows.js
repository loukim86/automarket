import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider-vertical-arrows.css";

export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} vertical-up`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
        fill="currentColor"
      >
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
      </svg>
    </div>
  );
};

export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} vertical-down`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
        fill="currentColor"
        className="svg-icon"
      >
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </div>
  );
};
