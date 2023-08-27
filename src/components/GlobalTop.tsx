import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const GlobalTop = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = urlParams.get("access_token") ?? "";
  localStorage.setItem("access_token", access_token);

  interface Artist {
    name: string;
    images: { url: string }[];
    genres: string[];
    popularity: number;
    external_urls: { spotify: string }; // Modifié pour être un objet
    id: string;
  }

  const [topArtist, setTopArtist] = useState<Artist | null>(null);
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
            <h4 className="text-4xl mb-9">
              Place au <span>stastisques</span> !
            </h4>
            <div className="meta p-2">
              <h4 className="text-3xl mb-7">
                🎙️ Artiste du moment : {topArtist?.name ?? "Unknown Artist"}
              </h4>
              <h4 className="text-3xl mb-7">
                📝 Genre du moment : {topArtist?.genres[0] ?? "Unknown genre"}
              </h4>
              <h6 className="text-center text-lg mb-6">
                Vous êtes dans le top{" "}
                <span>{topArtist?.popularity ?? "Unknown Popularity"}%</span>{" "}
                des auditeurs de {topArtist?.name ?? "Unknown Artist"} 👏
              </h6>
              <h6 className="text-center text-lg mb-8 ">
                Découvrir des artistes similaires ?
              </h6>
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
              <span className="more-button text-center mt-4 p-4 w-4 <a href4 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
                + de statistiques
              </span>
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
              🎙️ Artiste du moment : {topArtist?.name ?? "Unknown Artist"}
            </h4>
            <h4 className="text-2xl mb-4">
              📝 Genre du moment : {topArtist?.genres[0] ?? "Unknown genre"}
            </h4>
            <h6 className="text-center text-lg">
              Vous êtes dans le top{" "}
              <span>{topArtist?.popularity ?? "Unknown Popularity"}%</span> des
              auditeurs de {topArtist?.name ?? "Unknown Artist"} 👏
            </h6>
            <span className="more-button text-center mt-4 p-4 w-4 <a href4 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
              + de statistiques
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTop;
