import PropTypes from "prop-types";
import "../../styles/tab-additional.css";

const TabAdditional = ({ options }) => {
  const categories = {
    Guise: options.guise || [],
    Interior: options.interior || [],
    Safety: options.safety || [],
    Convenience: options.convenience || [],
  };

  return (
    <div className="categories-container">
      {Object.keys(categories).map((category, index) => (
        <div key={index} className="category-section">
          <div className={`categories-content ${index === 0 ? 'first' : ''} ${index === Object.keys(categories).length - 1 ? 'last' : ''}`}>
            {category}
          </div>
          <ul className="features-content">
            {categories[category].map((feature, index) => (
              <li key={index} className="checkmark">
                <input
                  type="checkbox"
                  checked={feature.value === "true" || feature.value === "1"}
                  readOnly
                />
                <label>{feature.title_ru || feature.title}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

TabAdditional.propTypes = {
  options: PropTypes.shape({
    guise: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        title_ru: PropTypes.string,
        value: PropTypes.string.isRequired,
      })
    ),
    interior: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        title_ru: PropTypes.string,
        value: PropTypes.string.isRequired,
      })
    ),
    safety: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        title_ru: PropTypes.string,
        value: PropTypes.string.isRequired,
      })
    ),
    convenience: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        title_ru: PropTypes.string,
        value: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default TabAdditional;
