import React, { useEffect, useState } from "react";
import "./MainHero.scss";
import android_logo from "./android-logo.svg";
import file_logo from "./file.svg";
import paint_brush from "./paint-brush.svg";
import { FormattedMessage } from "react-intl";
import { PortfolioContext } from "../app";

const Skills = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  useEffect(() => {
    const changeSkill = () => {
      setSkillIndex((index) => (index + 1 >= 3 ? 0 : index + 1));
      setTimeout(changeSkill, 1000);
    }
    setTimeout(changeSkill, 1000);
  }, []);

  return (
    <PortfolioContext.Consumer>
      {(isMobile) => (
        <div id="categories">
          {(!isMobile || (isMobile && skillIndex === 0)) && <div className="category"><img alt="paint_brush" src={paint_brush} /><span>Design of websites</span><div id="greenLine"/></div>}
          {(!isMobile || (isMobile && skillIndex === 1)) && <div className="category"><img alt="file_logo" src={file_logo} /><span>Web-development</span><div id="yellowLine"/></div>}
          {(!isMobile || (isMobile && skillIndex === 2)) && <div className="category"><img alt="android_logo" src={android_logo} /><span>Android application development</span><div id="redLine"/></div>}
        </div>)}
      </PortfolioContext.Consumer>
  );
}

const MainHero = () => (
  <article id="main-hero">
    <div id="mainText">
      <h3><FormattedMessage id="welcomeMessage" /></h3>
      <Skills />
    </div>
  </article>
);
export default MainHero;
