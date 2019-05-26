import React, { Component } from "react";

class ListItemMarked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classContainer: props.classContainer,
      classText: props.classText,
      classMark: props.classMark,
      text: props.text,
      mark: props.mark
    };
  }

  render() {
    return (
      <li className={this.state.classContainer}>
        <a>
          <span className={this.state.classText}>{this.state.text}</span>
          <span className={this.state.classMark}>{this.state.mark}</span>
        </a>
      </li>
    );
  }
}

export default ListItemMarked;
