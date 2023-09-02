import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };

  interface Translations {
    [key: string]: {
      about: string;
      privacy: string;
      home: string;
    };
  }

  const translations: Translations = {
    fr: {
      about: "A propos",
      privacy: "Politique de la vie privée",
      home: "Accueil",
    },
    en: {
      about: "About",
      privacy: "Privacy Policy",
      home: "Home",
    },
  };

  const translationKey = language || "en";
  const { about, privacy, home } = translations[translationKey];

  return (
    <div className="footer-component">
      <div className="footer flex flex-col items-center justify-center">
        <div className="container p-0 md:p-9">
          <div className="information md:text-lg flex items-center justify-center">
            <Link to={"/MelodyMapper/"}>
              <p className="ml-2 mr-2"> {home}</p>
            </Link>
            <Link to={"/MelodyMapper/"}>
              <p className="ml-2 mr-2">{about}</p>
            </Link>
            <Link to={"/MelodyMapper/privacy-policy/"}>
              <p className="ml-2 mr-2"> {privacy}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
