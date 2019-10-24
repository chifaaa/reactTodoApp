import React,{ Component } from 'react'


class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etat:""
    }
  }
  
  toggleDone=(id)=> {
    const index = this.props.todos.findIndex(item => item.id ===Number (id));
    this.props.todos[index].checked = !this.props.todos[index].checked;
    console.log(this.props.todos)
    this.setState({
      etat:""
    })
    }

  todoList =()=> console.log(this.props.todos)

    
  render(){
    console.log("render",this.props.todos)

    return (
    <div className="todos collection">
      {this.props.todos.length ? (
    this.props.todos.map((el,index) => {
      return (


          <li className="todo-item" key={index}>
            <label  htmlFor={index} className={el.checked?"tick js-tick checked":"tick js-tick unchecked"} onClick={() => {this.toggleDone(el.id)}}></label>
            <span className={el.checked?"checkedspan":"none"}>{el.content}</span>
            <button className="delete-todo js-delete-todo" onClick={() => {this.props.deleteTodo(el.id)}}>
              <svg><use href="#delete-icon"></use></svg>
            </button>
          </li>



      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  )}

    </div>
  )
}}
export default Todos;