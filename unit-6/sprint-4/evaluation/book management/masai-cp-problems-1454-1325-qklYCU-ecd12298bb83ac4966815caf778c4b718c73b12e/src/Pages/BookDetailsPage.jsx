import React from 'react';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const getData = async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error)
    }
}

export default function BookDetailsPage() {
    const {id} = useParams()
    const [product, setProduct] = useState([]);
    const [error, setError ]  = useState(false);

    const fetchData = () => {
        getData(`http://localhost:8080/books/${id}`)
        .then((res)=>{
            setProduct(res);
        })
        .catch((err)=>{
            setError(true);
        })
    }

    useEffect(()=>{
        fetchData();
    },[id])
    return (
        <div>

            {product.map((item)=>{
                <div className="bookContainer" key={item.isbn}>
                <h5 className="title"> {item.title}</h5>
                <div className="price">{item.price}</div>
                <div className="section"> {item.section}</div>
                <div className="author"> {item.author}</div>
                <div className="description">{item.description} </div>
                <div className="isbn"> {item.isbn}</div>
            </div>
            })}
        </div>
    )
}
