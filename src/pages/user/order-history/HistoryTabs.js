import "../../../styles/history-tabs.css";

const HistoryTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["All order", "In process", "Completed", "Cancelled"];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default HistoryTabs;
