import { useState, useEfect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SectionPage({props}) {
  const [data, setData] = useState([]);
  const { section } = useParams(); 
  useEfect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch(`http://localhost:8080/books?section=${section}`);
        const json = await res.json();
        setData(json); 
      }catch(error){
        console.log(error)
      }
    };
    fetchData();
  }, [section]);

  const filterData = data.filter((item)=>{
    return props === item.section;
  })

  return (
    <div>

      <div className="sectionContainer">
      {filterData.map((item)=>{
        <div  className="bookCard" key={item.isbn}>
        <h5 className = "title" >{item.title} </h5>
          <div className = "price" > {item.price} </div>
          <div className = "author" > {item.author}</div>
        </div>
      })}
        
      </div>
    </div>
  )
}
