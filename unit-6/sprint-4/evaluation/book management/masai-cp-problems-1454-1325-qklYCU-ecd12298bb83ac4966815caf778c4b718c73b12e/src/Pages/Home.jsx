import { useEffect, useState } from "react";
import {Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(
          "http://localhost:8080/books"
        );
        const json = await res.json();
        setData(json)
      }catch(error){
        console.log(error)
      }
    };
    fetchData();
  })

  return (
    <div>

      <div className="mainContainer">
        {data.map((item)=>(
          <Link to={`/booksdetailspage/${id}`}>
            <div  className="bookCard" key={item.isbn}>
            <h5 className = "title" > Title:{item.title}  </h5>
            <div className = "price" > Price: {item.price}</div>
            <div className = "author" > Author: {item.author}</div>
          </div>
          </Link>
        ))}
      </div>
      
    </div>
  )
}
