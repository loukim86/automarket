import { getCarBrandAndModel } from "../../carUtils/carUtils";
import "../../styles/shopping-cart-card.css";

const ShoppingCartCard = ({ car, onRemove, className = '', mobileClassName = '' }) => {
  const carBrandAndModel = getCarBrandAndModel(car.title_ru);

  return (
    <>
      <div className={`cart-card ${className}`}>
        <div className="cart-img">
          <img src={car.images[0]} alt={car.title_ru} />
        </div>
        <div className="cart-info">
          <span className="cart-model">{carBrandAndModel}</span>
          <div className="cart-divider one"></div>
          <span className="cart-year">{car.production_year}</span>
          <div className="cart-divider two"></div>
          <span className="cart-mileage">{car.distance} km</span>
          <div className="cart-divider three"></div>
          <span className="cart-fuel">{car.fuel_type_ru}</span>
          <div className="cart-divider four"></div>
          <span className="cart-price">{car.price}$</span>
        </div>
        <div className="cart-actions">
          <button className="btn application">Application</button>
          <button className="btn delete" onClick={onRemove}>
            Delete
          </button>
        </div>
      </div>

      <div className={`cart-card__mobile ${mobileClassName}`}>
        <div className="cart-img__mobile">
          <img src={car.images[0]} alt={car.title_ru} />
        </div>
        <div className="cart-details__mobile">
          <div className="cart-info__mobile">
            <span className="cart-model__mobile">{carBrandAndModel}</span>
            <span className="cart-price__mobile">{car.price}$</span>
          </div>
          <div className="cart-specs__mobile">
            <p className="cart-specs">
              <span className="cart-details">Year</span>
              {car.production_year}
            </p>
            <p className="cart-specs">
              <span className="cart-details">Fuel</span>
              {car.fuel_type_ru}
            </p>
            <p className="cart-specs">
              <span className="cart-details">Mileage</span>
              {car.distance} km
            </p>
          </div>
          <div className="cart-actions__mobile">
            <button className="btn application-mobile">Application</button>
          </div>
        </div>
      </div>
    </>
  );
};


// const ShoppingCartCard = ({ car, onRemove }) => {
//   const carBrandAndModel = getCarBrandAndModel(car.title_ru);

//   return (
//     <>
//       <div class="cart-card">
//         <div class="cart-img">
//           <img src={car.images[0]} alt={car.title_ru} />
//         </div>
//         <div class="cart-info">
//           <span className="cart-model">{carBrandAndModel}</span>
//           <div className="cart-divider one"></div>
//           <span className="cart-year">{car.production_year}</span>
//           <div className="cart-divider two"></div>
//           <span className="cart-mileage">{car.distance} km</span>
//           <div className="cart-divider three"></div>
//           <span className="cart-fuel">{car.fuel_type_ru}</span>
//           <div className="cart-divider four"></div>
//           <span className="cart-price">{car.price}$</span>
//         </div>
//         <div class="cart-actions">
//           <button class="btn application">Application</button>
//           <button class="btn delete" onClick={onRemove}>
//             Delete
//           </button>
//         </div>
//       </div>

//       <div class="cart-card__mobile mobile">
//         <div class="cart-img__mobile">
//           <img src={car.images[0]} alt={car.title_ru} />
//         </div>
//         <div class="cart-details__mobile">
//           <div class="cart-info__mobile">
//             <span className="cart-model__mobile">{carBrandAndModel}</span>
//             <span className="cart-price__mobile">{car.price}$</span>
//           </div>
//           <div className="cart-specs__mobile">
//             <p className="cart-specs">
//               <span className="cart-details">Year</span>
//               {car.production_year}
//             </p>
//             <p className="cart-specs">
//               <span className="cart-details">Fuel</span>
//               {car.fuel_type_ru}
//             </p>
//             <p className="cart-specs">
//               <span className="cart-details">Mileage</span>
//               {car.distance} km
//             </p>
//           </div>
//           <div className="cart-actions__mobile">
//             <button className="btn application-mobile">Application</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default ShoppingCartCard;
