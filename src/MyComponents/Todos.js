import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
    let myStyle = {
        minHeight : "70vh"
    }
    return (
        <div className="container text-center my-3" style={myStyle}>

            <h4 className="my-4">Todos List --</h4>
            {props.todo.length===0? "No Todos to display":
            props.todo.map((todo)=>{    
            return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>             
            })
            }
            
            
        </div>
    )
}
