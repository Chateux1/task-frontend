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
      <>
        <Header />
        {/* <Offer />
        <Price /> */}
        <Footer />
      </>
    );
  }
}

export default hot(App);
