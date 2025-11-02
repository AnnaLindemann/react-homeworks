import { useLanguage } from "../../context/useLanguage";
import styles from "./styles.module.css";

export default function TranslatedOutput() {
  const { error, lastResult } = useLanguage();
  const resultText = lastResult;

  return (
    <div>
      {error ? <p role="alert">{error}</p> : null}
      {!error && !resultText ? (
        <p className={styles.outputCont}>Type text and press Translate</p>
      ) : null}
    </div>
  );
}
