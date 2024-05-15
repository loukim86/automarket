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

  const showInfo = (setShowFunction) => {
    setShowFunction(true);
  };

  const hideInfo = (setShowFunction) => {
    setShowFunction(false);
  };
  const carData1 = {
    "car number": "12 가 3456",
    "year of issue": "2021/January",
    mileage: "12,345 km",
    "engine capacity": "1,234cc",
    fuel: "Diesel",
    transmission: "Automatic",
    "car model": "SUV",
  };

  const carData2 = {
    "car number": "12 가 3456",
    "year of issue": "2021/January",
    mileage: "12,345 km",
    "engine capacity": "1,234cc",
    fuel: "Diesel",
    transmission: "Automatic",
    "car model": "SUV",
    color: "Black",
    area: "Seoul",
    "number of views": "123",
    "in favorites": "15",
  };

  const carData3 = {
    "car number": "12 가 3456",
    "year of issue": "2021/January",
    mileage: "12,345 km",
    "engine capacity": "1,234cc",
    fuel: "Diesel",
    transmission: "Automatic",
    "car model": "SUV",
    color: "Black",
    area: "Seoul",
    "number of views": "123",
    "in favorites": "15",
  };

  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item">
          <p className="grid-title">#DREAMCAR</p>
        </div>
        <div
          className="item white-car"
          onMouseEnter={() => showInfo(setShowWhiteCarInfo)}
          onMouseLeave={() => hideInfo(setShowWhiteCarInfo)}
        >
          {showWhiteCarInfo ? (
            <CarInformationCard
              toggleCarInfo={() => hideInfo(setShowWhiteCarInfo)}
              cardStyle="card-white-style"
              infoStyle="card-white-info"
              data={carData1}
            />
          ) : (
            <img src={whiteCar} alt="Car 1" />
          )}
        </div>
        <div className="grid-item__mobile">
          <p className="grid-title__mobile">#YOURMCAR</p>
        </div>
        <div
          className="item red-car"
          onMouseEnter={() => showInfo(setShowRedCarInfo)}
          onMouseLeave={() => hideInfo(setShowRedCarInfo)}
        >
          {showRedCarInfo ? (
            <CarInformationCard
              toggleCarInfo={() => hideInfo(setShowRedCarInfo)}
              cardStyle="card-red-style"
              infoStyle="card-red-info"
              data={carData2}
            />
          ) : (
            <img src={redCar} alt="Car 1" />
          )}
        </div>

        <div
          className="item blue-car"
          onMouseEnter={() => showInfo(setShowBlueCarInfo)}
          onMouseLeave={() => hideInfo(setShowBlueCarInfo)}
        >
          {showBlueCarInfo ? (
            <CarInformationCard
              toggleCarInfo={() => hideInfo(setShowBlueCarInfo)}
              cardStyle="card-blue-style"
              infoStyle="card-blue-info"
              data={carData3}
            />
          ) : (
            <img src={blueCar} alt="Car 2" />
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
