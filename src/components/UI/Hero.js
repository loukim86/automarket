import SearchCar from "./SearchCar";
import MobileSearchFile from "../../components/UI/MobileSearchFile";

import "../../styles/hero.css";

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-content__text">
            <p className="title">
              Buy, Sell, and <br /> Trade cars with us
            </p>
            <p className="sub-title">
              We offer a wide selection of <br /> cars for every need. Find{" "}
              <br />
              your ideal car now.
            </p>
          </div>
        </div>

        <div className="search-panel-desktop">
          <SearchCar />
        </div>

        <div className="search-panel-mobile">
          <MobileSearchFile isAbsolute={true} />
        </div>
      </section>
    </>
  );
};

export default Hero;
