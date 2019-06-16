import React from "react";
import "./MainHero.scss";
import android_logo from "./android-logo.svg";
import file_logo from "./file.svg";
import paint_brush from "./paint-brush.svg";
import { FormattedMessage } from "react-intl";

export default MainHero => (
  <article id="main-hero">
    <div id="mainText">
      <h3><FormattedMessage id="welcomeMessage" /></h3>
      <div id="categories">
        <div className="category"><img alt="paint_brush" src={paint_brush} /><span>Design of websites</span><div id="greenLine"/></div>
        <div className="category"><img alt="file_logo" src={file_logo} /><span>Web-development</span><div id="yellowLine"/></div>
        <div className="category"><img alt="android_logo" src={android_logo} /><span>Android application development</span><div id="redLine"/></div>
      </div>
    </div>
  </article>
);