import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      class: props.class
    };
  }

  render() {
    return (
      <li className={this.state.class}>
        <a>{this.state.text}</a>
      </li>
    );
  }
}

export default ListItem;
