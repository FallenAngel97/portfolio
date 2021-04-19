import React, { useMemo, useState } from "react";
import "./app.scss";
import MainHero from "../templates/MainHero/MainHero.jsx";
import Header from "../templates/Header/Header.jsx";
import News from "../templates/News/News.jsx";
import Contact from "../templates/Contact/Contact.jsx";
import Portfolio from "../templates/Portfolio/Portfolio.jsx";
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

/**
 * @returns {string} language of the browser
 */
function getLanguage() {
  if(typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'en';
  }

  const [langNavigator] = navigator.language.split(/[-_]/);

  return Reflect.apply(Object.prototype.hasOwnProperty, messages, langNavigator) ? langNavigator : 'en';
}

const App = () => {
  const [lang, setLang] = useState(getLanguage());

  const langChanged = (_lang) => {
    setLang(_lang);
  }

  const matches = useMemo(
    () => (typeof navigator === `undefined` ? false : window.matchMedia("(max-width: 700px)").matches),
    []
  );

    return(
      <IntlProvider locale={lang} messages={messages[lang]}>
        <PortfolioContext.Provider value={matches}>
          <>
            <Header
              lang={lang}
              langChanged={langChanged}
            />
            <main>
              <MainHero lang={lang} />
              <News lang={lang} />
              <Portfolio lang={lang} />
              <Contact lang={lang} />
            </main>
          </>
        </PortfolioContext.Provider>
      </IntlProvider>
    )
}

export default App
