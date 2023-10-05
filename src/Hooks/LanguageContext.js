import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("ES"); // Predeterminado a español

  const toggleLanguage = () => {
    setUserLanguage((prevLanguage) => (prevLanguage === "EN" ? "ES" : "EN"));
  };

  const translateText = (enText, esText) => {
    return userLanguage === "EN" ? enText : esText;
  };

  const contextValue = {
    userLanguage,
    toggleLanguage,
    translateText, // Agregar la función de traducción al contexto
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
