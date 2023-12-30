import {useState} from "react";

export default function Counter({initCount=0}){
    const [value, counter] = useState(initCount);
    const  add = () => {
        counter(value+1)
    }
    const  subtract = () => {
        counter(value-1)
    }
    const double = () => {
        counter(value*2)
    }
    return(
        <div>
            <h2 data-testid="counter-header">Counter</h2>
            <h3 data-testid="count">{value}</h3>
            <button onClick={add} data-testid="add-btn">+</button>
            <button onClick={subtract} data-testid="subtract-btn">-</button>
            <button onClick={double} data-testid="double-btn">Double</button>
        </div>
    )
}