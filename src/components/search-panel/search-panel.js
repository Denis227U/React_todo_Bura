import React, { Component } from "react";

import "./search-panel.css";

// сделаем из компонента функции компонент класс, для того чтобы сделать инпут контролируемым, мы будем передавать в него значения из собственного state
export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  // т.к. передаем функцию как эвент листенер, используем функцию стрелку
  onSearchChange = (e) => {
    const term = e.target.value;

    this.setState({
      term,
    });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
