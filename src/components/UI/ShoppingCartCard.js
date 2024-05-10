import cartCar from "../../assets/img/shopping-car.png";
import "../../styles/shopping-cart-card.css";

const ShoppingCartCard = () => {
  return (
    <>
      <div class="cart-card">
        <div class="cart-img">
          <img src={cartCar} alt="Hyundai" />
        </div>
        <div class="cart-info">
          <span className="cart-model">Hyundai</span>
          <div className="cart-divider one"></div>
          <span className="cart-year">2021</span>
          <div className="cart-divider two"></div>
          <span className="cart-mileage">1234km</span>
          <div className="cart-divider three"></div>
          <span className="cart-fuel">Diesel</span>
          <div className="cart-divider four"></div>
          <span className="cart-price">12,345,678</span>
        </div>
        <div class="cart-actions">
          <button class="btn application">Application</button>
          <button class="btn delete">Delete</button>
        </div>
      </div>

      <div class="cart-card__mobile mobile">
        <div class="cart-img__mobile">
          <img src={cartCar} alt="Hyundai" />
        </div>
        <div class="cart-details__mobile">
          <div class="cart-info__mobile">
            <span class="cart-model__mobile">HYUNDAI</span>
            <span class="cart-price__mobile">$15,000</span>
          </div>
          <div class="cart-specs__mobile">
            <p className="cart-specs">
              <span className="cart-details">Year</span>2020
            </p>
            <p className="cart-specs">
              <span className="cart-details">Fuel</span> Gas
            </p>
            <p className="cart-specs">
              <span className="cart-details">Mileage </span>10,000km
            </p>
          </div>
          <div class="cart-actions__mobile">
            <button class="btn application-mobile">Application</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartCard;
