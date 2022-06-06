import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import Plus from './components/Plus';
import { Modal } from './components/Modal';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore';

function App() {
  const [plusToggle,setPlusToggle] = useState(false);
  // const toggleChange = setPlusToggle(plusToggle=>!plusToggle);
  const [todos,setTodos] = useState([]);
  const addTodo = async (title)=>{
    if(title !== ""){
      await addDoc(collection(db, "todos"),{
        title,
        completed:false,
      })
    }
  }

  useEffect(()=>{
    const q = query(collection(db,'todos'));
    return ( onSnapshot(q, (querySnapshot) =>{
      let todosArray = [];
      querySnapshot.forEach((doc) =>{
        todosArray.push({ ...doc.data(), id: doc.id});        
      })
      setTodos(todosArray);
      })
    )
  },[]);


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
