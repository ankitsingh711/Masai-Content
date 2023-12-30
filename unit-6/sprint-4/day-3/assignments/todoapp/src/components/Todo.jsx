import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [Page, setPage] = useState(1);
  const [todoShow, setTodoShow] = useState(false);

  useEffect(() => {
    getData();
    // handleDelete()
  }, [todoShow, Page]);

  const getData = () => {
    fetch(`http://localhost:8080/todos?_limit=5&_page=${Page}`)
      .then((res) => res.json())
      .then((res) => setTodoList(res))
      .catch((err) => console.log(err));
  };

  const handlePage = (val) => {
    setPage(Page + val);
  };

  //     const handleToggle=(id)=>{
  //         fetch(`http://localhost:8080/todos/${id}`, {
  //   method: 'PATCH',
  //   body: JSON.stringify({
  //     // status: status.,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  //     }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        getData();
      });
  };

  console.log(todolist);
  const handleAdd = (e) => {
    setTodoShow(!todoShow);
    e.preventDefault();
    const obj = {
      title: todo,
      status: false,
    };
    fetch(`http://localhost:8080/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleAdd}>Add</button>
      <TodoList todos={todolist} handleDelete={handleDelete} />
      <Pagination Page={Page} handlePage={handlePage} />
    </div>
  );
};

export default Todo;
