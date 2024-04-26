import '../../styles/feature-card.css'

const FeatureCard = ({ icon, heading, title }) => {
  return (
    <div className="feature-card">
      <div className="card-icon">
        <img src={icon} alt={`${heading} icon`} />
      </div>
      <div className="card-heading">{heading}</div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default FeatureCard;
