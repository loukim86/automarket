import { useState } from "react";
import whiteCar from "../../assets/img/white.png";
import blueCar from "../../assets/img/blue.png";
import redCar from "../../assets/img/red.png";
import CarInformationCard from "./CarInformationCard";

import "../../styles/popular-car.css";

const PopularCar = () => {
  const [showWhiteCarInfo, setShowWhiteCarInfo] = useState(false);
  const [showRedCarInfo, setShowRedCarInfo] = useState(false);
  const [showBlueCarInfo, setShowBlueCarInfo] = useState(false);

  const toggleWhiteCarInfo = () => {
    setShowWhiteCarInfo((prevState) => !prevState);
  };

  const toggleRedCarInfo = () => {
    setShowRedCarInfo((prevState) => !prevState);
  };

  const toggleBlueCarInfo = () => {
    setShowBlueCarInfo((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item">
          <p className="grid-title">#DREAMCAR</p>
        </div>
        <div className="item white-car">
          {showWhiteCarInfo ? (
            <CarInformationCard
              className="card-red-style"
              titleClassName="info-title"
              toggleCarInfo={toggleWhiteCarInfo}
            />
          ) : (
            <img src={whiteCar} alt="Car 1" onClick={toggleWhiteCarInfo} />
          )}
        </div>
        <div className="grid-item__mobile">
          <p className="grid-title__mobile">#YOURMCAR</p>
        </div>
        <div className="item red-car">
          {showRedCarInfo ? (
            <CarInformationCard toggleCarInfo={toggleRedCarInfo} />
          ) : (
            <img src={redCar} alt="Car 1" onClick={toggleRedCarInfo} />
          )}
        </div>

        <div className="item blue-car">
          {showBlueCarInfo ? (
            <CarInformationCard toggleCarInfo={toggleRedCarInfo} />
          ) : (
            <img src={blueCar} alt="Car 2" onClick={toggleBlueCarInfo} />
          )}
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
    </div>
  );
};

export default PopularCar;
