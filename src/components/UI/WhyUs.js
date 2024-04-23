import { Container } from "reactstrap";
import thumbUp from "../../assets/img/thumbUp.svg";
import check from "../../assets/img/check-circle.svg";
import trello from "../../assets/img/trello.svg";
import dollar from "../../assets/img/dollar-sign.svg";

import "../../styles/why-us.css";

function WhyUs() {
  return (
    <Container>
      <div className="feature-cards">
        <div className="feature-card">
          <div className="card-icon">
            <img src={thumbUp} alt="thumb-up icon" />
          </div>
          <div className="card-heading">Verified reliability</div>
          <div className="card-title">
            Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac
            interdum.
          </div>
        </div>
        <div className="feature-card">
          <div className="card-icon">
            <img src={check} alt="check icon" />
          </div>
          <div className="card-heading">Warranty and service</div>
          <div className="card-title">
            Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac
            interdum.
          </div>
        </div>
        <div className="feature-card">
          <div className="card-icon">
            <img src={trello} alt="trello icon" />
          </div>
          <div className="card-heading">Wide selection</div>
          <div className="card-title">
            Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac
            interdum.
          </div>
        </div>
        <div className="feature-card">
          <div className="card-icon">
            <img src={dollar} alt="dollar icon" />
          </div>
          <div className="card-heading">Financial options</div>
          <div className="card-title">
            Lorem ipsum dolor sit amet consectetur. Cras tortor eget ac
            interdum.
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WhyUs;
