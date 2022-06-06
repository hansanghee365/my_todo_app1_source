import React from 'react';
import { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const Todo = ({todo,setTodos}) => {
  const id=todo.id;
  const checkToggle = ()=>{
    updateDoc(doc(db, "todos", todo.id),{
      completed: !todo.completed
    })
  }
  const deleteTodo = ()=>{
    deleteDoc(doc(db, "todos",id));
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
