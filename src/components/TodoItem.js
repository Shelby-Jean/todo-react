import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ''
    }
  }

  changeStatus = (event) => {
    this.setState({
      status: event.target.value
    });
  }

  statusStyle = () => {
   if(this.state.status === "low") {
     return {
       backgroundColor: "#b0f5b0",
       color: "#046104"
      }
    }
    if(this.state.status === "medium") {
      return {
        backgroundColor: "#f2f09d",
        color: "#666304"
       }
     }
     if(this.state.status === "high") {
       return {
         backgroundColor: "#f5b3b3",
         color: "#570707"
      }
    }
  }
  
  render() {
    return (
      <div className="todo-item">
        <p style={this.statusStyle()} className="todo-name">{this.props.todo.name}</p>
        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
        <form>
          <select value={this.state.status} onChange={this.changeStatus}>
            <option value="" disabled selected>Select Status</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </form>
      </div>
    );
  }
}

export default TodoItem;