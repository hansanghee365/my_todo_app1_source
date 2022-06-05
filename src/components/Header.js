import React from 'react'

export const Header = ({todos}) => {
  return (
    <header>
      <div className="title">
        <h2>TodoList({todos.length})</h2>
      </div>
    </header>
  )
}
