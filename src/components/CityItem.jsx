import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <span className={`${styles.emoji} fi fi-${city.emoji}`}> </span>
      <span className={styles.name}>{city.cityName}</span>
      <time className={styles.date}>({formatDate(city.date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;
