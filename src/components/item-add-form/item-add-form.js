import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="add-item-group">
        <input placeholder="add item" className="form-control add-item-input" />

        <button
          type="button"
          className="btn btn-warning"
          onClick={() => this.props.onItemAdded("hello world")}
        >
          Add item
        </button>
      </div>
    );
  }
}

// const AddItem = () => {
//   return (
//     <div className="add-item-group">
//       <input placeholder="add item" className="form-control add-item-input" />

//       <button type="button" className="btn btn-warning">
//         Add item
//       </button>
//     </div>
//   );
// };

// export default AddItem;
