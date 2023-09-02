import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import axios from "axios";
import spotifyLogo from "../assets/images/spotify.svg";
import TracksTop from "./TracksTop";
import CountriesTop from "./CountriesTop";
import ArtistsTop from "./ArtistsTop";
import back from "../assets/images/Vector.svg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const MoreStats = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  const history = useNavigate();

  interface Playing {
    item: {
      artists: { name: string }[];
      name: string;
      album: {
        images: { url: string }[];
        name: string;
      };
    };
    name: string;
  }

  interface Profil {
    display_name: string;
    country: string;
    images: { url: string }[];
    external_urls: {
      spotify: string;
    };
  }

  interface Translations {
    [key: string]: {
      slogan: string;
      profile: string;
      listening: string;
      navigate: string;
    };
  }

  const translations: Translations = {
    fr: {
      slogan: "Place au <span>stastisques</span> !",
      profile: "Profil",
      listening: "Vous écoutez actuellement :",
      navigate: "Page précédente",
    },
    en: {
      slogan: "Make way for <span>stastics</span> !",
      profile: "Profile",
      listening: "You are currently listening to :",
      navigate: "Previous page",
    },
  };

  const translationKey = language || "en";
  const { slogan, profile, listening, navigate } = translations[translationKey];
  const [nowPlaying, setNowPlaying] = useState<Playing | null>(null);
  const [userProfile, setUserProfile] = useState<Profil | null>(null);
  const [showNowPlaying, setShowNowPlaying] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token") || "";
    const apiUrl = "https://api.spotify.com/v1/me/player";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log("Now playing:", response.data);
        if (response.data) {
          setNowPlaying(response.data);
          setShowNowPlaying(true);

          const timer = setTimeout(() => {
            setShowNowPlaying(false);
          }, 6000);

          // Nettoie le timer lorsque le composant est démonté
          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error("Error fetching now playing:", error);
      }
    };

    // Démarrez fetchData immédiatement
    fetchData();

    // Planifiez fetchData pour s'exécuter toutes les 90 secondes (1 minute et 30 secondes)
    const intervalId = setInterval(() => {
      fetchData();
    }, 90 * 1000); // 90 secondes en millisecondes

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token") || "";
    const apiUrl = "https://api.spotify.com/v1/me";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log("User Info:", response.data);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching now playing:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="more-stats-component">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="container mb-5 mt-16 md:mt-12 p-0 md:p-9">
          <h4
            className="text-2xl md:text-3xl text-center mb-4 p-3"
            dangerouslySetInnerHTML={{ __html: slogan as string }}
          ></h4>
          <div
            className="back-button flex mb-3 mt-8"
            onClick={() => history(-1)}
          >
            <img className="mr-2 mt-1" src={back} alt="" />
            <p className="text-sm">{navigate}</p>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="meta-profile flex flex-col md:flex-row md:items-center">
                <img
                  className="w-40 mx-auto md:mx-0"
                  src={userProfile?.images[1].url}
                  alt=""
                />
                <div className="md:ml-9 mt-4 md:mt-9 mx-auto md:mx-0 md:text-left text-center">
                  <h2>{userProfile?.country}</h2>
                  <h2>{userProfile?.display_name}</h2>

                  <a href={userProfile?.external_urls?.spotify}>
                    <span className="spotify-button p-4 w-44 md:mt-2 mt-3 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
                      <img
                        className="w-8 mr-1 ml-0 md:ml-3"
                        src={spotifyLogo}
                        alt="Spotify Logo"
                      />
                      {profile}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {nowPlaying && (
              <div
                className={`md:w-1/2 now-playing flex flex-col py-3.5 ${
                  showNowPlaying ? "visible" : ""
                }`}
              >
                <div className="text-center mb-3 text-xl">{listening}</div>
                <div className="flex items-center player ml-4 md:ml-0 md:w-full w-96 p-5">
                  <img
                    className="mr-4"
                    src={nowPlaying?.item?.album?.images[0].url}
                    alt=""
                  />
                  <div className="meta justify-center mr-2 text-sm">
                    <div className="uppercase">{nowPlaying?.item?.name}</div>
                    <div>{nowPlaying?.item?.album?.name}</div>
                    <div className="artist">
                      {nowPlaying?.item?.artists[0].name}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex justify-center">
            <TracksTop></TracksTop>
          </div>
          <div className="w-full flex justify-start">
            <CountriesTop></CountriesTop>
          </div>
          <div className="w-full flex justify-start">
            <ArtistsTop></ArtistsTop>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MoreStats;
