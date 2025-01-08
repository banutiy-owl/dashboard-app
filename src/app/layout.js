"use client";
import React, { useState, createContext } from "react";
import "./globals.css";

export const LanguageContext = createContext();

const translations = {
  PL: {
    title: "Panel Sprzedawcy",
    salesQuality: "Jakość sprzedaży",
    orders: "Zamówienia",
    all: "Wszystkie",
    previousData: "Wyświetl dane z poprzedniego okresu",
    ranking: "Ranking ofert",
    reviews: "Opinie kupujących",
    salesChart: "Wykres sprzedaży",
    profile: "Profil",
    unpaid: "Nieopłacone",
    unshipped: "Niewysłane",
    returns: "Zwroty",
    worstAspects: "Najgorzej oceniane aspekty",
    shipping: "Wysyłka",
    price: "Cena",
    productQuality: "Jakość produktu",
    score: "Ocena",
    category: "Kategoria",
    client: "Klient",
    comment: "Komentarz"
  },
  EN: {
    title: "Seller's Dashboard",
    salesQuality: "Sales quality",
    orders: "Orders",
    all: "All",
    previousData: "Show data from the previous time period",
    ranking: "Offers ranking",
    reviews: "Customer reviews",
    salesChart: "Sales chart",
    profile: "Profile",
    unpaid: "Unpaid",
    unshipped: "Unshipped",
    returns: "Returns",
    worstAspects: "Worst-rated aspects",
    shipping: "Shipping",
    price: "Price",
    productQuality: "Product quality",
    score: "Score",
    category: "Category",
    client: "Client",
    comment: "Comment"
  },
};

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState("PL");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "PL" ? "EN" : "PL"));

  const t = translations[language];

  return (
    <html lang={language.toLowerCase()} className={theme}>
      <body>
        <LanguageContext.Provider
          value={{ t, language, toggleLanguage, toggleTheme }}
        >
          <header className="header">
            <h1>{t.title}</h1>
            <div className="controls">
              <button onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"} Theme
              </button>
              <button onClick={toggleLanguage}>{language}</button>
            </div>
          </header>
          {children}
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
