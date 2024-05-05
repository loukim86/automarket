import '../../styles/car-information-card.css'

const CarInformationCard = () => {
  const carDetails = {
    carNumber: "12 가 3456",
    yearOfIssue: "2021/January",
    mileage: "12,345 km",
    engineCapacity: "1,234cc",
    fuel: "Diesel",
    transmission: "Automatic",
    carModel: "SUV",
    color: "Black",
    area: "Seoul",
    numberOfViews: "123",
    inFavorites: "15",
  };

  return (
    <div className="car-card">
      <ul>
        {Object.entries(carDetails).map(([key, value]) => (
          <li key={key}>
            {key.replace(/([A-Z])/g, " $1").trim()} <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarInformationCard;
