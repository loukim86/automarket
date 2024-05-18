import clientImg from "../../assets/img/testimonials.png";
import { IoMdStarOutline } from "react-icons/io";
import "../../styles/customer-card.css";

const CustomerCard = () => {
  return (
    <div className="card-content">
      <img src={clientImg} alt="Customer" className="card-image"/>
      <div className="card-info">
        <div className="card">
          <h3>Ivan Ivanov</h3>
          <span className="card-date">2023.01.01</span>
        </div>
        <div className="card-stars">
          {[...Array(5)].map((_, index) => (
            <IoMdStarOutline key={index} className="star-icon" />
          ))}
        </div>

        <div className="card-text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Odio elit cras senectus
            posuere varius ullamcorper pulvinar nec. Cursus adipiscing arcu diam
            platea volutpat viverra sollicitudin nulla. Et eget quam imperdiet
            at eget. Lorem ipsum dolor sit amet consectetur. Odio elit cras
            senectus posuere varius ullamcorper pulvinar nec. Cursus adipiscing
            arcu diam platea volutpat viverra sollicitudin nulla. Et eget quam
            imperdiet at eget...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
