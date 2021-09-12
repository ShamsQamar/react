import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  
    return (
        <div className="text-center">
            <h2>{todo.sno}</h2>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>DELETE</button> <hr/>


        </div>
    )
}
