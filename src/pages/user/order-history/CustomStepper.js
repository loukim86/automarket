import carStatus from "../../../assets/img/car-status.svg";
import "../../../styles/custom-stepper.css";

const statuses = [
  { id: "status1", label: "status1", date: "", description: "" },
  {
    id: "status2",
    label: "status2",
    date: "1 Sep 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod. Aliquam nisl interdum pretium enim pulvinar.",
  },
  { id: "status3", label: "status3", date: "", description: "" },
  { id: "status4", label: "status4", date: "", description: "" },
  { id: "status5", label: "status5", date: "", description: "" },
];

const historyItems = [
  {
    id: "item1",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: true,
  },
  {
    id: "item2",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: false,
  },
  {
    id: "item3",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: false,
  },
  {
    id: "item4",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: false,
  },
  {
    id: "item5",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: false,
  },
  {
    id: "item6",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: false,
  },
  {
    id: "item7",
    label:
      "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod.",
    icon: false,
  },
];

const CustomStepper = () => {
  return (
    <div className="timeline-container">
      <div className="status-section">
        <h2>Status</h2>
        <div className="status-timeline">
          {statuses.map((status, index) => (
            <div
              key={status.id}
              className={`status-item ${index === 1 ? "active" : ""}`}
            >
              <div className="status-dot">
                {index === 1 && (
                  <span className="status-icon">
                    <img src={carStatus} alt="Car Icon" className="car-icon" />
                  </span>
                )}
              </div>
              <div className="status-label">{status.label}</div>
              {index === 1 && (
                <div className="status-tooltip">
                  <div className="tooltip-date">{status.date}</div>
                  <div className="tooltip-desc">{status.description}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="history-section">
        <h2>History</h2>
        <div className="history-timeline">
          {historyItems.map((item, index) => (
            <div key={item.id} className="history-item">
              <div className="history-dot">
                {item.icon && (
                  <span className="history-icon">
                    <img src={carStatus} alt="Car Icon" className="car-icon" />
                  </span>
                )}
              </div>
              <div className="history-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomStepper;
