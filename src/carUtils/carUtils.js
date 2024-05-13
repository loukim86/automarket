import carsData from "../data/carsData.json";

export const findCarById = (carId) => {
  const car = carsData.cars.find(
    (car) => car.pk_car_id.toString() === carId.toString()
  );
  return car;
};

export const getCarBrandAndModel = (title_ru) => {
  const parts = title_ru ? title_ru.split(" ") : [];
  return parts.length > 1
    ? parts[1].toUpperCase()
    : "Brand/Model not specified";
};

export const getCarNumber = (attributes) => {
  const carNumberAttribute = attributes.find(
    (attr) => attr.attribute_id === 33924
  );
  return carNumberAttribute
    ? carNumberAttribute.value
    : "Car number not specified";
};

