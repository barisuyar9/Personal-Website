import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Varsayılan olarak dark mode
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    // Local storage'dan tema tercihini al
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
    if (savedLanguage) {
      setIsEnglish(savedLanguage === 'en');
    }
  }, []);

  useEffect(() => {
    // Tema değişikliğinde document class'ını güncelle
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Local storage'a kaydet
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('language', isEnglish ? 'en' : 'tr');
  }, [isDark, isEnglish]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => setIsEnglish(!isEnglish);

  const value = {
    isDark,
    isEnglish,
    toggleTheme,
    toggleLanguage
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
