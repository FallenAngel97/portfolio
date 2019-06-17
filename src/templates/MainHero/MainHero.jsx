import React from "react";
import "./MainHero.scss";
import android_logo from "./android-logo.svg";
import file_logo from "./file.svg";
import paint_brush from "./paint-brush.svg";
import { FormattedMessage } from "react-intl";
import { PortfolioContext } from "../app";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillIndex: 0
    }
    const changeSkill = () => {
      this.state.skillIndex++;
      if(this.state.skillIndex == 3) 
        this.state.skillIndex = 0;
      
      this.setState({skillIndex: this.state.skillIndex})
      setTimeout(changeSkill, 1000);
    }
    setTimeout(changeSkill, 1000);
  }
  render() {
    return (
      <PortfolioContext.Consumer>
        {(isMobile) => (
        <div id="categories">
          {(!isMobile || (isMobile && this.state.skillIndex == 0)) && <div className="category"><img alt="paint_brush" src={paint_brush} /><span>Design of websites</span><div id="greenLine"/></div>}
          {(!isMobile || (isMobile && this.state.skillIndex == 1)) && <div className="category"><img alt="file_logo" src={file_logo} /><span>Web-development</span><div id="yellowLine"/></div>}
          {(!isMobile || (isMobile && this.state.skillIndex == 2)) && <div className="category"><img alt="android_logo" src={android_logo} /><span>Android application development</span><div id="redLine"/></div>}
        </div>)}
      </PortfolioContext.Consumer>
    )
  }
}

export default MainHero => (
  <article id="main-hero">
    <div id="mainText">
      <h3><FormattedMessage id="welcomeMessage" /></h3>
      <Skills />
    </div>
  </article>
);