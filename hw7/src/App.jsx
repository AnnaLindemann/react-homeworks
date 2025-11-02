import "./App.css";
import { LanguageProvider } from "./context/languageContext";
import LanguageSwitcher from "./components/languageSwitcher";
import TextInput from "./components/textImput";
import TranslatedOutput from "./components/translatedOutput";

function App() {
  return (
    <LanguageProvider>
      <div className="mainCont">
        <LanguageSwitcher />
        <TextInput />
        <TranslatedOutput />
      </div>
    </LanguageProvider>
  );
}

export default App;
