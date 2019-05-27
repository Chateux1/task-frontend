import { hot } from "react-hot-loader/root";
import React, { Component, useState, useEffect } from "react";

import Header from "../header";
import Footer from "../footer";
import Offer from "../offer";
import Price from "../price";

import bgHD from "../../../assets/bg-hd.jpg";
import bgExtraLarge from "../../../assets/bg-extra-large.jpg";
import bgLarge from "../../../assets/bg-large.jpg";
import bgMedium from "../../../assets/bg-medium.jpg";
import bgSmall from "../../../assets/bg-small.jpg";
import bgMobile from "../../../assets/bg-mobile.jpg";

import "./app.scss";
import "../../index.scss";

const App = () => {
  let imageUrl = bgMobile;
  switch (true) {
    case window.innerWidth >= 2000:
      imageUrl = bgHD;
      break;
    case window.innerWidth >= 1500 && window.innerWidth < 2000:
      imageUrl = bgExtraLarge;
      break;
    case window.innerWidth >= 1200 && window.innerWidth < 1500:
      imageUrl = bgLarge;
      break;
    case window.innerWidth >= 900 && window.innerWidth < 1200:
      imageUrl = bgMedium;
      break;
    case window.innerWidth >= 600 && window.innerWidth < 900:
      imageUrl = bgSmall;
      break;
    case window.innerWidth < 600:
      imageUrl = bgMobile;
      break;
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div
      className="page-container"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="page-wrapper">
        <Header />
        <main className="main">
          <Offer />
          <Price />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default hot(App);
