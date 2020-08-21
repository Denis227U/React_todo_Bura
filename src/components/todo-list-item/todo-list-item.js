import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item d-flex align-items-center justify-content-between">
      <span style={style} className="todo-list-item-label">
        {label}
      </span>

      <div className="todo-list-item-btn-block">
        <button
          type="button"
          className="btn btn-outline-success btn-small todo-list-item-btn"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-small todo-list-item-btn"
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
