import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
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

export default TodoList;
