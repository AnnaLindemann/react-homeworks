import { useLanguage } from "../../context/useLanguage.js";
import styles from "./styles.module.css";

export default function LanguageSwitcher() {
  const { targetLanguage, setTargetLanguage, isTranslating } = useLanguage();
  return (
    <div className={styles.btnCont}>
      <h2 className={styles.title}>Translate on:</h2>
      <button
        onClick={() => setTargetLanguage("en")}
        className={targetLanguage === "en" ? styles.active : styles.btn}
        disabled={isTranslating}
      >
        EN
      </button>
      <button
        onClick={() => setTargetLanguage("ru")}
        className={targetLanguage === "ru" ? styles.active : styles.btn}
        disabled={isTranslating}
      >
        RU
      </button>
      <button
        onClick={() => setTargetLanguage("de")}
        className={targetLanguage === "de" ? styles.active : styles.btn}
        disabled={isTranslating}
      >
        DE
      </button>
    </div>
  );
}
