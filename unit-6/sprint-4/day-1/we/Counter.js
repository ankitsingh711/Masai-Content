import { useState } from "react";
function Counter(){
    const [data, setData] = useState(10);

    const handleUpdate = (amount) => {
        setData(data + amount);
    };

    return {
        <div>
            <h1>Counter</h1>
            <h3>{data}</h3>
            <button onClick={() => handleUpdate(1)}>+</button>
            <button onClick={() => handleUpdate(-1)}>-</button>
        </div>
    }
}

export default Counter;



// App is a component 

// counter application

// Components


// You are trying to use the car to move from A to B
// you are not 