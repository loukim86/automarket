import '../../../styles/notification-card.css'

const NotificationCard = ({ title, description }) => {
  return (
    <div className="notification-card">
      <div className="notification-content">
        <p className='notification-title'>{title}</p>
        <p className='notification-text'>{description}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
