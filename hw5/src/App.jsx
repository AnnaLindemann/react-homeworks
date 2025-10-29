import "./App.css";
import Text from "./components/text";
import ItemContainer from "./components/itemContainer";
import spotify from "./assets/icons/spotify.svg";
function App() {
  return (
    <div className="mainCont">
      <div className="spotifyImgCont">
        <img className="spotifyImg" src={spotify} alt="" />
      </div>
      <Text />
      <ItemContainer />
    </div>
  );
}

export default App;
