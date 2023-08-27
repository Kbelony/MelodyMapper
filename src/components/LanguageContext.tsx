import { createContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  switchLanguage: (lang: string) => void;
};
export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("fr");

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const contextValue: LanguageContextType = {
    language,
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
