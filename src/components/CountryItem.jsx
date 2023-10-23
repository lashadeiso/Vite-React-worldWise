import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={`${styles.emoji} fi fi-${country.emoji.toLowerCase()}`}>
        {" "}
      </span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object,
};

export default CountryItem;
