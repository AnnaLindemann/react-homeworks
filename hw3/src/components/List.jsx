import { useState } from "react";
import styles from "./List.module.css";
const peopleList = [
  { id: 1, name: "Иван", age: 20 },

  { id: 2, name: "Мария", age: 22 },

  { id: 3, name: "Алексей", age: 21 },

  { id: 4, name: "Марина", age: 19 },

  { id: 5, name: "Даша", age: 23 },

  { id: 6, name: "Глеб", age: 24 },

  { id: 7, name: "Дима", age: 18 },

  { id: 8, name: "Гриша", age: 20 },

  { id: 9, name: "Серафим", age: 21 },
];

export default function List() {
  const [people, setPeople] = useState(peopleList);

  const deletePerson = (id) => {
    setPeople((prev) => prev.filter((p) => p.id !== id));
  };

  const returnAll = () => setPeople(peopleList);

  return (
    <div className={styles.peopleContainer}>
      <ul className={styles.ulPeople}>
        {people.map((p) => {
          return (
            <li className={styles.liPeople} key={p.id}>
              {p.name} {","}
              {p.age} <button onClick={() => deletePerson(p.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button className={styles.btnReturn} onClick={returnAll}>
        Return all
      </button>
    </div>
  );
}
