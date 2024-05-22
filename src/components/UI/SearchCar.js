import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useSearchOptions from "../hooks/useSearchOptions";
import SearchFilter from "../../components/UI/SearchFilter";

import "../../styles/search-car.css";

const SearchCar = () => {
  const { findBrand, findYear, findModel } = useSearchOptions();
  const [brand, setBrand] = useState("");
  const [seria, setSeria] = useState("");
  const [year, setYear] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBrand("");
    setSeria("");
    setYear("");
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
            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="">Select Brand</option>
              {findBrand.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <label>Seria</label>
            <select value={seria} onChange={(e) => setSeria(e.target.value)}>
              <option value="">Select Seria</option>
              {findModel.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="divider"></div>

          <div className="input-group">
            <label>Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Select Year</option>
              {findYear.map((option, index) => (
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
