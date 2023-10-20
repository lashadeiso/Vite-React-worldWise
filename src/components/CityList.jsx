import Spinner from "./Spinner";
import CityItem from "./CityItem";
import PropTypes from "prop-types";

import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((item) => (
        <CityItem city={item} key={item.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
export default CityList;
