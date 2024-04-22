import arrow from "../../assets/img/arrow-down.svg";
import "../../styles/search-car.css";

const SearchCar = () => {
  return (
    <div className="search-panel">
      <div className="search-input">
        Brand
        <p>Hyundai</p>
      </div>
      <div className="search-input">
        Seria
        <p>Ioniq 5</p>
      </div>
      <div className="search-input">
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
