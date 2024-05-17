import FavoriteGallery from "../favorite-gallery/FavoriteGallery";
import "../../styles/user-favourite.css";

const UserFavourite = () => {
  return (
    <div className="user-favourite-container">
      <div className="user-favourite-wrapper">
        <FavoriteGallery className="user-gallery"/>
      </div>
    </div>
  );
};

export default UserFavourite;
