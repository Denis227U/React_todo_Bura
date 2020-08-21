import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";

const App = () => {
  // данные для нашего списка дел хранятся на самом верхнем уровне в компоненте App, только компонент App в действительности знает откуда берутся эти данные, т.е. если в какой-то момент захотим изменить логику и получать например эти данные с сервера, нам нужно будет переписать только App, остальные компоненты не будут затронуты, т.к. они будут получать уже готовые данные

  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  return (
    <div className="container">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      {/* <TodoList /> */}
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
