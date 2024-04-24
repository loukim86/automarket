import "../../styles/search-filter.css";
import { useState } from "react";

const SearchFilter = () => {
    const [showBrand, setShowBrand] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    return (
        <div className="filter">
        <div className="sidebar">
          <div className="filter-buttons">
            <button onClick={() => setShowBrand(!showBrand)}>By brand</button>
            <button onClick={() => setShowModel(!showModel)}>By model</button>
            <button onClick={() => setShowPrice(!showPrice)}>By price</button>
          </div>
          {showBrand && (
            <div className="sidebar-section">
              <h2>By brand</h2>
              <div className="brand-list">
                 <span>Hyundai</span>
                 <span>Genesis</span>
                 <span>KIA</span>
                 <span>Samsung</span>
              </div>
            </div>
          )}
          {showModel && (
            <div className="sidebar-section">
              <h2>By model</h2>
              <div className="model-list">
                 <span>Toyota</span>
                 <span>Ford</span>
                 <span>Chevrolet</span>
                 <span>Volkswagen</span>
                 <span>BMW</span>
                 <span>Mercedes-Benz</span>
                 <span>Audi</span>
                 <span>Volvo</span>
              </div>
            </div>
          )}
          {showPrice && (
            <div className="sidebar-section">
              <h2>By price</h2>
              <div className="price-list">
                 <span>Lexus</span>
                 <span>Porsche</span>
                 <span>Land Rover</span>
                 <span>Jaguar</span>
              </div>
            </div>
          )}
        </div>
   
      </div>
    );
  }
  

export default SearchFilter;
