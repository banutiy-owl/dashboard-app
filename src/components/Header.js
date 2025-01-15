import React, { useContext, useRef, useState, useEffect } from "react";
import { LanguageContext } from "@/app/layout";

const Header = () => {
  const { t, language, toggleLanguage, toggleTheme, currentAccount, changeAccount } =
    useContext(LanguageContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const accounts = ["Kasia", "Weronika"];
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleAccountChange = (account) => {
    changeAccount(account);
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

  return (
    <header className="header">
      <h1 className="header-title">{t.title}</h1>
      <div className="controls">
        <button onClick={toggleTheme}>
          {language === "light" ? t.darkTheme : t.lightTheme}
        </button>
        <button onClick={toggleLanguage}>
          {language === "PL" ? "EN" : "PL"}
        </button>
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={handleDropdownToggle} className="dropdown-toggle">
            {currentAccount} ▼
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {accounts.map((account, index) => (
                <li key={index} onClick={() => handleAccountChange(account)}>
                  {account}
                </li>
              ))}
              <li className="logout" onClick={handleLogout}>
                {t.logout}
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
