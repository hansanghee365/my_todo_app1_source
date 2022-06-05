import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import Plus from './components/Plus';
import { Modal } from './components/Modal';

function App() {
  const [plusToggle,setPlusToggle] = useState(false);
  // const toggleChange = setPlusToggle(plusToggle=>!plusToggle);
  const [nextId,setNextId] = useState(3);
  const [todos,setTodos] = useState([
    {id:1,title:'プログラミング',completed:true},
    {id:2,title:'プログラミング',completed:false},
  ]);
  const addTodo = title=>{
    setTodos(todos=>[...todos,{id:nextId,title:title,completed:false}]);
    setNextId(nextId+1);
  }
  return (
    <div className="container">
    <Header todos={todos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    <Plus plusToggle={plusToggle} setPlusToggle={setPlusToggle}/>
    {plusToggle&&<Modal plusToggle={plusToggle} setPlusToggle={setPlusToggle} addTodo={addTodo}/>}
  </div>
  );
}

export default App;
