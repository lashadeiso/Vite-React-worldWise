import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={`${styles.emoji} fi fi-${city.emoji}`}> </span>
        <span className={styles.name}>{city.cityName}</span>
        <time className={styles.date}>({formatDate(city.date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;
