import whiteCar from "../../assets/img/white.png";
import blueCar from "../../assets/img/blue.png";
import redCar from "../../assets/img/red.png";

import "../../styles/popular-car.css";

const PopularCar = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <p className="grid-title">#DREAMCAR</p>
      </div>
      <div className="item">
        <img src={whiteCar} alt="Car 1" />
      </div>
      <div className="grid-item__mobile">
        <p className="grid-title__mobile">#YOURMCAR</p>
      </div>
      <div className="item">
        <img src={redCar} alt="Car 1" />
      </div>
     
      <div className="item">
        <img src={blueCar} alt="Car 2" />
      </div>
      <div className="grid-text">
        <p>
          Lorem ipsum dolor sit <br />
          amet consectetur. <br /> Pulvinar tellus vitae <br />
          porttitor sed enim <br /> nunc elit. Suspendisse <br />
          cras augue massa <br /> tellus ut morbi non.
        </p>
      </div>
    </div>
  );
};

export default PopularCar;
