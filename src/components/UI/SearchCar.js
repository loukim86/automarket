import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  getUniqueBrands,
  getUniqueModels,
  getUniqueYear,
} from "../../carUtils/carUtils";
import SearchFilter from "../../components/UI/SearchFilter";

import "../../styles/search-car.css";

const SearchCar = () => {
  const [brands, setBrand] = useState([]);
  const [models, setModel] = useState([]);
  const [years, setYear] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const uniqueBrands = getUniqueBrands();
    setBrand(uniqueBrands);
  }, []);

  useEffect(() => {
    const uniqueModels = getUniqueModels();
    setModel(uniqueModels);
  }, []);

  useEffect(() => {
    const uniqueYears = getUniqueYear();
    setYear(uniqueYears);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedYear("");
    setShowFilters(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <div className="form-container">
        <form className="search-panel" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="brand-label">Brand</label>
            <select
              className="select-short"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Select Brand</option>
              {brands.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <label>Model</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">Select Model</option>
              {models.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <label>Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              {years.map((option, index) => (
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
        </form>

        <SearchFilter
          isVisible={showFilters}
          top="100%"
          left="5%"
          usePosition={true}
        />
      </div>
    </>
  );
};

export default SearchCar;
