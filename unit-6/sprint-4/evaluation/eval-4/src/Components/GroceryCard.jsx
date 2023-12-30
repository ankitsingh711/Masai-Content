import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
function GroceryCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [groceryData, setGroceryData] = useState([]);

  const fetchedData = () => {
    setLoading(true);
    getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`)
      .then((res) => setGroceryData(res))
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return loading ? (
    <h1>Loading....</h1>
  ) : error ? (
    <h1>Error in fetching details</h1>
  ) : (
    <div className='main'>
      {
        groceryData?.data?.map((item)=>{
          return (
            <div key={item.id} className="child-div">
              <img src={item.image}/>
              <div>
                <h3>{item.name}</h3>
              </div>
              <h3>Rs. {item.price}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default GroceryCard;