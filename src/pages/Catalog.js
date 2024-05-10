import { useState, useEffect } from "react";
import carsData from "../data/carsData.json";
import CatalogCard from "../components/UI/CatalogCard";
// import SearchFilter from "../components/UI/SearchFilter";
import "../styles/catalog.css";

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(carsData.cars);
  }, []);

  return (
    <div className="container">
      <div className="car-gallery">
        {cars.map((car) => (
          <CatalogCard key={car.pk_car_id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
