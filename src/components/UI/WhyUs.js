import { Container } from "reactstrap";
import FeatureCard from "./FeatureCard";
import thumbUp from "../../assets/img/thumbUp.svg";
import check from "../../assets/img/check-circle.svg";
import trello from "../../assets/img/trello.svg";
import dollar from "../../assets/img/dollar-sign.svg";

import "../../styles/why-us.css";

function WhyUs() {
  return (
    <Container>
      <div className="feature-cards">
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
    </Container>
  );
}

export default WhyUs;
