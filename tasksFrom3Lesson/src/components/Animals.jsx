import { useState } from "react";
import styles from "./Animals.module.css";
const animalsList = ["tiger", "fox", "rabbit", "elephant"];

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const addRandom = () => {
    const idAnimal = Math.floor(Math.random() * animalsList.length);
    const animal = animalsList[idAnimal];
    const item = { id: Date.now(), animal };
    setAnimals((prev) => [...prev, item]);
  };

  const deleteAnimal = (id) => {
    setAnimals((prev) => prev.filter((a) => a.id !== id));
  };
  return (
    <div className={styles.containerAnimal}>
      <button className={styles.btnAdd} onClick={addRandom}>
        Add animal
      </button>
      <ul className={styles.ulContainer}>
        {animals.map((a) => {
          return (
            <li className={styles.liItem} key={a.id}>
              {a.animal}{" "}
              <button
                className={styles.btnDelete}
                onClick={() => deleteAnimal(a.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
