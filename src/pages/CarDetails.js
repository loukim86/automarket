import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  findCarById,
  getCarBrandAndModel,
  getCarNumber,
} from "../carUtils/carUtils";
import CarInfo from "./CarInfo";
import CarSlider from "./CarSlider";
import TabDescription from "./TabContents/TabDescription";
import TabAdditional from "./TabContents/TabAdditional";
import TabApplication from "./TabContents/TabApplication";
import SimilarCarsSlider from "./TabContents/SimilarCarsSlider";
import Footer from "../components/Footer/Footer";

import "../styles/car-details.css";

const CarDetails = () => {
  const { carId } = useParams();
  const car = findCarById(carId);
  const [activeImage, setActiveImage] = useState(car ? car.images[0] : null);
  const [activeTab, setActiveTab] = useState("description");

  if (!car) {
    return <div>Car not found!</div>;
  }

  const carBrandAndModel = getCarBrandAndModel(car.title_ru);
  const carNumber = getCarNumber(car.attributes);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container">
        <div className="car-details-container">
          <CarSlider
            car={car}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
          <CarInfo
            car={car}
            carBrandAndModel={carBrandAndModel}
            carNumber={carNumber}
            activeImage={activeImage}
          />
        </div>
        <div className="tab-buttons">
          <button
            onClick={() => handleTabClick("description")}
            className={activeTab === "description" ? "active" : ""}
          >
            Description
          </button>
          <button
            onClick={() => handleTabClick("options")}
            className={activeTab === "options" ? "active" : ""}
          >
            Additional options
          </button>
          <button
            onClick={() => handleTabClick("application")}
            className={activeTab === "application" ? "active" : ""}
          >
            Application
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "description" && (
            <>
              <div>
                <TabDescription />
              </div>
              <div className="similar-car-title">
                <p>Similar cars</p>
              </div>
              <div className="similar-cars">
                <SimilarCarsSlider />
              </div>
            </>
          )}
          {activeTab === "options" && (
            <div>
              <TabAdditional />
            </div>
          )}
          {activeTab === "application" && (
            <div>
              <TabApplication />
            </div>
          )}
        </div>
      </div>
      <div className="footer-catalog">
        <Footer />
      </div>
    </>
  );
};

export default CarDetails;
