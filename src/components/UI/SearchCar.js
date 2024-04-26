import arrow from "../../assets/img/arrow-down.svg";
import "../../styles/search-car.css";

const SearchCar = () => {
  return (
    <div className="search-panel">
      <div className="search-input--brand">
        Brand
        <p>Hyundai</p>
      </div>
      <div className="divider"></div>
      <div className="search-input--seria">
        Seria
        <p>Ioniq 5</p>
      </div>
      <div className="divider"></div>
      <div className="search-input--year">
        Year
        <p>2022</p>
      </div>
      <div className="search-button">
        <button className="search">Search</button>
      </div>
      <div className="arrow-logo">
        <img src={arrow} alt="arrow down" />
      </div>
    </div>
  );
};

export default SearchCar;
