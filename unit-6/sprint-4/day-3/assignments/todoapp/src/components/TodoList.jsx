import React from 'react'

const TodoList = ({todos,handleDelete}) => {
    console.log(todos);
  return (

    <div>
        
            {todos.map((el)=>(
                <div key={el.id}>{el.title }--{el.status ?"completed":"not-completed"}
                 <button onClick={()=>{handleDelete(el.id)}}>
                    Delete
                 </button>
                 <button>
                    Toggle
                 </button>
                 </div>


            ))}
        
      
    </div>
  )
}

export default TodoList
