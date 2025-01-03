"use client";
import React, { useState, createContext } from "react";
import "./globals.css";

export const LanguageContext = createContext();

const translations = {
  PL: {
    title: "Panel Sprzedawcy",
    salesQuality: "Jakość Sprzedaży",
    orders: "Zamówienia",
    all: "All",
    previousData: "Poprzednie dane",
    ranking: "Ranking Ofert",
    reviews: "Opinie Kupujących",
    salesChart: "Wykres Sprzedaży",
    profile: "Profil",
    unpaid: "Nieopłacone",
    unshipped: "Nie Wysłane",
    returns: "Zwroty",
    worstAspects: "Najgorzej Oceniane Aspekty",
    shipping: "Wysyłka",
    price: "Cena",
    productQuality: "Jakość Produktu",
    score: "Ocena",
    category: "Kategoria",
    client: "Klient",
    comment: "Komentarz"
  },
  EN: {
    title: "Seller Dashboard",
    salesQuality: "Sales Quality",
    orders: "Orders",
    all: "Wszystkie",
    previousData: "Previous data",
    ranking: "Offer Ranking",
    reviews: "Customer Reviews",
    salesChart: "Sales Chart",
    profile: "Profile",
    unpaid: "Unpaid",
    unshipped: "Unshipped",
    returns: "Returns",
    worstAspects: "Worst-rated Aspects",
    shipping: "Shipping",
    price: "Price",
    productQuality: "Product Quality",
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
