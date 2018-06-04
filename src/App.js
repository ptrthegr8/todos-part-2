import React, { Component } from "react";
import toDoList from "./todos.json";
import "./index.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    console.log(this.props.completed);
    this.props.isChecked();
  }

  render() {
    return (
      <li className={this.props.completed ? ("completed") : ("")}>
        <div className="view">
         {this.props.completed ? (<input onChange={this.handleChange} className="toggle" type="checkbox" defaultChecked />) : (<input onClick={this.handleClick} className="toggle" type="checkbox" />)}
          <label>{this.props.text}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
        {this.props.todos.map( todo => <TodoItem isChecked={this.props.isChecked} key={todo.id} text={todo.title} completed={todo.completed} /> )}
        </ul>
      </section>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: toDoList}
  }
  handleCheck = index => (e) => {
    alert(index);
  }
 
  handlePress = (e) => {
    let updatedTodoList = this.state.todos.slice();
    let newTodo = {
      "userId": 1,
      "id": this.state.todos[this.state.todos.length - 1].id + 1,
      "title": e.target.value,
      "completed": false
    };
    updatedTodoList.push(newTodo);
    console.log(newTodo);
    console.log(e.key)
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({todos: updatedTodoList});
      // e.preventDefault();
      document.getElementById("text").value = "";
      }
    }
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            id="text"
            onKeyPress={this.handlePress}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
       <TodoList todos={this.state.todos} />
        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          {/* Remove this if you don't implement routing */}
          {/* Hidden if no completed items are left ↓ */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
