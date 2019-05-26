import React, { Component } from "react";
import FooterListItem from "../footer-list-item";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <FooterListItem class="menuItem1" text="Guaranteed 99.9% Uptime" />
        <FooterListItem class="menuItem2" text="Superior Speed Performance" />
        <FooterListItem class="menuItem3" text="24/7 Support Chat" />
        <FooterListItem class="menuItem4" text="30-Day Money-Back Guarantee" />
      </footer>
    );
  }
}

export default Footer;
