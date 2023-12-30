import { useState, useEffect } from "react";
import './App.css';

function App() {

  let [ count, setCount ] = useState(0);
  const handleAdd = () => {
    setCount(count+1);
  }

  useEffect(()=>{
    setCount(count);
  },[handleAdd])
  return (
    <div className="App">
      <h1>Clcicked  {count}  Times</h1>
      <button onClick={handleAdd}>INCREMENT + </button>
    </div>
  );
}

export default App;
