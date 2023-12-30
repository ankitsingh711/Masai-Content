import React from "react";
import { useState, useEffect } from "react";

export const fetchData = async () => {
  return fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/")
  .then((res) => res.json());
};

function FlightSearch() {
  const [data, setData] = useState([]);
  useEffect(() => {fetchData()},[]);

  const getData = async () => {
    try {
      const response = await fetchData();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }
  // on page load fetch the data (useEffect)

  const handleSearch = () => {
    // filter the data based on source and destination
  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" />
          <br /> <br />
          <button data-testid="search-button">Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      <div data-testid="no-flights" className="">
            No Flights Found
          </div>
    </div>
  );
}

export default FlightSearch;
