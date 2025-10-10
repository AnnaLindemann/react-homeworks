import { useState } from "react";
import styles from "./Rating.module.css";
const ratingList = [
  "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",

  "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",

  "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

  "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
];

export default function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const selectRating = (nextInd) => setRatingValue(nextInd);
  return (
    <div className={styles.ratingContainer}>
      <img src={ratingList[ratingValue]} alt="Rating" />
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => selectRating(0)}>
          Very good
        </button>
        <button className={styles.btn} onClick={() => selectRating(1)}>
          Good
        </button>
        <button className={styles.btn} onClick={() => selectRating(2)}>
          Normal
        </button>
        <button className={styles.btn} onClick={() => selectRating(3)}>
          Bad
        </button>
      </div>
    </div>
  );
}
