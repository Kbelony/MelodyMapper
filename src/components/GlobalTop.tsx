import { useEffect, useState } from "react";
import axios from "axios";

const GlobalTop = () => {
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = urlParams.get("access_token");

  localStorage.setItem("access_token", access_token);

  const [topArtist, setTopArtist] = useState(null);

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
        <p>mobile</p>
      </div>
    </div>
  );
};

export default GlobalTop;
