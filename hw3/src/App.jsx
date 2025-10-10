import "./App.css";
import Rating from "./components/Rating";
import List from "./components/List";

function App() {
  return (
    <>
      <h2 style={{ fontSize: "20px", fontWeigh: "600", marginLeft: "9rem" }}>
        Rating
      </h2>
      <Rating />
      <List />
    </>
  );
}

export default App;
