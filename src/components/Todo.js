import React from 'react';
import { useState } from 'react';

export const Todo = ({todo,setTodos}) => {
  const id=todo.id;
  const checkToggle = ()=>{
    setTodos(todos=>todos.map(todo=>(todo.id ===id?{...todo,completed:!todo.completed}:todo)))
  }
  const deleteTodo = ()=>{
    setTodos(todos=>[...todos].filter(todo=>todo.id !==id));
  }
  return (
    <div className={`todo ${todo.completed?'check':''}`}>
      <div className="text">
        {todo.title}
      </div>
      <div className="button">
        <i className="fas fa-check" onClick={checkToggle}></i>
        <i className="fa fa-trash" onClick={deleteTodo}></i>
      </div>
    </div>
  )
}
