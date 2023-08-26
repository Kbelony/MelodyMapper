import { useEffect } from "react";
import axios from "axios";

const GlobalTop = () => {
  // Extraire l'access token de l'URL
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const access_token = urlParams.get("access_token");

  // Enregistrer l'access token dans le local storage
  localStorage.setItem("access_token", access_token);
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
            limit: 10,
          },
        });

        console.log("Top Artists:", response.data.items);
      } catch (error) {
        console.error("Error fetching top artists:", error);
      }
    };

    if (accessToken) {
      fetchData();
    }
  }, []);

  return <div>GlobalTop</div>;
};

export default GlobalTop;
