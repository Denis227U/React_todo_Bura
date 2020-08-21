import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  constructor() {
    super();

    this.onLabelClick = () => {
      console.log(`Done: ${this.props.label}`);
    };
  }

  // 1вариант с bind
  // onLabelClick() {
  //   console.log(`Done: ${this.props.label}`);
  // }

  render() {
    // this.props; то место откуда можно получить текущее свойство
    const { label, important = false } = this.props;

    const style = {
      color: important ? "tomato" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <span className="todo-list-item d-flex align-items-center justify-content-between">
        <span
          style={style}
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
