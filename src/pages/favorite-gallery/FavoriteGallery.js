
import { findCarById } from "../../carUtils/carUtils";
import CatalogCard from "../../components/UI/CatalogCard";

const FavoriteGallery = ({ className = "", items }) => {
  return (
    <div className={`favorite-gallery ${className}`}>
      {items.map((carId) => {
        const car = findCarById(carId);
        return car ? (
          <CatalogCard key={car.pk_car_id} car={car} />
        ) : (
          <p key={carId}>Car not found</p>
        );
      })}
    </div>
  );
};

export default FavoriteGallery;
