// import carsData from "../../data/carsData.json";
import arrow from "../../assets/img/arrow-down.svg";
import "../../styles/search-car.css";

const SearchCar = () => {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-content">
          <div className="search-content__box">
            <form className="search-form">
              <div className="search-form__car-type">
                <select>
                  <option>Brand</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="KIA">KIA</option>
                  <option value="BMW">BMW</option>
                </select>
              </div>

              <div className="search-form__car-type">
                <select>
                  <option>Seria</option>
                  <option value="Ioniq5">Ioniq5</option>
                  <option value="Morning">Morning</option>
                  <option value="Series7">Series7</option>
                </select>
              </div>

              <div className="search-form__car-type">
                <select>
                  <option>Year</option>
                  <option value="2023">2023</option>
                  <option value="2020">2020</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </form>
            <div>
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCar;
