import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  constructor() {
    super();

    this.onLabelClick = () => {
      // вариант если нужно просто поменять состояние(например c false на true)
      // this.setState({
      //   done: true,
      // });

      // вариант если новое состояние должно зависеть от предыдущего (в нашем случае менять с true на false и обратно)
      this.setState(({ done }) => {
        return {
          done: !done,
        };
      });
    };

    this.onMarkImportant = () => {
      // такой вариант если наше состояние никак не зависит от предыдущего состояния, то передаем в setState просто объект
      // this.setState({
      //   important: true,
      // });

      // добавим функционал отмены важности итема (т.е. клик - делаем важным, повторный клик - делаем не важным)

      // если же состояние зависит от предыдущего состояния (например изменить значение с true на false, или увеличить счетчик на 1), то нужно передавать в setState другую функцию, которая будет вызвана ТОГДА, когда state ГОТОВ
      this.setState(({ important }) => {
        return {
          important: !important,
        };
      });
    };

    this.state = {
      done: false,
      important: false,
    };
  }

  // 1вариант с bind
  // onLabelClick() {
  //   console.log(`Done: ${this.props.label}`);
  // }

  render() {
    // this.props; то место откуда можно получить текущее свойство
    const { label, onDeleted } = this.props;
    // перенесем импортант из props в state
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    // const style = {
    //   color: important ? "tomato" : "black",
    //   fontWeight: important ? "bold" : "normal",
    // };

    return (
      <span className={classNames}>
        <span
          // style={style}
          className="todo-list-item-label"
          // 1вариант с bind
          // onClick={this.onLabelClick.bind(this)}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <div className="todo-list-item-btn-block">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o" />
          </button>

          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={this.onMarkImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </span>
    );
  }
}

// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? "tomato" : "black",
//     fontWeight: important ? "bold" : "normal",
//   };

//   return (
//     <span className="todo-list-item d-flex align-items-center justify-content-between">
//       <span style={style} className="todo-list-item-label">
//         {label}
//       </span>

//       <div className="todo-list-item-btn-block">
//         <button
//           type="button"
//           className="btn btn-outline-success btn-small todo-list-item-btn"
//         >
//           <i className="fa fa-exclamation" />
//         </button>

//         <button
//           type="button"
//           className="btn btn-outline-danger btn-small todo-list-item-btn"
//         >
//           <i className="fa fa-trash-o" />
//         </button>
//       </div>
//     </span>
//   );
// };

// export default TodoListItem;
