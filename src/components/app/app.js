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
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Make Awesome App"),
        this.createTodoItem("Have a lunch"),
        // { label: "Drink Coffee", important: false, id: 1 },
        // { label: "Make Awesome App", important: false, id: 2 },
        // { label: "Have a lunch", important: false, id: 3 },
      ],
      term: "",
      filter: "all", // active, all, done
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
      // const newItem = {
      //   label: text,
      //   important: false,
      //   id: this.maxId++,
      // };
      const newItem = this.createTodoItem(text);

      // add element in array
      this.setState(({ todoData }) => {
        const newArray = [...todoData, newItem];

        return {
          todoData: newArray,
        };
      });
    };

    this.toggleProperty = (arr, id, propName) => {
      // lesson 43
      const idx = arr.findIndex((el) => el.id === id);
      // 1 нужно обновить объект, который содержится в нужном месте в массиве (путем создания нового с измененым нужным свойством)
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };

      // 2 нужно сконструировать новый массив(т.к. не можем изменять существующий)
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };

    this.onToggleImportant = (id) => {
      console.log("Toggle important", id);

      // lesson 43
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "important"),
        };
      });
    };

    this.onToggleDone = (id) => {
      console.log("Toggle done", id);

      // lesson 43
      this.setState(({ todoData }) => {
        // const idx = todoData.findIndex((el) => el.id === id);
        // 1 нужно обновить объект, который содержится в нужном месте в массиве (путем создания нового с измененым нужным свойством)
        // const oldItem = todoData[idx];
        // const newItem = { ...oldItem, done: !oldItem.done };

        // 2 нужно сконструировать новый массив(т.к. не можем изменять существующий)
        // const newArray = [
        //   ...todoData.slice(0, idx),
        //   newItem,
        //   ...todoData.slice(idx + 1),
        // ];

        return {
          todoData: this.toggleProperty(todoData, id, "done"),
        };
      });
    };

    this.onSearchChange = (term) => {
      this.setState({ term });
    };

    this.onFilterChange = (filter) => {
      this.setState({ filter });
    };
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;

      case "active":
        return items.filter((item) => !item.done);

      case "done":
        return items.filter((item) => item.done);

      default:
        return items;
    }
  }

  render() {
    // lesson 43    // term - lesson 47
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    const visibleItems = this.filter(this.search(todoData, term), filter);

    return (
      <div className="container">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

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
