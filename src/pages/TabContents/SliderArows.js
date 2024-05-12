export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        left: "7px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
};

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        right: "85px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
};
