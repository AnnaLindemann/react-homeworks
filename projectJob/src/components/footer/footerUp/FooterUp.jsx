import styles from "./FooterUp.module.css";

const citys = [
  {
    id: "1",
    name: "Осака",
  },
  {
    id: "2",
    name: "Коясан",
  },
  {
    id: "3",
    name: "Токио",
  },
  {
    id: "4",
    name: "Хаконэ",
  },
  {
    id: "5",
    name: "Наэба",
  },
  {
    id: "6",
    name: "Томаму",
  },
  {
    id: "7",
    name: "Йокогама",
  },
  {
    id: "8",
    name: "Нагоя",
  },
  {
    id: "9",
    name: "Саппоро",
  },
  {
    id: "10",
    name: "Кобе",
  },
];

export default function FooterUp() {
  return (
    <div className={styles.upCont}>
      <h2 className={styles.upTitle}>Популярные города</h2>
      <div className={styles.upCityList}>
        {citys.map((city) => {
          return (
            <h3 className={styles.upCityItem} key={city.id}>
              {city.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
