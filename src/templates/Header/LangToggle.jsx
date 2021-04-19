import React, {useState} from "react";
import "./LangToggle.scss";
import translate_pic from './translate.svg';
import { PortfolioContext } from "../app";

const LangToggle = (props) => {
    const [langDropDownOpened, setLangDropDownOpened] = useState(false)

    const langClicked = (lang) => {
        setLangDropDownOpened((opened) => !opened);
        props.langChanged(lang);
    }

    return(
        <PortfolioContext.Consumer>
            {(isMobile) => (
                <>
                    {isMobile === false ? <div onClick={() => setLangDropDownOpened((opened) => !opened)} id="langToggle">
                        <img src={translate_pic} />
                        <span>{props.lang}</span>
                        <div hidden={!langDropDownOpened} id="langDropDown">
                            <span onClick={() => langClicked('en') }>EN</span>
                            <span onClick={() => langClicked('ru') }>RU</span>
                            <span onClick={() => langClicked('uk') }>UA</span>
                        </div>
                    </div>
                    : <div id="mobileLangToggle">
                        <span onClick={() => langClicked('en') }>EN</span>
                        <span onClick={() => langClicked('ru') }>RU</span>
                        <span onClick={() => langClicked('uk') }>UA</span>
                </div>}
            </>
            )}
        </PortfolioContext.Consumer>
    );
}

export default LangToggle;
