import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ''
    }
  }
  
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.todo.name}
            <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default TodoItem;