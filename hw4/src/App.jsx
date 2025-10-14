import "./App.css";
import { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import MathQuiz from "./components/MathQuiz";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <main className="mainContainer">
      <div className="cityContainer">
        <CitySelector onSelect={setSelectedCity} />
        <CityCard city={selectedCity} />
      </div>
      <div className="quizContainer">
        <MathQuiz />
      </div>
    </main>
  );
}

export default App;
