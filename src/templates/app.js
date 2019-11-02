import React from "react";
import { graphql } from "gatsby"
import "../templates/app.scss";
import MainHero from "../templates/MainHero/MainHero.jsx";
import Header from "../templates/Header/Header.jsx";
import News from "../templates/News/News.jsx";
import Contact from "../templates/Contact/Contact.jsx";
import Portfolio from "../templates/Portfolio/Portfolio.jsx";
import { HashRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import messages_en from "../translations/en.json";
import messages_ru from "../translations/ru.json";
import messages_uk from "../translations/ua.json";

const messages = {
  'en': messages_en,
  'ru': messages_ru,
  'uk': messages_uk
};

export const PortfolioContext = React.createContext();

function getLanguage() {
  if(typeof window === 'undefined')
    return 'en';

  const langNavigator = navigator.language.split(/[-_]/)[0];

  return messages.hasOwnProperty(langNavigator) ? langNavigator : 'en';
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: getLanguage()
    }
    this.langChanged = this.langChanged.bind(this);
  }
  langChanged(lang) {
    this.setState({lang: lang});
  }
  render() {
    const matches = typeof window !== `undefined` ? window.matchMedia("(max-width: 700px)").matches : false;
    return(
      <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}>
        <PortfolioContext.Provider value={matches}>
          <>
          <Header
            lang={this.state.lang}
            langChanged={this.langChanged}
          />
          <main>
            <MainHero lang={this.state.lang} />
            <News lang={this.state.lang} />
            <Portfolio lang={this.state.lang} />
            <Contact lang={this.state.lang} />
          </main>
          </>
        </PortfolioContext.Provider>
      </IntlProvider>
    )
  }
}

export default App
