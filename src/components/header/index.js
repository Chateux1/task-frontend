import React, { Component } from "react";
import Icon from "../icon";
import ListItem from "../list-item";
import ListItemMarked from "../list-item-marked";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_class: ""
    };
  }

  setToggleTopMenuClass = () => {
    if (this.state.nav_class === "") {
      this.setState({ nav_class: "toggled" });
    } else {
      this.setState({ nav_class: "" });
    }
  };

  render() {
    let nav_class_list = `nav ${this.state.nav_class}`;
    return (
      <header className="header">
        <Icon class="header__logo" type="img" src="../../assets/logo.png" />

        <Icon
          class="nav__icon"
          type="i"
          src="fas fa-bars"
          onClick={this.setToggleTopMenuClass}
        />

        <nav className={nav_class_list}>
          <ul className="nav__menu">
            <ListItem text="web hosting" class="nav__menu-item" />
            <ListItemMarked
              classContainer="nav__menu-item--marked"
              classText="nav__menu-item--text"
              classMark="nav__menu-item--mark"
              text="cloud hosting"
              mark="on sale"
            />
            <ListItem text="vps hosting" class="nav__menu-item" />
            <ListItem text="domain checker" class="nav__menu-item" />
            <ListItem text="website builder" class="nav__menu-item" />
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
