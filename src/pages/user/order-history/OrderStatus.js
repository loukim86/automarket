import { useState } from "react";
import CustomStepper from "./CustomStepper";
import UserShoppingCart from "../UserShoppingCart";
import HistoryTabs from "./HistoryTabs";

const OrderStatus = () => {
  const [activeTab, setActiveTab] = useState('All order');

  return (
    <div className="order-history-container">
      <HistoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'In process' ? (
        <CustomStepper />
      ) : (
        <UserShoppingCart activeTab={activeTab} />
      )}
    </div>
  );
};


export default OrderStatus;
