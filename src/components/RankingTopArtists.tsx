import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import back from "../assets/images/Vector.svg";
import { useNavigate } from "react-router-dom";

const RankingTopArtists = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const history = useNavigate();

  interface ArtistType {
    name: string;
    images: { url: string }[];
    genres: string[];
    popularity: number;
    external_urls: { spotify: string }; // Modifié pour être un objet
    id: string;
  }

  interface Translations {
    [key: string]: {
      slogan: string;
      topArtist: string;
      navigate: string;
    };
  }

  const translations: Translations = {
    fr: {
      slogan: "Place au <span>stastisques</span> !",
      topArtist: "Classement de vos artistes du moment",
      navigate: "Page précedente",
    },
    en: {
      slogan: "Make way for <span>stastisques</span> !",
      topArtist: "Ranking your artists of the moment",
      navigate: "Previous page",
    },
  };

  const translationKey = language || "en";
  const { slogan, topArtist, navigate } = translations[translationKey];

  const topArtists = JSON.parse(localStorage.getItem("top_artist") ?? "[]");
  const firstArtist = topArtists.slice(0, 1)[0];
  const secondArtist = topArtists.slice(1, 2)[0];
  const thirdArtist = topArtists.slice(2, 3)[0];

  return (
    <div className="ranking-artists-component">
      <div className="flex flex-col items-center justify-center">
        <div className="container mt-16 md:mt-12 p-0 md:p-9">
          <h4
            className="text-2xl md:text-3xl text-center mb-4 p-3"
            dangerouslySetInnerHTML={{ __html: slogan as string }}
          ></h4>
          <div className="back-button flex" onClick={() => history(-1)}>
            <img className="mr-2 mt-1" src={back} alt="" />
            <p className="text-sm">{navigate}</p>
          </div>
          <div className="flex justify-center items-center h-screen mb-8">
            <div className="container content-border">
              <div className="top-artist">
                <h3 className="text-center text-lg mb-8 mt-4">{topArtist}</h3>
                <div className="ranking flex flex-col">
                  <div className="items flex mb-4">
                    <h1 className="ml-4 mr-2 mt-4 text-2xl">🥇.</h1>
                    <img src={firstArtist.images[0].url} alt="" />
                    <h1 className="mt-4 ml-4" key={firstArtist.id}>
                      {firstArtist.name}
                    </h1>{" "}
                  </div>
                  <div className="items flex mb-4">
                    <h1 className="ml-4 mr-2 mt-4 text-2xl">🥈.</h1>
                    <img src={secondArtist.images[0].url} alt="" />
                    <h1 className="mt-4 ml-4" key={secondArtist.id}>
                      {secondArtist.name}
                    </h1>{" "}
                  </div>
                  <div className="items flex mb-4">
                    <h1 className="ml-4 mr-2 mt-4 text-2xl">🥉.</h1>
                    <img src={thirdArtist.images[0].url} alt="" />
                    <h1 className="mt-4 ml-4" key={thirdArtist.id}>
                      {thirdArtist.name}
                    </h1>{" "}
                  </div>
                  {topArtists
                    .slice(3)
                    .map((artist: ArtistType, index: number) => (
                      <div className="items flex mb-4">
                        <h1 className="ml-6 mr-5 mt-4 text-2x">{index + 4}.</h1>
                        <img src={artist.images[0].url} alt="" />
                        <h1 className="mt-4 ml-4" key={artist.id}>
                          {artist.name}
                        </h1>{" "}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTopArtists;
