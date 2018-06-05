import React, { Component } from "react";
import toDoList from "./todos.json";
import "./index.css";
import TodoList from "./TodoList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: toDoList
    };
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
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  handleDeleteCompleted = e => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.completed === false)
    });
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
      this.setState({
        todos: updatedTodoList
      });
      document.getElementById("text").value = "";
    }
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1> todos </h1>
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
        />{" "}
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {" "}
              {
                this.state.todos.filter(todo => todo.completed === false).length
              }{" "}
            </strong>{" "}
            item(s) left{" "}
          </span>{" "}
          <button
            onClick={this.handleDeleteCompleted}
            className="clear-completed"
          >
            Clear completed{" "}
          </button>{" "}
        </footer>{" "}
      </section>
    );
  }
}

export default App;
