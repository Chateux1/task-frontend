import React, { Component } from "react";

class FooterListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: props.class,
      text: props.text
    };
  }
  render() {
    return (
      <a className={this.state.class}>
        <i className="fas fa-check" />
        <span> {this.state.text}</span>
      </a>
    );
  }
}

export default FooterListItem;
