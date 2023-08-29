import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

import axios from "axios";

const TracksTop = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const accessToken = localStorage.getItem("access_token") || "";

  interface Track {
    id: string;
    artists: { name: string }[];
    album: {
      images: {
        url: string;
      }[];
    };
    name: string;
  }

  interface Translations {
    [key: string]: {
      topArtist: string;
    };
  }

  const translations: Translations = {
    fr: {
      topArtist: "Classement de vos titres du moment",
    },
    en: {
      topArtist: "Ranking your tracks of the moment",
    },
  };

  const translationKey = language || "en";
  const { topArtist } = translations[translationKey];
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/top/tracks",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              time_range: "medium_term",
              limit: 15,
            },
          }
        );

        setTopTracks(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="top-tracks">
      <h3 className="text-center text-lg mb-8 mt-4">{topArtist}</h3>
      <div className="ranking flex flex-col">
        {topTracks.map((track: Track, index: number) => (
          <div className="items flex flex-col mb-6" key={track.id}>
            <div className="top-info flex items-center">
              <h1 className="ml-4 mr-5 mt-4 text-2xl">
                {(index + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })}
                .
              </h1>
              <img src={track.album.images[0].url} alt="" />
              <div className="text-paragraph flex flex-col">
                <h1 className="mt-1 ml-4 md:text-xl">{track.name}</h1>{" "}
                <h1 className="mt-1 ml-4 text-xs">{track.artists[0].name}</h1>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksTop;
