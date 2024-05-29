import { useState } from "react";
import useSearchOptions from "../hooks/useSearchOptions";
import CustomSelect from "./CustomSelect";
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
        <div className="select-wrapper">
          <CustomSelect
            options={findBrand}
            placeholder="Brand"
            value={brand}
            onChange={setBrand}
          />
        </div>
        <div className="select-wrapper">
          <CustomSelect
            options={modelOptions}
            placeholder="Model"
            value={model}
            onChange={setModel}
          />
        </div>
        <div className="select-wrapper">
          <CustomSelect
            options={priceOptions}
            placeholder="Price"
            value={price}
            onChange={setPrice}
          />
        </div>
      </div>
      <button className="search-button-mobile" type="submit">
        Search
      </button>
    </form>
  );
};

export default MobileSearchFile;
