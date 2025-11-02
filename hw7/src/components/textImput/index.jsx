import { useState } from "react";
import { useLanguage } from "../../context/useLanguage";
import styles from "./styles.module.css";

export default function TextInput() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const { translate, isTranslating, error } = useLanguage();

  async function getTranslate() {
    if (isTranslating) return;
    if (value.trim().length === 0) {
      return;
    }
    const translated = await translate(value);
    setOutput(translated);
    setValue("");
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={styles.inputCont}>
      <input
        className={styles.inputContent}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Enter text to translate…"
        disabled={isTranslating}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isTranslating && value.trim()) {
            getTranslate();
          }
        }}
      />
      <button
        className={styles.inputBtn}
        type="button"
        onClick={getTranslate}
        disabled={isTranslating || value.trim().length === 0}
      >
        {isTranslating ? "Translating…" : "Translate"}
      </button>
      {error ? <p role="alert">{error}</p> : null}
      {!error && output ? <p>{output}</p> : null}
    </div>
  );
}
