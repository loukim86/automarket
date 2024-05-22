import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useFavorites } from "../context/FavoriteContext";
import FavoriteGallery from "../favorite-gallery/FavoriteGallery";
import "../../styles/user-favourite.css";

const UserFavourite = () => {
  const { favorites } = useFavorites();
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;

  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = favorites.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  const pageCount = Math.ceil(favorites.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="user-favourite-container">
      <div className="user-favourite-wrapper">
        <FavoriteGallery className="user-gallery" items={displayItems} />
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={<IoIosArrowBack />}
          nextLabel={<IoIosArrowForward />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination-favorite"}
          previousLinkClassName={"previous-btn"}
          pageLinkClassName={"page-item-f"}
          nextLinkClassName={"next-btn"}
          disabledClassName={"pagination-disabled-f"}
          activeClassName={"pagination-active-f"}
        />
      </div>
    </div>
  );
};

export default UserFavourite;
