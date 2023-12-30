import './App.css';
import { useState, useEffect } from "react"; 
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const url = "https://jsonplaceholder.typicode.com/posts";
  const fetchdata = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data)} catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <button onClick={fetchdata}>GET DATA</button>
      <div className="showProducts">
        
      </div> 
    </div>
  );
}

export default App;
