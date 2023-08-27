import { createContext, useState, ReactNode, useEffect } from "react";

type LanguageContextType = {
  language: string;
  switchLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "fr";
  });

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

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
