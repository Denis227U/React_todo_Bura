import React from "react";

import TodoListItem from "./../todo-list-item";

import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  //   const firstEl = (
  //     <li>
  //       <TodoListItem label={todos[0].label} important={todos[0].important} />
  //     </li>
  //   );

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        {/* <TodoListItem label={item.label} important={item.important} /> */}

        {/* упрощенная запись со spread object ES8 */}
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group">
      {elements}
      {/* {firstEl} */}
      {/* <li>
        <TodoListItem label={todos[1].label} important={todos[1].important} />
      </li> */}
      {/* <li>
        <TodoListItem label="Build React App" important />
         important тоже самое что
         important={true}
      </li> */}
    </ul>
  );
};

export default TodoList;
