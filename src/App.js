import React, { Component } from "react";
import toDoList from "./todos.json";
import "./index.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          {this.props.completed ? (
            <input
              onChange={this.props.handleCheck}
              className="toggle"
              type="checkbox"
              defaultChecked
            />
          ) : (
            <input
              onChange={this.props.handleCheck}
              className="toggle"
              type="checkbox"
            />
          )}
          <label>{this.props.text}</label>
          <button className="destroy" onClick={this.props.handleDelete} />
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
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.title}
              completed={todo.completed}
              handleCheck={this.props.handleCheck(todo.id)}
              handleDelete={this.props.handleDelete(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: toDoList };
  }

  handleCheck = id => e => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todo =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      )
    });
  };

  handleDelete = id => e => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.id !== id) });
  };

  handleDeleteCompleted = e => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.completed === false) });
  };

  handlePress = e => {
    let updatedTodoList = this.state.todos.slice();
    let newTodo = {
      userId: 1,
      id: this.state.todos.length
        ? this.state.todos[this.state.todos.length - 1].id + 1
        : 1,
      title: e.target.value,
      completed: false
    };
    updatedTodoList.push(newTodo);
    if (e.key === "Enter" && e.target.value !== "") {
      this.setState({ todos: updatedTodoList });
      document.getElementById("text").value = "";
    }
  };
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

        <TodoList
          todos={this.state.todos}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.todos.filter(todo => todo.completed === false).length}
            </strong>{" "}
            item(s) left
          </span>
          <button
            onClick={this.handleDeleteCompleted}
            className="clear-completed"
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
