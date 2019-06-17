import React from "react";
import { graphql } from "gatsby"
import "../templates/app.scss";
import MainHero from "../templates/MainHero/MainHero.jsx";
import Header from "../templates/Header/Header.jsx";
import News from "../templates/News/News.jsx";
import Contact from "../templates/Contact/Contact.jsx";
import Portfolio from "../templates/Portfolio/Portfolio.jsx";
import { HashRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";

import messages_en from "../translations/en.json";
import messages_ru from "../translations/ru.json";
import messages_uk from "../translations/ua.json";
import en from 'react-intl/locale-data/en.js';
import ru from 'react-intl/locale-data/ru.js';
import uk from 'react-intl/locale-data/uk.js';

const messages = {
  'en': messages_en,
  'ru': messages_ru,
  'uk': messages_uk
};

addLocaleData([...en, ...ru, ...uk])

export const PortfolioContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: typeof window !== 'undefined' ? navigator.language.split(/[-_]/)[0] : ''
    }
    this.langChanged = this.langChanged.bind(this);
  }
  langChanged(lang) {
    this.setState({lang: lang});
  }
  render() {
    return(
      <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}>
        <PortfolioContext.Provider value={window.matchMedia("(max-width: 700px)").matches}>
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