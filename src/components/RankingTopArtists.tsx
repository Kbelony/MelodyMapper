import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import back from "../assets/images/Vector.svg";
import { useNavigate } from "react-router-dom";
import ArtistsTop from "./ArtistsTop";
import TracksTop from "./TracksTop";

const RankingTopArtists = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const history = useNavigate();

  interface Translations {
    [key: string]: {
      navigate: string;
      slogan: string;
    };
  }

  const translations: Translations = {
    fr: {
      navigate: "Page précédente",
      slogan: "Place au <span>stastisques</span> !",
    },
    en: {
      slogan: "Make way for <span>stastics</span> !",
      navigate: "Previous page",
    },
  };

  const translationKey = language || "en";
  const [enabled, setEnabled] = useState(false);
  const { navigate, slogan } = translations[translationKey];

  const showArtistsTop = !enabled;
  const showTracksTop = enabled;

  return (
    <div className="ranking-artists-component">
      <div className="flex flex-col items-center justify-center">
        <div className="container mt-16 md:mt-12 p-0 md:p-9">
          <h4
            className="text-2xl md:text-3xl text-center mb-4 p-3"
            dangerouslySetInnerHTML={{ __html: slogan as string }}
          ></h4>
          <div
            className="back-button flex mb-3 mt-2"
            onClick={() => history(-1)}
          >
            <img className="mr-2 mt-1" src={back} alt="" />
            <p className="text-sm">{navigate}</p>
          </div>
          <div className="toggle-switch">
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
          </div>
          <div className="flex justify-center items-center h-screen mb-8">
            <div className="container content-border">
              {showTracksTop && <TracksTop></TracksTop>}
              {showArtistsTop && <ArtistsTop></ArtistsTop>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTopArtists;
