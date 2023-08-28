import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import back from "../assets/images/Vector.svg";
import down from "../assets/images/Vector-down.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RankingTopArtists = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const history = useNavigate();
  const accessToken = localStorage.getItem("access_token") || "";

  interface ArtistType {
    name: string;
    images: { url: string }[];
    genres: string[];
    popularity: number;
    external_urls: { spotify: string };
    id: string;
  }

  interface Translations {
    [key: string]: {
      slogan: string;
      topArtist: string;
      navigate: string;
      discover: string;
    };
  }

  const translations: Translations = {
    fr: {
      slogan: "Place au <span>stastisques</span> !",
      topArtist: "Classement de vos artistes du moment",
      navigate: "Page précédente",
      discover: "Découvrir des artistes similaires ?",
    },
    en: {
      slogan: "Make way for <span>stastics</span> !",
      topArtist: "Ranking your artists of the moment",
      navigate: "Previous page",
      discover: "Discover similar artists ?",
    },
  };

  const translationKey = language || "en";
  const { slogan, topArtist, navigate, discover } =
    translations[translationKey];

  const topArtists = JSON.parse(localStorage.getItem("top_artist") || "[]");

  const [expandedArtistId, setExpandedArtistId] = useState<string | null>(null);
  const [relatedArtists, setRelatedArtists] = useState<ArtistType[]>([]);

  const handleArtistClick = async (artist: ArtistType) => {
    const relatedArtistsUrl = `https://api.spotify.com/v1/artists/${artist.id}/related-artists`;

    try {
      const response = await axios.get(relatedArtistsUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const relatedArtists = response.data.artists.slice(0, 3);
      setRelatedArtists(relatedArtists);

      setExpandedArtistId(artist.id);
    } catch (error) {
      console.error("Error fetching related artists:", error);
    }
  };

  return (
    <div className="ranking-artists-component">
      <div className="flex flex-col items-center justify-center">
        <div className="container mt-16 md:mt-12 p-0 md:p-9">
          <h4
            className="text-2xl md:text-3xl text-center mb-4 p-3"
            dangerouslySetInnerHTML={{ __html: slogan as string }}
          ></h4>
          <div className="back-button flex mb-6" onClick={() => history(-1)}>
            <img className="mr-2 mt-1" src={back} alt="" />
            <p className="text-sm">{navigate}</p>
          </div>
          <div className="flex justify-center items-center h-screen mb-8">
            <div className="container content-border">
              <div className="top-artist">
                <h3 className="text-center text-lg mb-8 mt-4">{topArtist}</h3>
                <div className="ranking flex flex-col">
                  {topArtists.map((artist: ArtistType, index: number) => (
                    <div className="items flex flex-col mb-4" key={artist.id}>
                      <div className="top-info flex items-center">
                        <h1 className="ml-4 mr-5 mt-4 text-2xl">
                          {index + 1}.
                        </h1>
                        <img src={artist.images[2].url} alt="" />
                        <h1 className="mt-4 ml-4">{artist.name}</h1>{" "}
                        <img
                          className="flex-end ml-auto arrow mr-4"
                          src={down}
                          alt=""
                          onClick={() => {
                            if (expandedArtistId === artist.id) {
                              setExpandedArtistId(null);
                            } else {
                              setExpandedArtistId(artist.id);
                              handleArtistClick(artist);
                            }
                          }}
                        />
                      </div>
                      {expandedArtistId === artist.id && (
                        <div className="related-artists-container">
                          <h6 className="text-center text-xs mt-5">
                            {discover}
                          </h6>
                          <div className="related-artists md:justify-center ml-3.5 flex">
                            {relatedArtists.map((relatedArtist: ArtistType) => (
                              <Link
                                key={relatedArtist.id}
                                to={relatedArtist.external_urls.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="related-artist flex flex-col items-center text-center m-1 p-4 pb-0"
                              >
                                <img
                                  src={relatedArtist.images[0].url}
                                  alt={relatedArtist.name}
                                  className="mb-2"
                                />
                                <h6 className="text-center text-xs mt-2">
                                  {relatedArtist.name}
                                </h6>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
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
