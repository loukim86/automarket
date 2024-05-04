import CardCar from "./CardCar";
import "../../styles/new-arrival.css";

const NewArrival = () => {
  return (
    <div className="arrival-container">
      <div className="arrival-title">
        <p>NEW ARRIVAL</p>
      </div>
      <div className="card-car__container">
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </div>
    </div>
  );
};

export default NewArrival;
