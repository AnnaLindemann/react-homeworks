import LocationGrey from "../../assets/icons/LocationGrey.svg";
import styles from "./VacancyCard.module.css";
export default function VacancyCard({
  circle,
  title,
  name,
  city,
  logo,
  visit,
}) {
  return (
    <section className={styles.containerCard}>
      <div className={styles.titleCard}>
        <img className={styles.imgCard} src={circle} alt="title" />
        <h3 className={styles.cityCard}>{title}</h3>
      </div>
      <h2 className={styles.nameCard}>{name}</h2>
      <div className={styles.titleCard}>
        <img
          className={styles.imgCard}
          src={LocationGrey}
          alt="Location Icon"
        />
        <h3 className={styles.cityCard}>{city}</h3>
      </div>

      <div className={`${styles.titleCard} ${styles.visit}`}>
        <img className={styles.logoCard} src={logo} alt="Logo Icon" />
        <h3 className={styles.cityCard}>{visit}</h3>
      </div>
    </section>
  );
}
