import React, { Component } from "react";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: props.class,
      type: props.type,
      src: props.src,
      onClick: props.onClick
    };
  }

  render() {
    const type = this.state.type;
    let output;

    if (type == "img") {
      output = <img src={this.state.src} />;
    } else if (type == "i") {
      output = <i className={this.state.src} />;
    }
    return (
      <div className={this.state.class} onClick={this.state.onClick}>
        {output}
      </div>
    );
  }
}

export default Icon;
