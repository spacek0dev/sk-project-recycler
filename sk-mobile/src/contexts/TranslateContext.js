import Dictionary from 'constants/dictionary';
import React from 'react';
import {createContext, useContext, useState} from 'react';

const TranslateContext = createContext();
const UseTranslate = () => {
  const useTranslate = useContext(TranslateContext);
  return {
    translate: useTranslate.translate,
    lang: useTranslate.lang,
    setLang: useTranslate.setLang,
  };
};
const TranslateProvider = props => {
  const [lang, setLang] = useState('es');

  const translate = key => {
    let t = (Dictionary[key] || {})[lang] || key;
    return t;
  };
  return (
    <TranslateContext.Provider value={{translate, lang, setLang}}>
      {props.children}
    </TranslateContext.Provider>
  );
};

export {TranslateProvider, TranslateContext, UseTranslate};
