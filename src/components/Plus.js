import React from 'react'

const Plus = ({plusToggle,setPlusToggle}) => {
  return (
    <div className="plus_button" id="plus_button" onClick={()=>{
      setPlusToggle(plusToggle=!plusToggle);
    }}>
      <i className="fa fa-plus"></i>
    </div>
  )
}

export default Plus
