import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Footer from "./Footer";
import back from "../assets/images/Vector.svg";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const history = useNavigate();

  interface Translations {
    [key: string]: {
      slogan: string;
      description: string;
      navigate: string;
    };
  }

  const translations: Translations = {
    fr: {
      slogan: "Politique de la vie privée",
      navigate: "Page précédente",
      description:
        "MelodyMapper a été conçu comme une application open-source, exploitant la puissance de l'API Web de Spotify/Last.fm/Apple Music. En choisissant d'utiliser cette application, vous consentez à l'utilisation des détails et données de votre compte Spotify pour retrouver vos meilleurs artistes et titres.</br></br> Soyez assuré qu'aucune des informations utilisées par MelodyMapper n'est stockée ou rassemblée où que ce soit, et qu'elles ne sont PAS partagées avec des parties externes. Toutes les données sont utilisées uniquement dans le but de présenter votre MelodyMapper</br></br>Bien que vous puissiez être assuré que <a href={‘http://www.spotify.com/account/apps/?_ga=2.57194153.2059435232.1677244602-1044990631.1616788427’ }>vos données </a> ne sont pas stockées ou utilisées de manière malveillante, si vous souhaitez révoquer les autorisations de MelodyMapper, vous pouvez visiter la page de vos applications et cliquer sur 'REMOVE ACCESS' sur MelodyMapper. <a href={‘https://support.spotify.com/us/article/spotify-on-other-apps/’ }>Voici un guide plus détaillé pour ce faire. </a> ",
    },
    en: {
      slogan: "Privacy Policy",
      navigate: "Previous page",
      description:
        "MelodyMapper has been crafted as an open-source application, harnessing the power of the Spotify/Last.fm/Apple Music Web API. By opting to use this application, you consent to the utilization of your Spotify account details and data to retrieve your top artists and tracks.</br></br>Rest assured that none of the information utilized by MelodyMapper is stored or gathered anywhere, and it is NOT shared with any external parties. All data is employed solely for the purpose of presenting your MelodyMapper</br></br> Although you can rest assured that <a href={http://www.spotify.com/account/apps/ }>your data </a> is not being stored or used maliciously, if you would like to revoke MelodyMapper permissions, you can visit your apps page and click 'REMOVE ACCESS' on MelodyMapper. <a href={‘https://support.spotify.com/us/article/spotify-on-other-apps/’ }>Here </a> is a more detailed guide for doing so.",
    },
  };

  const translationKey = language || "en";
  const { slogan, description, navigate } = translations[translationKey];

  return (
    <div className="privacy-policy-component">
      <div className="flex flex-col items-center justify-center">
        <div className="container mt-16 md:mt-10 p-0 md:p-9">
          <div
            className="back-button flex mb-3 mt-8"
            onClick={() => history(-1)}
          >
            <img className="mr-2 mt-1" src={back} alt="" />
            <p className="text-sm">{navigate}</p>
          </div>
          <h4
            className="text-2xl md:text-3xl text-center mb-4 p-3"
            dangerouslySetInnerHTML={{ __html: slogan as string }}
          ></h4>
          <p
            className="text-base md:text-2xl md:p-8 text-center mb-8 p-4"
            dangerouslySetInnerHTML={{ __html: description as string }}
          ></p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
