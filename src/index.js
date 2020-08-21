import React from "react";
import ReactDOM from "react-dom";

// import AppHeader from "./components/app-header";
// import SearchPanel from "./components/search-panel";
// import ItemStatusFilter from "./components/item-status-filter";
// import TodoList from "./components/todo-list";

// кастомные компоненты <AppHeader /> называем с большой буквы, иначе их примут за обычный тэш html

// Четких принципов при разбивке на компоненты не существует
// можно руководствоваться следующим
// 1-е правило: если моэно представить сценарий, когда кусочек интерфейса можно использовать еще где-то, и если он выполняет отдельную независимую функцию, то это скорее всего отдельный компонент
// 2-е правило: если код становится уж слишком боольшим, то скорее всего его следует разбить на компоненты

import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("root"));

// правила JSX
// 1
/*
так создавать елемент нельзя
const el = (
  <span>One</span>
  <span>Two</span>
)

корнем JSX фрагмента должен быть один элемент, т.к. JSX код превразается в вызов функции React.createElement(...)
нужно обернуть код в какой-то родительский элемент

валидная запись
const el = (
  <div>
    <span>One</span>
    <span>Two</span>
  </div>
)

*/

// 2
/*
JSX умеет куда больше чем html
JSX умеет использовать в своей разментке JS выражения и их значения
(чтобы их использовать нужно обернуть в {} )

например
const AppTime = () => {
  return <span>{new Date().toString()}</span>;
};

*/

// 3
/*
при помощи {} мы можем вставлять одни реакт элементы в другие

const App = () => {
  const loginBox = <span>Log in please</span>
  return (
    <div>
      { loginBox }      
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

{ loginBox } таким образом можно вставлять только реакт элементы, 

const App = () => {
  const loginBox = <span>Log in please</span>
  return (
    <div>
      { new Date() }  // выдаст ошибку
      { 'hello' }  // а так можно
      { loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

{ new Date() } выдаст ошибку, т.к. new Date() это объект

так можно использовать только другие реакт элементы, строки, числа булевые значения, но НЕ ОБЪЕКТЫ
(так можно {3534} или {'string'})

т.к. loginBox в нашем случае элемент, то пишем { loginBox }, если бы был компонентом, то писали бы <LoginBox />


если бы loginBox был null или undefined то ошибки бы не было, он просто бы не отобразился на странице

const loginBox = null; // не ошибка

*/

// 4
/*
в {} можно передавать значения атрибутов

const SearchPanel = () => {
  const searchText = 'search';
  return <input placeholder={searchText} />;
};

АТРИБУТЫ в реакт терминологии называются свойствами PROPERTIES
*/

// 5
/*
передовать значения в кастомные компоненты имеет огромный смысл

const App = () => {
  const loginBox = <span>Log in please</span>
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList items={['item 1', 'item 2']} />
    </div>
  );
};

*/

// 6
// названия атрибутов пишутся с маленькой буквы и camelCase'ом
// два html атрибута называются иначе в JSX
// class   ===>   className
// for   ===>   htmlFor
// все остальные называются также
/*
<input placeholder={searchText}
       className='input-form'
       htmlFor=''  />;
*/

// 7
/*
передать css стили компоненту можно так

const SearchPanel = () => {
  const searchText = "search";
  const searchStyle = {
    fontSize: "25px",
  };
  return <input placeholder={searchText} style={searchStyle} />;
};
*/

// 8
// html по умолчанию эскейпится
// т.е. он становится нормальной строкой, которая нормально отобразится в браузере

/*
const App = () => {
  const value = '<script>alert(*какой-то плохой скрипт злоумышленника*)</script>'
  return (
    <div>
      { value }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

если просто вставить значение value на страницу, то этот скрипт сработает, но если использовать эту строку в JSX, т.е. так { value }, то строка со скриптом просто отобразится на странице и скрипт НЕ сработает

по крайней мере об этом аспекте безопасности реакт разработчикам можно не волноваться
*/
