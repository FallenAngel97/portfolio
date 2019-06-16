import React from "react";
import "./Header.scss";
import LangToggle from "./LangToggle.jsx";
import { FormattedMessage } from "react-intl";

export default class Header extends React.Component {
    render() {
      return(
          <header>
            <LangToggle
              lang={this.props.lang.toUpperCase()}
              langChanged={this.props.langChanged}
              />
            <nav>
              <a href='#news'><FormattedMessage id="links.news" /></a>
              <div className='separatorMenu'/>
              <a href='#portfolio'><FormattedMessage id="links.portfolio" /></a>
              <div className='separatorMenu'/>
              <a href='#contact'><FormattedMessage id="links.contact" /></a>
            </nav>
          </header>
      )
    }
}