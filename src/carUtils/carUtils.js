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

export const getEngineCapacity = (attributes) => {
  const carCEngineCapacity = attributes.find(
    (attr) => attr.attribute_id === 33923
  );
  return carCEngineCapacity
    ? carCEngineCapacity.value
    : "Car engine capacity not specified";
};

export const categorizeAttributes = (attributes) => {
  const categories = {
    guise: [],
    interior: [],
    safety: [],
    convenience: [],
  };

  attributes.forEach((attr) => {
    if (attr.attribute_id >= 33930 && attr.attribute_id <= 33932) {
      categories.interior.push(attr);
    } else if (
      (attr.attribute_id >= 33933 && attr.attribute_id <= 33938) ||
      attr.attribute_id === 33948
    ) {
      categories.safety.push(attr);
    } else if (
      (attr.attribute_id >= 33939 && attr.attribute_id <= 33942) ||
      (attr.attribute_id >= 33950 && attr.attribute_id <= 33952)
    ) {
      categories.convenience.push(attr);
    } else if (attr.attribute_id >= 33943 && attr.attribute_id <= 33947) {
      categories.guise.push(attr);
    }
  });

  return categories;
};
