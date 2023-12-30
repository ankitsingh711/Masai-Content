import Counter from "./component/Counter";
import "./styles.css";
import { Todo } from "./Todo.js"

function Button({a,b,c,children}){
    console.log(a,b,c);
    return <button>{children}</button>
}

export default function App(){
    return {
        <div className="App">
            <Counter />
        </div>
    };
}

