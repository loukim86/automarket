import carsData from "../data/carsData.json";

export const findCarById = (carId) => {
    return carsData.cars.find((car) => car.pk_car_id.toString() === carId);
  };

export const getCarBrandAndModel = (title_ru) => {
  const parts = title_ru.split(" ");
  return parts[1].toUpperCase();
};

export const getCarNumber = (attributes) => {
  const carNumberAttribute = attributes.find(
    (attr) => attr.attribute_id === 33924
  );
  return carNumberAttribute
    ? carNumberAttribute.value
    : "Car number not specified";
};
