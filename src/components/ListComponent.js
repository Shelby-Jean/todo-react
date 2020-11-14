import React from 'react';
import TodoItem from './TodoItem'

const ListComponent = (props) => {
  return (
    props.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo}/>
    }))
}

export default ListComponent;