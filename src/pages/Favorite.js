import FavoriteGallery from "./favorite-gallery/FavoriteGallery";
import Footer from "../components/Footer/Footer";
import "../styles/favorite.css";

const Favorite = () => {

  return (
    <>
      <div className="container">
        <p className="favorite">FAVOURITE LIST</p>
       <FavoriteGallery/>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default Favorite;
