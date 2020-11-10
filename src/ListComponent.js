import React from 'react'

const ListComponent = (props) => {
  return (
    <div>
      <ul>{props.todos.map((todo) => {
        console.log(todo)
        return (
        <div key={todo.id}>
          <li>{todo.name}</li>
          <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
        </div>
        )
      })}
      </ul>
    </div>
  )
}

export default ListComponent;