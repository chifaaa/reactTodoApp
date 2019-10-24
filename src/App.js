import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    todos: []
  }}
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  
    
  addTodo = (todo) =>{
todo.id=Math.random();
todo.checked=false;
let todos=[...this.state.todos, todo];
this.setState({
  todos
})
  }



  render() {
    return (
      <div className="todo-app container">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleDone={this.toggleDone}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
export default App;