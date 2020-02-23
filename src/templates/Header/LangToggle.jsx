import React from "react";
import "./LangToggle.scss";
import translate_pic from './translate.svg';
import { PortfolioContext } from "../app";

export default class LangToggle extends React.Component {
    state = {
        langDropDownOpened: false
    }
    langClicked = (lang) => (ev) => {
        this.setState({langDropDownOpened: !this.state.langDropDownOpened});
        this.props.langChanged(lang);
    }
    render() {
        return(
            <PortfolioContext.Consumer>
                {(isMobile) => (
                    <>
                        {!isMobile ? <div onClick={()=>this.setState({langDropDownOpened: !this.state.langDropDownOpened})} id='langToggle'>
                            <img src={translate_pic} />
                            <span>{this.props.lang}</span>
                            <div hidden={!this.state.langDropDownOpened} id='langDropDown'>
                                <span onClick={ this.langClicked('en') }>EN</span>
                                <span onClick={ this.langClicked('ru') }>RU</span>
                                <span onClick={ this.langClicked('uk') }>UA</span>
                            </div>
                        </div> : 
                        <div id='mobileLangToggle'>
                            <span onClick={ this.langClicked('en')}>EN</span>
                            <span onClick={ this.langClicked('ru') }>RU</span>
                            <span onClick={ this.langClicked('uk') }>UA</span>
                        </div>}
                    </>
                )}
            </PortfolioContext.Consumer>
        );
    }
}