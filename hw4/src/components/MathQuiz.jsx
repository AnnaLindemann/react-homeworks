import { useState } from "react";
import styles from "./MathQuiz.module.css";
import Answer from "./Answer";
export default function MathQuiz() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [color, setColor] = useState("");

  function generateQuestion() {
    const newA = Math.floor(Math.random() * 11);
    const newB = Math.floor(Math.random() * 11);
    setA(newA);
    setB(newB);
  }
  function updatePoint(answer) {
    const correct = a + b;
    if (Number(answer) === correct) {
      setScore(score + 1);
      setFeedback("Correct!");
      setColor("green");
    } else {
      setFeedback("Not correct!");
      setColor("red");
    }
    generateQuestion();
  }

  return (
    <div className={styles.mathContainer}>
      <p className={styles.mathInfo}>
        {a} + {b} = ?
      </p>
      <p className={styles.mathInfo}>Score: {score}</p>
      <p style={{ color: color }}>{feedback}</p>
      <Answer updatePoints={updatePoint} />
    </div>
  );
}
