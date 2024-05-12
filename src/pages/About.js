// import Header from "../components/Header/Header";
import FeatureCard from "../components/UI/FeatureCard";
import Footer from "../components/Footer/Footer";
import thumbUp from "../assets/img/thumbUp.svg";
import check from "../assets/img/check-circle.svg";
import trello from "../assets/img/trello.svg";
import dollar from "../assets/img/dollar-sign.svg";
import video from "../assets/img/video.png";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about">
          <div className="about-img">
            <img src={video} alt="video about car" />
          </div>
          <div className="about-title">
            <p>ABOUT US</p>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem nam orci orci urna
              molestie viverra tempor. Neque enim varius a parturient egestas
              vulputate. Non aliquam amet id non molestie odio. Maecenas ipsum
              adipiscing dui ac cursus. Morbi adipiscing senectus vehicula
              aliquet. Proin sed mauris at at laoreet id lacus mollis leo.
              Consectetur ornare habitant in molestie odio orci. A sit venenatis
              nunc auctor cursus. Nec nunc sagittis cras habitant mattis eget
              imperdiet lobortis elementum.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem nam orci orci urna
              molestie viverra tempor. Neque enim varius a parturient egestas
              vulputate. Non aliquam amet id non molestie odio. Maecenas ipsum
              adipiscing dui ac cursus. Morbi adipiscing senectus vehicula
              aliquet. Proin sed mauris at at laoreet id lacus mollis leo.
              Consectetur ornare habitant in molestie odio orci. A sit venenatis
              nunc auctor cursus. Nec nunc sagittis cras habitant mattis eget
              imperdiet lobortis elementum.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem nam orci orci urna
              molestie viverra tempor. Neque enim varius a parturient egestas
              vulputate. Non aliquam amet id non molestie odio. Maecenas ipsum
              adipiscing dui ac cursus. Morbi adipiscing senectus vehicula
              aliquet. Proin sed mauris at at laoreet id lacus mollis leo.
              Consectetur ornare habitant in molestie odio orci. A sit venenatis
              nunc auctor cursus. Nec nunc sagittis cras habitant mattis eget
              imperdiet lobortis elementum.
            </p>
          </div>
          <div className="about-title">
            <p>WHY CHOOSE US?</p>
          </div>
          <div className="why-us">
            <FeatureCard
              icon={thumbUp}
              heading="Verified reliability"
              title="Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac interdum."
            />
            <FeatureCard
              icon={check}
              heading="Warranty and service"
              title="Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac interdum."
            />
            <FeatureCard
              icon={trello}
              heading="Wide selection"
              title="Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac interdum."
            />
            <FeatureCard
              icon={dollar}
              heading="Financial options"
              title="Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac interdum."
            />
          </div>
          <div className="about-title">
            <p>STATISTICS</p>
          </div>
          <div class="stat-card">
            <div class="stat-item">
              <div class="stat-number">N</div>
              <div class="stat-description">years of work</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">N</div>
              <div class="stat-description">employees</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">N</div>
              <div class="stat-description">satisfied customers</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">N+</div>
              <div class="stat-description">cars</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-box">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default About;
