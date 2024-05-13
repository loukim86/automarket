import "../../styles/car-information-card.css";

const CarInformationCard = ({className, titleClassName}) => {
  return (
    <div className={`card ${className}`}>
      <p className={titleClassName}>
        Car number: <span className="info-details">12 가 3456</span>
      </p>
      <p className={titleClassName}>
        Year of issue: <span className="info-details">2021/January</span>
      </p>
      <p className={titleClassName}>
        Mileage: <span className="info-details">12,345 km</span>
      </p>
      <p className={titleClassName}>
        Engine capacity: <span className="info-details">1,234cc</span>
      </p>
      <p className={titleClassName}>
        Fuel: <span className="info-details">Diesel</span>
      </p>
      <p className={titleClassName}>
        Transmission: <span className="info-details">Automatic</span>
      </p>
      <p className={titleClassName}>
        Car model: <span className="info-details">SUV</span>
      </p>
      <p className={titleClassName}>
        Color: <span className="info-details">Black</span>
      </p>
      <p className={titleClassName}>Area: <span className="info-details">Seoul</span></p>
      <p className={titleClassName}>Number of views: <span className="info-details">123</span></p>
      <p className={titleClassName}>In favorites: <span className="info-details">15</span></p>
    </div>
  );
};

export default CarInformationCard;
