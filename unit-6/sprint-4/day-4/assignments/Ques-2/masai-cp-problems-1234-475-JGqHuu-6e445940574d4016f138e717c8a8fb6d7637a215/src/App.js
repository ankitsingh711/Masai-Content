import "./App.css";
import { useState } from "react";
import Post from "./Components/Post";

const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res)=> res.json());
}

function App() {
  const [data, setData] = useState([]);
  const fetchApiData = async () => {
    try {
      const res = await getData();
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={fetchApiData}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {
          data.map((item)=>{
            return <Post  key={item.id} {...item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
