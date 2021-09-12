import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am onDelete of todo", todo);
    // Deleting this way in react does not work:
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addTodo = (title, desc) => {
    console.log("i am adding this Todo -", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(myTodo);

    setTodos([...todos, myTodo]);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  return (

    <Router>
      <Header title="My Todos List" searchBar={true} />
      <Switch>
        <Route exact path="/" render={()=>{
          return(
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todo={todos} onDelete={onDelete} />
          </>)
        }}>
        </Route>

        <Route path="/about">
          <About />
        </Route>


      </Switch>
     

      <Footer />
    </Router>


  );
}

export default App;
