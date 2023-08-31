import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { useNavigate } from "react-router-dom";
import Carousel from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              limit: 15,
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="top-tracks flex flex-col items-center">
      <h3 className="text-center text-lg mb-8 mt-4">{topArtist}</h3>
      <div className="ranking flex">
        <Carousel {...settings}>
          {topTracks.map((track: Track, index: number) => (
            <div className="wrapper" key={track.id}>
              <div className="items flex flex-col mb-6">
                <div className="top-info flex items-center">
                  <img src={track.album.images[0].url} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TracksTop;
