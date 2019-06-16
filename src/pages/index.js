import React from "react";
import { graphql } from "gatsby"
import "../components/app.scss";
import MainHero from "../components/MainHero/MainHero.jsx";
import Header from "../components/Header/Header.jsx";
import News from "../components/News/News.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: navigator.language.split(/[-_]/)[0]
    }
    this.langChanged = this.langChanged.bind(this);
  }
  langChanged(lang) {
    this.setState({lang: lang});
  }
  render() {
    return(
      <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}>
        <HashRouter>
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
        </HashRouter>
      </IntlProvider>
    )
  }
}

export default App


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
