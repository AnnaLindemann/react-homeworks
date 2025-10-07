import "./App.css";
import ImageComponent from "./components/ImageComponent";
import dog from "./assets/images/dog11.jpg";
import VideoComponent from "./components/videoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";

function App() {
  return (
    <>
      <ImageComponent />
      <ImageComponent src={dog} alt="Dog" width={240} />
      <VideoComponent />
      <ParagraphsComponent />

      <ListsComponent
        olItem1="Punkt 1"
        olItemInner="Punkt 1.1"
        ulItem1="Punkt 2"
        ulItemInner="punkt 2.1"
      />
      <ListsComponent
        olItem1="Punkt 3"
        olItemInner="Punkt 3.1"
        ulItem1="Punkt 4"
        ulItemInner="punkt 4.1"
      />
    </>
  );
}

export default App;
