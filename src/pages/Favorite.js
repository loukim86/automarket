import { useFavorites } from "./context/FavoriteContext";
import { findCarById } from "../carUtils/carUtils";
import CatalogCard from "../components/UI/CatalogCard";
import Footer from "../components/Footer/Footer";
import "../styles/favorite.css";

const Favorite = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <div className="container">
        <p className="favorite">FAVOURITE LIST</p>
        <div className="favorite-gallery">
          {favorites.map((carId) => {
            const car = findCarById(carId);
            return car ? (
              <CatalogCard key={car.pk_car_id} car={car} />
            ) : (
              <p key={carId}>Car not found</p>
            );
          })}
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default Favorite;
