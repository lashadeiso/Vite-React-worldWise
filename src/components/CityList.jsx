import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import PropTypes from "prop-types";
import Message from "./Message";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities || cities.length === 0)
    return (
      <Message
        message={"Add your first city by cliking on a city on the map"}
      />
    );
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
