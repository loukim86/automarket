import { useState } from "react";
import hyundai from "../../assets/img/hyundai.svg";
import genesis from "../../assets/img/genesis.svg";
import kia from "../../assets/img/kia.svg";
import samsung from "../../assets/img/samsung.svg";
import toyota from "../../assets/img/toyota.svg";
import ford from "../../assets/img/ford.svg";
import chevrolet from "../../assets/img/chevrolet.svg";
import volkswagen from "../../assets/img/volkswagen.svg";
import bmw from "../../assets/img/bmw.svg";
import mercedes from "../../assets/img/mercedes.svg";
import audi from "../../assets/img/audi.svg";
import volvo from "../../assets/img/volvo.svg";
import lexus from "../../assets/img/lexus.svg";
import porsche from "../../assets/img/porsche.svg";
import landrover from "../../assets/img/landrover.svg";
import jaguar from "../../assets/img/jaguar.svg";
import subcompact from "../../assets/img/subcompact-car.png";
import compact from "../../assets/img/compact-car.png";
import midsize from "../../assets/img/midsize-car.png";
import sport from "../../assets/img/sports-car.png";
import minivan from "../../assets/img/minivans.png";
import suv from "../../assets/img/SUVs.png";
import "../../styles/search-filter.css";

const SearchFilter = ({ isVisible }) => {
  const [showBrand, setShowBrand] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleBrandClick = () => {
    setShowBrand(!showBrand);
    setShowModel(false); 
    setShowPrice(false); 
  };

  const handleModelClick = () => {
    setShowBrand(false); 
    setShowModel(!showModel);
    setShowPrice(false); 
  };

  const handlePriceClick = () => {
    setShowBrand(false); 
    setShowModel(false); 
    setShowPrice(!showPrice);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <div className={`filter ${isVisible ? 'visible' : ''}`}>
      <div className="sidebar">
        <div className="filter-buttons">
        <button
            onClick={handleBrandClick}
            className={`brand-button ${showBrand ? 'active' : ''}`}
          >
            By brand
          </button>
          <button
            onClick={handleModelClick}
            className={`brand-button ${showModel ? 'active' : ''}`}
          >
            By model
          </button>
          <button
            onClick={handlePriceClick}
            className={`brand-button ${showPrice ? 'active' : ''}`}
          >
            By price
          </button>
        </div>
        <div className="sidebar-section">
          {showBrand && (
            <div className="brand-list">
              <div className="list-top">
                <img src={hyundai} alt="Hyundai logo" />
                <img src={genesis} alt="Genesis logo" />
                <img src={kia} alt="Kia logo" />
                <img src={samsung} alt="Samsung logo" />
              </div>
              <div className="horizontal-line"></div>
              <div className="list-middle">
                <img src={toyota} alt="Toyota logo" />
                <img src={ford} alt="Ford logo" />
                <img src={chevrolet} alt="Chevrolet logo" />
                <img src={volkswagen} alt="Volkswagen logo" />
                <img src={bmw} alt="BMW logo" />
                <img src={mercedes} alt="Mercedes Benz logo" />
                <img src={audi} alt="Audi logo" />
                <img src={volvo} alt="Volvo logo" />
              </div>
              <div className="list-bottom">
                <img src={lexus} alt="Lexus logo" />
                <img src={porsche} alt="Porsche logo" />
                <img src={landrover} alt="Land Rover logo" />
                <img src={jaguar} alt="Jaguar logo" />
              </div>
            </div>
          )}
          {showModel && (
            <div className="model-list">
              <div className="top-section">
                <img src={subcompact} alt="Subcompact car" />
                <img src={compact} alt="Compact car" />
                <img src={midsize} alt="Midsize car" />
              </div>

              <div className="bottom-section">
                <img src={sport} alt="Sports car" />
                <img src={minivan} alt="Minivans" />
                <img src={suv} alt="SUVs" />
              </div>
            </div>
          )}
          {showPrice && (
            <div className="price-list">
              <div className="price-top">
                <p>0-2M</p>
                <p>2-4M</p>
                <p>4-6M</p>
                <p>6-10M</p>
                <p>10-15M</p>
              </div>
              <div className="price-middle">
                <p>0-2M</p>
                <p>2-4M</p>
                <p>4-6M</p>
                <p>6-10M</p>
                <p>10-15M</p>
              </div>
              <div className="price-bottom">
                <p>0-2M</p>
                <p>2-4M</p>
                <p>4-6M</p>
                <p>6-10M</p>
                <p>10-15M</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
