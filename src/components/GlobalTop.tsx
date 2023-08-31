import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import axios from "axios";

const GlobalTop = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = urlParams.get("access_token") ?? "";
  localStorage.setItem("access_token", access_token);
  const { language } = useContext(LanguageContext) || { language: "en" };

  interface Artist {
    name: string;
    images: { url: string }[];
    genres: string[];
    popularity: number;
    external_urls: { spotify: string }; // Modifié pour être un objet
    id: string;
  }

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

  interface Translations {
    [key: string]: {
      statsSlogan: string;
      artistStat: string;
      genreStat: string;
      discover: string;
      moreButton: string;
      popularity1: string;
      popularity2: string;
    };
  }

  const translations: Translations = {
    fr: {
      statsSlogan: "Place au <span>stastisques</span> !",
      artistStat: "🎙️ Artiste du moment",
      genreStat: "📝 Genre du moment",
      discover: "Découvrir des artistes similaires ?",
      moreButton: "+ de stastisques",
      popularity1: "Vous êtes dans le top ",
      popularity2: "des auditeurs de",
    },
    en: {
      statsSlogan: "Make way for <span>stastics</span> !",
      artistStat: "🎙️ Artist of the moment",
      genreStat: "📝 Genre of the moment",
      discover: "Discover similar artists?",
      moreButton: "+ more statistics",
      popularity1: "You're in the top ",
      popularity2: "auditors of",
    },
  };

  const translationKey = language || "en";
  const {
    statsSlogan,
    artistStat,
    genreStat,
    discover,
    moreButton,
    popularity1,
    popularity2,
  } = translations[translationKey];
  const [topArtist, setTopArtist] = useState<Artist | null>(null);
  const [nowPlaying, setNowPlaying] = useState<Playing | null>(null);
  const [showNowPlaying, setShowNowPlaying] = useState(false);
  const [relatedArtists, setRelatedArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token") || "";
    const apiUrl = "https://api.spotify.com/v1/me/top/artists";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            time_range: "medium_term",
            limit: 15,
          },
        });

        console.log("Top Artists:", response.data.items);
        localStorage.setItem("top_artist", JSON.stringify(response.data.items));
        setTopArtist(response.data.items[1]); // Set the first artist from the response
      } catch (error) {
        console.error("Error fetching top artists:", error);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, []);

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

    fetchData();
  }, []);

  useEffect(() => {
    if (topArtist) {
      const artistId = topArtist.id;
      const relatedArtistsUrl = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;

      const fetchRelatedArtists = async () => {
        try {
          const response = await axios.get(relatedArtistsUrl, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });

          console.log("Related Artists:", response.data.artists);
          setRelatedArtists(response.data.artists);
        } catch (error) {
          console.error("Error fetching related artists:", error);
        }
      };

      fetchRelatedArtists();
    }
  }, [topArtist, access_token]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!topArtist?.name) {
        navigate("/MelodyMapper/");
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [topArtist]);

  return (
    <div className="global-component">
      <div className="desktop-part">
        <div className="mt-20 flex">
          <div className="stats-part p-9 mt-24 flex-grow">
            <h4
              className="text-4xl mb-9"
              dangerouslySetInnerHTML={{ __html: statsSlogan as string }}
            ></h4>
            <div className="meta p-2">
              <h4 className="text-3xl mb-7">
                {artistStat} : {topArtist?.name ?? "Unknown Artist"}
              </h4>
              <h4 className="text-3xl mb-7">
                {genreStat} : {topArtist?.genres[0] ?? "Unknown genre"}
              </h4>
              <h6 className="text-center text-lg mb-6">
                {popularity1}
                <span>
                  {topArtist?.popularity ?? "Unknown Popularity"}%
                </span>{" "}
                {popularity2} {topArtist?.name ?? "Unknown Artist"} 👏
              </h6>
              <h6 className="text-center text-lg mb-8 ">{discover}</h6>
              <div className="related-artists mb-5 mr-11">
                <div className="related-artists">
                  {relatedArtists.slice(0, 3).map((artist) => (
                    <Link
                      key={artist.id}
                      to={artist.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={artist.images[0].url} alt={artist.name} />
                      <h6 className="text-center mt-3">{artist.name}</h6>
                    </Link>
                  ))}
                </div>
              </div>
              <Link to={"/MelodyMapper/more-stats/"}>
                <span className="more-button text-center mt-4 p-4 w-4 <a href4 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
                  {moreButton}
                </span>
              </Link>
            </div>
          </div>
          <div className="image-part relative">
            <img src={topArtist?.images[0]?.url} alt="" />
            <div className="shadow-overlay"></div>
          </div>
        </div>
      </div>
      <div
        className="mobile-part"
        style={{
          backgroundImage: topArtist ? `url(${topArtist.images[0].url})` : "",
        }}
      >
        <div
          className={`now-playing flex py-3.5 ${
            showNowPlaying ? "visible" : ""
          }`}
        >
          <img
            className=""
            src={nowPlaying?.item?.album?.images[0].url}
            alt=""
          />
          <div className="meta justify-center ml-3 mr-2 text-xs">
            <div className="uppercase">
              {nowPlaying?.item?.name
                ? nowPlaying.item.name.length > 10
                  ? nowPlaying.item.name.substring(0, 15) + "..."
                  : nowPlaying.item.name
                : "Unknown"}
            </div>
            <div>
              {nowPlaying?.item?.album?.name
                ? nowPlaying.item.album.name.length > 10
                  ? nowPlaying.item.album.name.substring(0, 20)
                  : nowPlaying.item.album.name
                : "Unknown"}
            </div>
            <div className="artist">{nowPlaying?.item?.artists[0].name}</div>
          </div>
          <div className="loader flex justify-end">
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
          </div>
        </div>
        <div className="text-wrapper-container">
          <div className="shadow"></div>
          <div className="text-wrapper mt-24">
            {Array.from({ length: 4 }).map((_, index) => (
              <h2 key={index}>{topArtist?.name ?? "Unknown Artist"}</h2>
            ))}
          </div>
          <div className="text-wrapper">
            {Array.from({ length: 4 }).map((_, index) => (
              <h2 key={index}>{topArtist?.name ?? "Unknown Artist"}</h2>
            ))}
          </div>
          <div className="text-wrapper op-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <h2
                key={index}
                style={index === 0 ? { fontFamily: "Habanera" } : {}}
              >
                {topArtist?.name ?? "Unknown Artist"}
              </h2>
            ))}
          </div>
          <div className="text-wrapper op-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <h2 key={index}>{topArtist?.name ?? "Unknown Artist"}</h2>
            ))}
          </div>
          <div className="text-wrapper op-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <h2 key={index}>{topArtist?.name ?? "Unknown Artist"}</h2>
            ))}
          </div>
          <div className="meta p-2">
            <h4 className="text-2xl mb-3">
              {artistStat} : {topArtist?.name ?? "Unknown Artist"}
            </h4>
            <h4 className="text-2xl mb-4">
              {genreStat} : {topArtist?.genres[0] ?? "Unknown genre"}
            </h4>
            <h6 className="text-center text-lg">
              {popularity1}
              <span>{topArtist?.popularity ?? "Unknown Popularity"}%</span>{" "}
              {popularity2} {topArtist?.name ?? "Unknown Artist"} 👏
            </h6>
            <Link to={"/MelodyMapper/more-stats/"}>
              <span className="more-button text-center mt-4 p-4 w-4 <a href4 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
                {moreButton}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTop;
