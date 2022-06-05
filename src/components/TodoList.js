import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({todos,setTodos}) => {
  return (
    <article>
      <div className="todoList">
        {todos.map(todo=><Todo key={todo.id} todo={todo} setTodos={setTodos}/>)}
        
      </div>
    </article>
  )
}
