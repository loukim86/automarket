import { useFavorites } from "./context/FavoriteContext";
import FavoriteGallery from "./favorite-gallery/FavoriteGallery";
import Footer from "../components/Footer/Footer";
import "../styles/favorite.css";

const Favorite = () => {
  const { favorites = [] } = useFavorites();
  return (
    <>
      <div className="container">
        <div className="favorite">
          <p className="favorite-title">FAVOURITE LIST</p>
        </div>
        <div className="favorite-wrapper">
          <FavoriteGallery items={favorites} />
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default Favorite;
