
import { useState, useMemo, useEffect } from 'react'
import './App.css'

const slowFunction = (value) => {
  console.log("calling slowFunction")
  for (let i = 0; i < 1550000; i++){ }
return value * 2;
}

function App() {
  const [number,setNumber] = useState(0)  
  const [dark,setDark] = useState(false)
 const doubledNumber = useMemo(() => {
    return slowFunction(number)
  },[number]);
// const themeStyle = {
// backgroundColor: dark ? "black" : "white",
// color: dark ? "white": "black",
// }

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyle]);

  return (
    <div style={themeStyle}>
    <input type="number" value={number} onChange={(event) => setNumber(event.target.value)} />
    <p>{doubledNumber}</p>
    <button onClick={() => setDark((prev) => !prev)}>change theme</button>
    </div>
  )
}

export default App


//use Memo: when slowFunction, style Object with many styles(what not changed oft)
// useMemo has to return something always
//useCallback cashed function, the same as memo but for functions. If we use function as props for another components, we have to use callback in parent component
// memo use for component: export default memo(Component)