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
    <div>
      <div className="categories">
        <button className="categories-content">Guise</button>
        <button className="categories-content">Interior</button>
        <button className="categories-content">Safety</button>
        <button className="categories-content">Convenience</button>
      </div>
      <div className="features">
        <ul className="features-content">
          {categories.Guise.map((feature, index) => (
            <li key={index} className="checkmark">
              <input
                type="checkbox"
                checked={feature.value === "true" || feature.value === "1"}
                readOnly
              />
              <label >{feature.title_ru || feature.title}</label>
            </li>
          ))}
        </ul>

        <ul className="features-content">
          {categories.Interior.map((feature, index) => (
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

        <ul className="features-content">
          {categories.Safety.map((feature, index) => (
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

        <ul className="features-content">
          {categories.Convenience.map((feature, index) => (
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
