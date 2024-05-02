// import carsData from "../../data/carsData.json";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SearchFilter from '../../components/UI/SearchFilter';

import "../../styles/search-car.css";

const SearchCar = () => {
  const [brand, setBrand] = useState("");
  const [serie, setSerie] = useState("");
  const [year, setYear] = useState("");
  const [showFilters, setShowFilters] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", { brand, serie, year });
   
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);  
  };

  return (
    <div className="form-container">
      <form className="search-panel" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="divider"></div>

      <div className="input-group">
        <label>Seria</label>
        <input
          type="text"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
        />
      </div>
      <div className="divider"></div>
      <div className="input-group">
        <label>Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-search">
        Search
      </button>
      <IoIosArrowDown className="arrow-icon" onClick={toggleFilters}/>
      <SearchFilter isVisible={showFilters}/>
    </form>
    </div>
    
    // <section className="search-section">
    //   <div className="container">
    //     <div className="search-content">
    //       <div className="search-content__box">
    //         <form className="search-form">
    //           <div className="search-form__car-type">
    //             <select>
    //               <option>Brand</option>
    //               <option value="Hyundai">Hyundai</option>
    //               <option value="KIA">KIA</option>
    //               <option value="BMW">BMW</option>
    //             </select>
    //           </div>

    //           <div className="search-form__car-type">
    //             <select>
    //               <option>Seria</option>
    //               <option value="Ioniq5">Ioniq5</option>
    //               <option value="Morning">Morning</option>
    //               <option value="Series7">Series7</option>
    //             </select>
    //           </div>

    //           <div className="search-form__car-type">
    //             <select>
    //               <option>Year</option>
    //               <option value="2023">2023</option>
    //               <option value="2020">2020</option>
    //               <option value="2022">2022</option>
    //             </select>
    //           </div>
    //         </form>
    //         <div>
    //           <button className="search-button">Search</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default SearchCar;
