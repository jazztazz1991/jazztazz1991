import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  default: { id: 'default', label: 'Default', color: '#06b6d4' },
  rs3: { id: 'rs3', label: 'RuneScape 3', color: '#c9a227' },
  satisfactory: { id: 'satisfactory', label: 'Satisfactory', color: '#e8870a' },
  warhammer: { id: 'warhammer', label: 'Warhammer 40k', color: '#c4922a' },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem('portfolio-theme') || 'default'
  );

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    Object.keys(THEMES).forEach((t) => root.classList.remove(`theme-${t}`));
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
