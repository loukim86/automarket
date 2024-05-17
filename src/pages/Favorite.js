import FavoriteGallery from "./favorite-gallery/FavoriteGallery";
import Footer from "../components/Footer/Footer";
import "../styles/favorite.css";

const Favorite = () => {
  return (
    <>
      <div className="container">
        <div className="favorite">
          <p className="favorite-title">FAVOURITE LIST</p>
        </div>
        <div className="favorite-wrapper">
          <FavoriteGallery />
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default Favorite;
