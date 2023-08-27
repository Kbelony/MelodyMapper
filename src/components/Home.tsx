import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import spotifyLogo from "../assets/images/spotify.svg";

const Home = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };

  interface Translations {
    [key: string]: {
      slogan: string;
      description: string;
      connexion: string;
    };
  }

  const translations: Translations = {
    fr: {
      slogan: "La <span>bande-son</span> mondiale de vos favoris.",
      description:
        "Découvrez la tapisserie harmonieuse du monde avec MelodyMapper. Attribuez des villes à vos 10 morceaux Spotify préférés et observez votre voyage musical dévoiler des mélodies qui résonnent dans différents paysages urbains. MelodyMapper n'est pas encore disponible pour tout le monde, mais cela ne saurait tarder. Soyez le premier à être informé de son lancement en vous inscrivant sur notre liste d'attente.",
      connexion: "Connexion Spotify",
    },
    en: {
      slogan: "The <span>global soundtrack</span> of your favorites.",
      description:
        "Discover the harmonious tapestry of the world with MelodyMapper. Assign cities to your top 10 Spotify tracks and watch your musical journey unfold with melodies that resonate in different urban landscapes. MelodyMapper is not yet available to everyone, but it won't be long. Be the first to be notified of its launch by signing up for our waiting list.",
      connexion: "Spotify Login",
    },
  };

  const translationKey = language || "en";
  const { slogan, description, connexion } = translations[translationKey];

  const clientId = "c6f079fb0ae4482584d715aaafe5efb1";
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const redirectUrl = "https://kbelony.github.io/MelodyMapper/global-top/";
  const responseType = "token";
  const scope = "user-top-read";

  const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope}`;

  return (
    <div className="home-component">
      <div className="flex flex-col items-center justify-center">
        <div className="container mt-16 md:mt-28 p-0 md:p-9">
          <h4
            className="text-3xl md:text-5xl text-center mb-4 p-3"
            dangerouslySetInnerHTML={{ __html: slogan as string }}
          ></h4>
          <p className="text-lg md:text-4xl md:p-8 text-center mb-8 p-4">
            {description}
          </p>
          <a href={authUrl}>
            <span className="spotify-button p-4 w-44 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
              <img
                className="w-8 mr-1 ml-0 md:ml-6"
                src={spotifyLogo}
                alt="Spotify Logo"
              />
              {connexion}
            </span>
          </a>
          <div className="information md:text-lg flex flex-col items-center justify-center">
            <p> Home | About | Privacy Policy | Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
