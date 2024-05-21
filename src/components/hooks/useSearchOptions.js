import { useState, useEffect } from "react";
import carsData from "../../data/carsData.json";

const useSearchOptions = () => {
  const [findBrand, setFindBrand] = useState([]);
  const [findYear, setFindYear] = useState([]);
  const [findModel, setFindModel] = useState([]);

  useEffect(() => {
    const brandOptions = carsData.cars.map((car) => {
      const words = car.title_ru.split(" ");
      return words[1].toUpperCase();
    });
    const uniqueBrandOptions = [...new Set(brandOptions)];
    setFindBrand(uniqueBrandOptions);
  }, []);

  useEffect(() => {
    const yearOptions = new Set();
    carsData.cars.forEach((car) => {
      yearOptions.add(car.production_year);
    });
    const uniqueYearOptions = Array.from(yearOptions).sort((a, b) => b - a);
    setFindYear(uniqueYearOptions);
  }, []);

  useEffect(() => {
    const modelOptions = carsData.cars.map((car) => {
      const models = car.title_ru.split(" ");
      if (models.length > 2) {
        return `${models[2].toUpperCase()} ${models[3].toUpperCase()}`;
      }
      return "Unknown Model";
    });
    const uniqueModelOptions = [...new Set(modelOptions)];
    setFindModel(uniqueModelOptions);
  }, []);

  return { findBrand, findYear, findModel };
};

export default useSearchOptions;
