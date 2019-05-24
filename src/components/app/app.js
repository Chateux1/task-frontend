import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Offer from "../offer";
import Price from "../price";

import "./app.scss";
import "../../index.scss";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-wrapper">
          <Header />
          <Offer />
          <Price />
          <Footer />
        </div>
      </div>
    );
  }
}

export default hot(App);
