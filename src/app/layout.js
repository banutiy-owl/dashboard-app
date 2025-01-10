"use client";
import React, { useState, useEffect, createContext, useRef } from "react";
import "./globals.css";

export const LanguageContext = createContext();

const translations = {
  PL: {
    lightTheme: "Tryb jasny",
    darkTheme: "Tryb ciemny",
    title: "Panel Sprzedawcy",
    salesQuality: "Jakość sprzedaży",
    orders: "Zamówienia",
    widgetAdvice: "Porada sprzedażowa",
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
    comment: "Komentarz",
    filterReviews: "Filtruj opinie",
    filterPositive: "Pozytywne (≥ 3)",
    filterNegative: "Negatywne (< 3)",
    sortOffers: "Sortuj oferty",
    name: "Nazwa",
    photo: "Zdjęcie",
    soldItems: "Liczba sprzedanych sztuk",
    turnover: "Obrót",
    sortMostFreqPurchased: "Najczęściej kupowane",
    sortLeastFreqPurchased: "Najrzadziej kupowane",
    chartMeasure: "Miara sprzedaży",
    chartTimePeriod: "Zakres czasu",
    chartPresentationMethod: "Sposób prezentacji",
    today: "Dziś",
    week: "Obecny tydzień",
    month: "Obecny miesiąc",
    barChart: "Wykres słupkowy",
    lineChart: "Wykres kolumnowy",
  },
  EN: {
    lightTheme: "Light theme",
    darkTheme: "Dark theme",
    title: "Seller's Dashboard",
    salesQuality: "Sales quality",
    orders: "Orders",
    widgetAdvice: "Sales advice",
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
    comment: "Comment",
    filterReviews: "Filtruj opinie",
    filterPositive: "Positive (≥ 3)",
    filterNegative: "Negative (< 3)",
    sortOffers: "Sortuj oferty",
    name: "Name",
    photo: "Photo",
    soldItems: "No. sold items",
    turnover: "Turnover",
    sortMostFreqPurchased: "Most frequently purchased",
    sortLeastFreqPurchased: "Least frequently purchased",
    chartMeasure: "Sales measure",
    chartTimePeriod: "Time period",
    chartPresentationMethod: "Presentaion method",
    today: "Today",
    week: "Current wekk",
    month: "Current month",
    barChart: "Bar chart",
    lineChart: "Line chart",
  },
};

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState("PL");
  const [theme, setTheme] = useState("light");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const accounts = ["Account 1", "Account 2", "Account 3"];
  const [currentAccount, setCurrentAccount] = useState("Account 1");
  const dropdownRef = useRef(null);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "PL" ? "EN" : "PL"));

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleAccountChange = (account) => {
    setCurrentAccount(account);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    console.log("Log out");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const t = translations[language];

  return (
    <html lang={language.toLowerCase()} className={theme}>
      <body>
        <LanguageContext.Provider
          value={{ t, language, toggleLanguage, toggleTheme }}
        >
          <header className="header">
            <h1 className="header-title">{t.title}</h1>
            <div className="controls">
              <button onClick={toggleTheme}>
                {theme === "light" ? t.darkTheme : t.lightTheme}
              </button>
              <button onClick={toggleLanguage}>
                {language === "PL" ? "EN" : "PL"}
              </button>
              <div className="dropdown" ref={dropdownRef}>
                <button
                  onClick={handleDropdownToggle}
                  className="dropdown-toggle"
                >
                  {currentAccount} ▼
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    {accounts.map((account, index) => (
                      <li
                        key={index}
                        onClick={() => handleAccountChange(account)}
                      >
                        {account}
                      </li>
                    ))}
                    <li className="logout" onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </header>
          {children}
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
