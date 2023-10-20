import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <span className={`${styles.emoji} fi fi-${city.emoji}`}> </span>
      <span className={styles.name}>{city.cityName}</span>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;
