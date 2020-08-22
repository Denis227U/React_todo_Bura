import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
      ],
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);

        // todoData.splice(idx, 1); // так делать очень плохо
        // очень плохая практика изменять существующий state напрямую
        // нивкоем случае нельзя изменять те данные которые мы получаем внутрь setState, т.к. это может привести к ошибкам которые очень сложно отлдавливать

        // поэтому мы должны вернуть новый массив
        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx + 1);

        const newArray = [...before, ...after];

        return {
          todoData: newArray,
        };
      });
    };

    this.addItem = (text) => {
      // genetate id
      const newItem = {
        label: text,
        important: false,
        id: this.maxId++,
      };

      // add element in array
      this.setState(({ todoData }) => {
        const newArray = [...todoData, newItem];

        return {
          todoData: newArray,
        };
      });
    };
  }

  render() {
    return (
      <div className="container">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

/*
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
      
      <TodoList
        todos={todoData}
        onDeleted={(id) => console.log(`${id} deleted`)}
      />
    </div>
  );
};

export default App;

*/
