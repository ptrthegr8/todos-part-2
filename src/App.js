import React, { Component } from "react";
import logo from "./logo.svg";
import toDoList from "./todos.json";
import "./index.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={this.props.completed ? ("completed") : ("")}>
        <div className="view">
         {this.props.completed ? (<input className="toggle" type="checkbox" checked />) : (<input className="toggle" type="checkbox" />)}
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
    this.state = {todos: toDoList}
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
        {this.state.todos.map( todo => <TodoItem text={todo.title} completed={todo.completed} /> )}
        </ul>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus
          />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
       <TodoList />
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
