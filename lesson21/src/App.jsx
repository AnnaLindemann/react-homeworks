// import './App.css'
// import {increment, decrement} from "./redux/slices/countSlice"
// import { useSelector,useDispatch } from 'react-redux';


// function App() {
// const counter = useSelector((state) => state.counter.value);
// const dispatch = useDispatch()

//   return (
//     <div>
//      <h1>Count: {counter}</h1> 
//      <button onClick={() => dispatch(increment())}>Plus one</button>
//      <button onClick={() => dispatch(decrement())}>Minus one</button>
//     </div>
//   )
// }

// export default App

import "./App.css";
import { increment, decrement } from "./redux/slices/countSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter.value);
  // const username = useSelector((state) => state.counter.name);
  const { value: counter, name: username } = useSelector(
    (state) => state.counter
  );
  return (
    <div>
      <p>{username}</p>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Plus one</button>
      <button onClick={() => dispatch(decrement())}>Minus one</button>
    </div>
  );
}
export default App;