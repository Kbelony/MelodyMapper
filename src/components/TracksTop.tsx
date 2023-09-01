import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const TracksTop = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const accessToken = localStorage.getItem("access_token") || "";
  const navigate = useNavigate();
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
              limit: 30,
            },
          }
        );

        setTopTracks(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
        const timer = setTimeout(() => {
          navigate("/MelodyMapper/");
        }, 1500);
        return () => clearTimeout(timer);
      }
    };

    fetchData();
  }, []);

  const settings = {
    slidesPerView: 0, // Affiche autant d'éléments que possible dans la vue
    navigation: false,
  };

  return (
    <div className="top-tracks flex flex-col items-center">
      <h3 className="text-center text-lg mb-8 mt-4">{topArtist}</h3>
      <div className="ranking">
        <Swiper {...settings} className="swiper-container">
          {topTracks.map((track: Track, index: number) => (
            <SwiperSlide key={track.id}>
              <div className="items flex flex-col mb-6">
                <div className="top-info flex-col items-center">
                  <img
                    src={track.album.images[0].url}
                    alt=""
                    style={{ width: "140px", height: "140px" }}
                  />
                  <div className="text-paragraph flex flex-col">
                    <h1 className="mt-1 md:text-xl">
                      {(index + 1).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                      })}
                      .{" "}
                      {track.name
                        ? track.name.length > 16
                          ? track.name.substring(0, 13) + "..."
                          : track.name
                        : "Unknown"}
                    </h1>{" "}
                    <h1 className="mt-1 text-xs artist">
                      {track.artists[0].name}
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TracksTop;
