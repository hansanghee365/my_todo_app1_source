import React from 'react'

export const Modal = ({plusToggle,setPlusToggle,addTodo}) => {
  return (
    <div className="modal" id="modal">
      <div className="background" onClick={()=>{
        setPlusToggle(plusToggle=!plusToggle);
      }}>
      </div>
      <form onSubmit={e=>{
        e.preventDefault();
        const title = e.target.title.value;
        if(!title)return;
        addTodo(title);
        setPlusToggle(plusToggle=!plusToggle);
      }}>
        <input type="text" name='title' placeholder='todoを入力！' autoFocus/>
        <button type="submit" className="add">
          <i className="fa fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
