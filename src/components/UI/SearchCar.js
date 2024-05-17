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
  const [findModel, setFindModel] = useState([]);

  useEffect(() => {
    const brandOptions = carsData.cars.map((car) => {
      const words = car.title_ru.split(" ");
      return capitalize(words[1]);
    });

    const uniqueBrandOptions = [...new Set(brandOptions)];

    setFindBrand(uniqueBrandOptions);
  }, []);

  useEffect(() => {
    const yearOptions = new Set();

    carsData.cars.forEach((car) => {
      yearOptions.add(car.production_year);
    });

    const uniqueYearOptions = Array.from(yearOptions);

    uniqueYearOptions.sort((a, b) => b - a);

    setFindYear(uniqueYearOptions);
  }, []);

  useEffect(() => {
    const modelOptions = carsData.cars.map((car) => {
      const models = car.title_ru.split(" ");

      if (models.length > 2) {
        return `${capitalize(models[2])} ${capitalize(models[3])}`;
      }

      return "Unknown Model";
    });
    const uniqueModelOptions = [...new Set(modelOptions)];
    setFindModel(uniqueModelOptions);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBrand("");
    setSeria("");
    setYear("");
    setModel("");
    setPrice("");
    setShowFilters(showFilters);
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
          <select value={seria} onChange={(e) => setSeria(e.target.value)}>
            {findModel.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
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
            {findModel.map((option, index) => (
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

        <SearchFilter
          isVisible={showFilters}
          top="100%"
          left="5%"
          usePosition={true}
        />
      </form>
    </div>
  );
};

export default SearchCar;
