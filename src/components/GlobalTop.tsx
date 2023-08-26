import { useEffect, useState } from "react";
import axios from "axios";

const GlobalTop = () => {
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = urlParams.get("access_token") ?? "";
  localStorage.setItem("access_token", access_token);

  interface Artist {
    name: string;
    images: { url: string }[];
    genres: string[];
    // Ajoutez d'autres propriétés si nécessaire
  }

  const [topArtist, setTopArtist] = useState<Artist | null>(null);

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
        setTopArtist(response.data.items[0]); // Set the first artist from the response
      } catch (error) {
        console.error("Error fetching top artists:", error);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, []);

  return (
    <div className="global-component">
      <div className="desktop-part">
        <p>desktop</p>
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
              <span>{Math.floor(Math.random() * (95 - 85 + 1) + 85)}%</span> des
              auditeurs de {topArtist?.name ?? "Unknown Artist"} 👏
            </h6>
            <span className="more-button text-center mt-9 p-4 w-4 <a href4 rounded-2xl grid grid-cols-1 justify-items-center mb-9">
              + de statistique
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTop;
