import React from "react";
import "./Header.scss";
import LangToggle from "./LangToggle.jsx";
import { FormattedMessage } from "react-intl";
import { PortfolioContext } from "../app";
import megaphone from "./megaphone.svg";
import portfolio from "./old-fashion-briefcase.svg";
import contact from "./phone-book.svg";

export default class Header extends React.Component {
    render() {
      return(
        <PortfolioContext.Consumer>
          {(isMobile) => (
            <header>
              <nav>
                <a href='#news'>{isMobile ? <img className='mobileNavigationIcon' src={megaphone} /> : <FormattedMessage id="links.news" />}</a>
                {!isMobile && <div className='separatorMenu'/>}
                <a href='#portfolio'>{isMobile ? <img className='mobileNavigationIcon' src={portfolio} /> : <FormattedMessage id="links.portfolio" />}</a>
                {!isMobile && <div className='separatorMenu'/>}
                <a href='#contact'>{isMobile ? <img className='mobileNavigationIcon' src={contact} /> : <FormattedMessage id="links.contact" />}</a>
              </nav>
              <LangToggle
                lang={this.props.lang.toUpperCase()}
                langChanged={this.props.langChanged}
                />
            </header>
          )}
        </PortfolioContext.Consumer>
      )
    }
}