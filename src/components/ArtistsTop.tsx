import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import down from "../assets/images/Vector-down.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const ArtistsTop = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
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
      topArtist: string;
      discover: string;
    };
  }

  const translations: Translations = {
    fr: {
      topArtist: "Classement de vos artistes du moment",
      discover: "Découvrir des artistes similaires ?",
    },
    en: {
      topArtist: "Ranking your artists of the moment",
      discover: "Discover similar artists ?",
    },
  };

  const translationKey = language || "en";
  const { topArtist, discover } = translations[translationKey];

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
    <div className="top-artist flex flex-col items-center  md:items-start w-full">
      <h3 className="text-left text-lg mb-8 mt-4">{topArtist}</h3>
      <div className="ranking flex flex-col">
        {topArtists.map((artist: ArtistType, index: number) => (
          <div className="items py-3 flex flex-col mb-6" key={artist.id}>
            <div className="top-info flex items-center">
              <h1 className="ml-4 mr-5 mt-4 text-2xl">
                {(index + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })}
                .
              </h1>
              <img src={artist.images[2].url} alt="" />
              <h1 className="mt-4 ml-4 md:text-lg">{artist.name}</h1>{" "}
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
                <h6 className="text-left text-xs md:text-sm mt-5 md:ml-20 ml-9">
                  {discover}
                </h6>
                <div className="related-artists md:justify-start ml-3.5 md:ml-11 flex">
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
  );
};

export default ArtistsTop;
