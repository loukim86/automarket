import "../../styles/catalog-card.css";

const CatalogCard = ({ car }) => {
  return (
    <div className="catalog-card">
      <img src={car.images[0]} alt={car.title_ru} style={{ width: "100%" }} />
      <h3 className="catalog-brand">{car.title_ru}</h3>
      <p className="catalog-info">Year: {car.production_year}</p>
      <p className="catalog-info">Mileage: {car.distance}km</p>
      <p className="catalog-info">Fuel: {car.fuel_type_ru}</p>
      <div className="catalog-bottom">
        <p className="catalog-price">{car.price}$</p>
        <button className="catalog-button">read more</button>
      </div>
    </div>
  );
};

export default CatalogCard;
