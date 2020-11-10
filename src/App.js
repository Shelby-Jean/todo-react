import React from 'react';
import ListComponent from './ListComponent';
import {v4 as uuid} from 'uuid';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      text: '',
      isClicked: false,
    };
  }

  inputText = (event) => {
    this.setState({text: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      name: this.state.text,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      text: '',
      isClicked: true,
    })
  }

  deleteTodo = (id) => {
    console.log('DELETED');
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: updatedTodos,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>To Do List</h1>
          <form onSubmit={this.addTodo}>
            <input value={this.state.text} onChange={this.inputText}></input>
            <button>Submit</button>
          </form>
          <ListComponent todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </header>
      </div>
    );
  }
}

export default App;
