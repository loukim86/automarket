import NotificationCard from "./NotificationCard";
import "../../../styles/notification.css";

const Notification = () => {
  const cards = [
    {
      date: "1 Sep 2023",
      title: "Order status updated",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod. Aliquam nisl interdum pretium enim pulvinar.",
    },
    {
      date: "1 Sep 2023",
      title: "Order status updated",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod. Aliquam nisl interdum pretium enim pulvinar.",
    },
    {
      date: "1 Sep 2023",
      title: "Order status updated",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod. Aliquam nisl interdum pretium enim pulvinar.",
    },
    {
      date: "1 Sep 2023",
      title: "Order status updated",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod. Aliquam nisl interdum pretium enim pulvinar.",
    },
    {
      date: "1 Sep 2023",
      title: "Order status updated",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui neque pellentesque nibh dapibus vitae pharetra pulvinar et euismod. Aliquam nisl interdum pretium enim pulvinar.",
    },
  ];

  return (
    <div className="notification-container">
      <div className="notification-wrapper">
        {cards.map((card, index) => (
          <NotificationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Notification;
