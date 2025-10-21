import styles from "./VacancyTitle.module.css";

export default function VacancyTitle() {
  return (
    <div className={styles.vacancyCont}>
      <h1 className={styles.vacancyTitle}>Новые вакансии</h1>
      <h2 className={styles.vacancyContext}>
        Найди работу своей мечты прямо сейчас
      </h2>
    </div>
  );
}
