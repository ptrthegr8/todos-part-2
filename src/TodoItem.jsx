import React from "react";

function TodoItem(props) {
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

export default TodoItem;
