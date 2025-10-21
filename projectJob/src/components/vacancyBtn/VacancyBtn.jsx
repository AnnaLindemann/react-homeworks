import styles from "./VacancyBtn.module.css";

export default function VacancyBtn() {
  return (
    <div className={styles.btnCont}>
      <button className={styles.btn}>Все вакансии</button>
    </div>
  );
}
