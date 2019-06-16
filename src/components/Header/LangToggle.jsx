import React from "react";
import "./LangToggle.scss";
import translate_pic from './translate.svg';

export default class LangToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langDropDownOpened: false
        }
        this.langClicked = this.langClicked.bind(this);
    }
    langClicked(lang) {
        this.setState({langDropDownOpened: !this.state.langDropDownOpened});
        this.props.langChanged(lang);
    }
    render() {
        return(
            <div onClick={()=>this.setState({langDropDownOpened: !this.state.langDropDownOpened})} id='langToggle'>
                <img src={translate_pic} />
                <span>{this.props.lang}</span>
                <div hidden={!this.state.langDropDownOpened} id='langDropDown'>
                    <span onClick={() => this.langClicked('en') }>EN</span>
                    <span onClick={() => this.langClicked('ru') }>RU</span>
                    <span onClick={() => this.langClicked('uk') }>UA</span>
                </div>
            </div>
        );
    }
}