import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);// handle side effect
  useEffect(() => {
    console.log("2")
  })

  useEffect(() => {
    console.log("3");
  })

  let handleAdd = () => {
    setCount((val)=> {return val+1})
  }

  let handleSub = () => {
    setCount((val)=>{return val-1});
  }
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>REDUCE</button>
    </div>
  );
}

export default App;
