import { useState } from "react";
import useSearchOptions from "../hooks/useSearchOptions";
import "../../styles/mobile-search-file.css";

const MobileSearchFile = ({ isAbsolute }) => {
  const { findBrand } = useSearchOptions();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

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
    "15-20M",
    "20-25M",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setBrand("");
    setModel("");
    setPrice("");
  };

  return (
    <form
      className={`search-bar-mobile ${isAbsolute ? "absolute" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="selectors">
        <select
          className="dropdown"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Brand</option>
          {findBrand.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="dropdown"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="">Model</option>
          {modelOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className="dropdown"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Price</option>
          {priceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button className="search-button-mobile" type="submit">
        Search
      </button>
    </form>
  );
};

export default MobileSearchFile;
