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

export const getUniqueBrands = () => {
  const brands = new Set();
  carsData.cars.forEach((car) => {
    car.attributes.forEach((attr) => {
      if (
        attr.attribute_id >= 3 &&
        attr.attribute_id <= 102 &&
        !brands.has(attr.title_ru)
      ) {
        brands.add(attr.title_ru);
      }
    });
  });
  return Array.from(brands);
};

export const getUniqueModels = () => {
  const models = new Set();
  carsData.cars.forEach((car) => {
    car.attributes.forEach((attr) => {
      if (
        (attr.attribute_id >= 183 && attr.attribute_id <= 315) ||
        (attr.attribute_id >= 39962 && attr.attribute_id <= 41681) ||
        (attr.attribute_id >= 64963 && attr.attribute_id <= 67536)
      ) {
        models.add(attr.title_ru);
      }
    });
  });
  return Array.from(models);
};

export const getUniqueYear = () => {
  const yearOptions = new Set();
  carsData.cars.forEach((car) => {
    yearOptions.add(car.production_year);
  });
  return Array.from(yearOptions).sort((a, b) => b - a);
};

export const fetchCarsByCategory = (category) => {
  return carsData.cars.filter((car) => {
    if (category === "all") return true;
    if (category === "european") {
      return car.attributes.some((attr) => attr.title_ru === "Импортные авто");
    } else if (category === "korean") {
      return car.attributes.some((attr) => attr.title_ru === "Корейские авто");
    }
    return false;
  });
};
