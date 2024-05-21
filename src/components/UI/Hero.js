import { useState, useEffect } from "react";
import SearchCar from "./SearchCar";

import "../../styles/hero.css";

const Hero = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

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
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
        <SearchCar />
      </section>
    </>
  );
};

export default Hero;
