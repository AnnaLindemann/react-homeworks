import styles from "./CityCard.module.css";

export default function CityCard({ city }) {
  if (!city) return <p>Please choose a city</p>;
  const { id, name, description, imageUrl, facts } = city;
  if (!facts || facts.length === 0) return <p>There are no facts.</p>;
  return (
    <div className={styles.cityContainer}>
      <h2 className={styles.cityTitle}>{name}</h2>
      <p className={styles.cityTitle}>{description}</p>
      <img className={styles.cityImg} src={imageUrl} alt={name} />
      <ul>
        {facts.map((fact, index) => (
          <li className={styles.cityTitle} key={`${id}-${index}`}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
