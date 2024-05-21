import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import carsData from "../data/carsData.json";
import CatalogCard from "../components/UI/CatalogCard";
import Footer from "../components/Footer/Footer";
import SearchFilter from "../components/UI/SearchFilter";
import MobileSearchFile from "../components/UI/MobileSearchFile";
import "../styles/catalog.css";

const Catalog = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [cars, setCars] = useState([]);
  const [category, setCategory] = useState("all");

  const carsPerPage = 12;
  const pagesVisited = pageNumber * carsPerPage;

  const displayCars = cars
    .filter((car) => {
      if (category === "all") return true;
      if (category === "european") {
        return car.attributes.some(
          (attr) => attr.title_ru === "Импортные авто"
        );
      } else if (category === "korean") {
        return car.attributes.some(
          (attr) => attr.title_ru === "Корейские авто"
        );
      }

      return false;
    })
    .slice(pagesVisited, pagesVisited + carsPerPage)
    .map((car) => <CatalogCard key={car.id} car={car} />);

  const pageCount = Math.ceil(cars.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setCars(carsData.cars);
  }, []);

  return (
    <>
      <div className="container">
        <div className="search-filter-mobile">
          <MobileSearchFile isAbsolute={false} />
        </div>
        <div className="search-filter-wrapper">
          <SearchFilter isVisible={true} top="0" left="0" usePosition={false} />
        </div>
        <div className="catalog-category-links">
          <button
            onClick={() => setCategory("all")}
            className={category === "all" ? "active-btn" : ""}
          >
            All
          </button>
          <button
            onClick={() => setCategory("korean")}
            className={category === "korean" ? "active-btn" : ""}
          >
            Korean Auto
          </button>
          <button
            onClick={() => setCategory("european")}
            className={category === "european" ? "active-btn" : ""}
          >
            European Auto
          </button>
        </div>
        <div className="car-gallery">{displayCars}</div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={<IoIosArrowBack size={26} />}
            nextLabel={<IoIosArrowForward size={26} />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"previous-button"}
            pageLinkClassName={"page-item"}
            nextLinkClassName={"next-button"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
          />
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default Catalog;
