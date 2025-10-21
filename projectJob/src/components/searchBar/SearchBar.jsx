import Search from "../../assets/icons/Search.svg";
import Location from "../../assets/icons/Location.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <section className={styles.searchHero}>
      <div className={styles.searchContainer}>
        <h2 className={styles.searchTitle}>
          Один клик <br></br> и работа в кармане
        </h2>

        <form
          className={styles.searchForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.searchJobCont}>
            <img className={styles.searchIcon} src={Search} alt="Search" />
            <input
              className={styles.searchJob}
              type="text"
              placeholder="Должность или компания"
              aria-label="Должность или компания"
            />
          </div>
          <div className={styles.searchJobLocation}>
            <img
              className={styles.locationIcon}
              src={Location}
              alt="Location"
            />
            <input
              className={styles.searchLocation}
              type="text"
              placeholder="Город, Страна"
              aria-label="Город, Страна"
            />
          </div>
          <button className={styles.searchBtn}>Поиск</button>
        </form>
      </div>
    </section>
  );
}
