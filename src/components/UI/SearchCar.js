import carsData from "../../data/carsData.json";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SearchFilter from "../../components/UI/SearchFilter";

import "../../styles/search-car.css";

const modelOptions = [
  "Subcompact cars",
  "Compact car",
  "Midsize car",
  "Sports car",
  "Minivans",
  "SUV's",
];
const priceOptions = [
  "0-2M",
  "2-4M",
  "4-6M",
  "6-10M",
  "10-15M",
  "15-2OM",
  "20-25M",
];

const SearchCar = () => {
  function capitalize(str) {
    return str.toUpperCase();
  }

  const [brand, setBrand] = useState("");
  const [seria, setSeria] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [findBrand, setFindBrand] = useState([]);
  const [findYear, setFindYear] = useState([]);

  useEffect(() => {
    const newBrandOptions = carsData.cars.map((car) => {
      const words = car.title_ru.split(" ");
      return capitalize(words[1]);
    });
    setFindBrand(newBrandOptions);
  }, []);

  useEffect(() => {
    const newYearOptions = carsData.cars.map((car) => {
      const words = car.title_ru.split(" ");
      return words[0];
    });
    setFindYear(newYearOptions);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", { brand, seria, year });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="form-container">
      <form className="search-panel" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="brand-label">Brand</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {findBrand.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="divider"></div>

        <div className="input-group desktop-only">
          <label>Seria</label>
          <input
            type="text"
            value={seria}
            onChange={(e) => setSeria(e.target.value)}
          />
        </div>
        <div className="divider"></div>

        <div className="input-group desktop-only">
          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            {findYear.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mobile-only">
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            {modelOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mobile-only">
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            {priceOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-search">
          Search
        </button>
        <IoIosArrowDown className="arrow-icon" onClick={toggleFilters} />

        <SearchFilter isVisible={showFilters} />
      </form>
    </div>
  );
};

export default SearchCar;
