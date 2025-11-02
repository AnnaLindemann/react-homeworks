import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContextObject";
import { translateMyMemory } from "../services/translator.mymemory";
import {
  SUPPORTED_LANGUAGES,
  MYMEMORY_DEFAULT_LANGUAGE,
} from "../config/translator";

export function LanguageProvider({ children }) {
  const [targetLanguage, setTargetLanguageState] = useState(
    MYMEMORY_DEFAULT_LANGUAGE
  );
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState(null);
  const [lastResult, setLastResult] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("targetLanguage");
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      setTargetLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("targetLanguage", targetLanguage);
  }, [targetLanguage]);

  function setTargetLanguage(lang) {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setTargetLanguageState(lang);
      setError(null);
    } else {
      return;
    }
  }

  async function translate(text) {
    if (!text || text.trim().length === 0) {
      return "";
    }
    setIsTranslating(true);
    setError(null);
    try {
      const result = await translateMyMemory({
        text,
        target: targetLanguage,
      });
      const translatedText = result.translatedText;
      setLastResult(translatedText);
      return translatedText;
    } catch (e) {
      const errorMessage = e?.message || String(e);
      setError(errorMessage);
      return "";
    } finally {
      setIsTranslating(false);
    }
  }
  const value = {
    targetLanguage: targetLanguage,
    isTranslating: isTranslating,
    error: error,
    setTargetLanguage: setTargetLanguage,
    translate: translate,
    lastResult: lastResult,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
