import { useState } from "react";
import CustomStepper from "./CustomStepper";
import HistoryOrder from "./HistoryOrder";
import HistoryTabs from "./HistoryTabs";
import "../../../styles/order-status.css";

const OrderStatus = () => {
  const [activeTab, setActiveTab] = useState("All order");

  return (
    <div className="order-history-container">
      <HistoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "In process" ? (
        <CustomStepper />
      ) : activeTab === "All order" || activeTab === "In process" ? (
        <HistoryOrder activeTab={activeTab} />
      ) : (
        <div>No orders available in this category.</div>
      )}
    </div>
  );
};

export default OrderStatus;
