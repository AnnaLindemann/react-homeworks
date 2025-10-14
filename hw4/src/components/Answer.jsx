import { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer({ updatePoints }) {
  const [userAnswer, setUserAnswer] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer("");
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        className={styles.formBtn}
        onChange={(event) => setUserAnswer(event.target.value)}
        value={userAnswer}
        type="text"
        placeholder="Insert the answer"
      />
      <button className={styles.formBtn}>Submit</button>
    </form>
  );
}
