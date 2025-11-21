import { useState } from 'react';
import './App.css'
import ValueDisplay from './components/valueDisplay';

function App() {
const [value,setValue] = useState("");


function handleOnChange(e){
  e.preventDefault();
const updatedInput = e.target.value;
setValue(updatedInput);

}
  return (
    <div>
      <h2>Current and previous Value</h2>
    <form onChange={handleOnChange}>
      <input type="text" placeholder='Insert your text.' />
     <ValueDisplay value={value}/>
    </form>
    </div>
  )
}

export default App
