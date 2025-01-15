"use client";
import React, { useState, createContext } from "react";

import translations from "@/utils/translations";
import "./globals.css";

export const LanguageContext = createContext();

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState("PL");
  const [theme, setTheme] = useState("light");
  const [currentAccount, setCurrentAccount] = useState("Kasia");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "PL" ? "EN" : "PL"));

  const changeAccount = (account) => {
    setCurrentAccount(account);
  };

  const t = translations[language];

  return (
    <html lang={language.toLowerCase()} className={theme}>
      <body>
        <LanguageContext.Provider
          value={{
            t,
            language,
            toggleLanguage,
            toggleTheme,
            currentAccount,
            changeAccount,
          }}
        >
          {children}
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
