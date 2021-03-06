import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="add-item-group" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="add item"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
        />

        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.onSubmit}
        >
          Add item
        </button>
      </form>
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
