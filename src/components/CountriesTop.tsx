import { useState } from "react";
import leftArrow from "../assets/images/left-arrow.svg";

const CountriesTop = () => {
  const genreCountryMapping = [
    { genre: "pop", country: "🇺🇸 USA" },
    { genre: "rap", country: "🇺🇸 USA" },
    { genre: "rock", country: "🇺🇸 USA" },
    { genre: "hip hop", country: "🇺🇸 USA" },
    { genre: "urbano latino", country: "🇺🇸 USA" },
    { genre: "trap latino", country: "🇺🇸 USA" },
    { genre: "dance pop", country: "🇺🇸 USA" },
    { genre: "reggaeton", country: "🇵🇷 Puerto Rico" },
    { genre: "pop rap", country: "🇺🇸 USA" },
    { genre: "modern rock", country: "🇺🇸 USA" },
    { genre: "latin pop", country: "🇺🇸 USA" },
    { genre: "classic rock", country: "🇺🇸 USA" },
    { genre: "musica mexicana", country: "🇲🇽 Mexico" },
    { genre: "trap", country: "🌍 Global" },
    { genre: "filmi", country: "🇮🇳 India" },
    { genre: "permanent wave", country: "🌍 Global" },
    { genre: "k-pop", country: "🇰🇷 South Korea" },
    { genre: "alternative metal", country: "🌍 Global" },
    { genre: "pov: indie", country: "🌍 Global" },
    { genre: "r&b", country: "🇺🇸 USA" },
    { genre: "edm", country: "🌍 Global" },
    { genre: "album rock", country: "🌍 Global" },
    { genre: "corrido", country: "🇲🇽 Mexico" },
    { genre: "pop dance", country: "🌍 Global" },
    { genre: "norteno", country: "🇲🇽 Mexico" },
    { genre: "contemporary country", country: "🇺🇸 USA" },
    { genre: "soft rock", country: "🌍 Global" },
    { genre: "hard rock", country: "🌍 Global" },
    { genre: "canadian pop", country: "🇨🇦 Canada" },
    { genre: "melodic rap", country: "🌍 Global" },
    { genre: "sad sierreno", country: "🇲🇽 Mexico" },
    { genre: "color noise", country: "🌍 Global" },
    { genre: "rap latina", country: "🇺🇸 USA" },
    { genre: "latin viral pop", country: "🇺🇸 USA" },
    { genre: "uk contemporary r&b", country: "🇬🇧 UK" },
    { genre: "sierreno", country: "🇲🇽 Mexico" },
    { genre: "mellow gold", country: "🌍 Global" },
    { genre: "nu metal", country: "🌍 Global" },
    { genre: "uk pop", country: "🇬🇧 UK" },
    { genre: "country", country: "🇺🇸 USA" },
    { genre: "post-grunge", country: "🇺🇸 USA" },
    { genre: "jazz blues", country: "🇺🇸 USA" },
    { genre: "memphis soul", country: "🇺🇸 USA" },
    { genre: "neo soul", country: "🇺🇸 USA" },
    { genre: "soul", country: "🇺🇸 USA" },
    { genre: "southern soul", country: "🇺🇸 USA" },
    { genre: "vocal jazz", country: "🇺🇸 USA" },
    { genre: "chicago rap", country: "🇺🇸 USA" },
    { genre: "drumless hip hop", country: "🇺🇸 USA" },
    { genre: "slap house", country: "🇺🇸 USA" },
    { genre: "conscious hip hop", country: "🇺🇸 USA" },
    { genre: "swiss hip hop", country: "🇨🇭 Suisse" },
    { genre: "modern bollywood", country: "🇮🇳 India" },
    { genre: "sertanejo universitario", country: "🇧🇷 Brazil" },
    { genre: "alternative rock", country: "🌍 Global" },
    { genre: "banda", country: "🇲🇽 Mexico" },
    { genre: "neon pop punk", country: "🌍 Global" },
    { genre: "rap conscient", country: "🇫🇷 France" },
    { genre: "pop urbaine", country: "🇫🇷 France" },
    { genre: "french hip hop", country: "🇫🇷 France" },
    { genre: "rap francais", country: "🇫🇷 France" },
    { genre: "cloud rap francais", country: "🇫🇷 France" },
    { genre: "rap francais nouvelle vague", country: "🇫🇷 France" },
    { genre: "azontobeats", country: "🇨🇩 Congo" },
    { genre: "musique urbaine kinshasa", country: "🇨🇩 Congo" },
    { genre: "rumba congolaise", country: "🇨🇩 Congo" },
    { genre: "ndombolo", country: "🇨🇩 Congo" },
    { genre: "soukous", country: "🇨🇩 Congo" },
    { genre: "congolese gospel", country: "🇨🇩 Congo" },
    { genre: "zilizopendwa", country: "🇨🇩 Congo" },
    { genre: "coupe-decale", country: "🇨🇮 Cote Ivoire" },
    { genre: "belgian hip hop", country: "🇧🇪 Belgique" },
    { genre: "rap belge", country: "🇧🇪 Belgique" },
    { genre: "rap belge", country: "🇧🇪 Belgique" },
    { genre: "cali rap", country: "🇺🇸 USA" },
    { genre: "chanson", country: "🇫🇷 France" },
    { genre: "dream pop", country: "🌍 Global" },
    { genre: "thrash metal", country: "🌍 Global" },
    { genre: "canadian rock", country: "🇨🇦 Canada" },
    { genre: "pittsburgh rap", country: "🇺🇸 USA" },
    { genre: "modern blues rock", country: "🇺🇸 USA" },
    { genre: "shoegaze", country: "🌍 Global" },
    { genre: "rap rock", country: "🌍 Global" },
    { genre: "dutch edm", country: "🇳🇱 Netherlands" },
    { genre: "polish trap", country: "🇵🇱 Poland" },
    { genre: "k-rap", country: "🇰🇷 South Korea" },
    { genre: "melodic drill", country: "🌍 Global" },
    { genre: "new americana", country: "🌍 Global" },
    { genre: "nyc rap", country: "🇺🇸 USA" },
    { genre: "classical", country: "🌍 Global" },
    { genre: "vocal jazz", country: "🌍 Global" },
    { genre: "reggaeton flow", country: "🇵🇷 Puerto Rico" },
    { genre: "pluggnb", country: "🌍 Global" },
    { genre: "memphis hip hop", country: "🇺🇸 USA" },
    { genre: "r&b francais", country: "🇫🇷 France" },
    { genre: "pixel", country: "🌍 Global" },
    { genre: "brooklyn drill", country: "🇺🇸 USA" },
    { genre: "punjabi hip hop", country: "🇮🇳 India" },
    { genre: "neo-synthpop", country: "🌍 Global" },
    { genre: "turkish trap", country: "🇹🇷 Turkey" },
    { genre: "sheffield indie", country: "🇬🇧 UK" },
    { genre: "movie tunes", country: "🌍 Global" },
    { genre: "plugg", country: "🌍 Global" },
  ];

  const topArtists = JSON.parse(localStorage.getItem("top_artist") || "[]");

  const genreCountryCounter: { [key: string]: { [key: string]: number } } = {};

  topArtists.forEach((artist: { genres: string[] }) => {
    artist.genres.forEach((genre) => {
      const country = genreCountryMapping.find(
        (mapping) => mapping.genre.toLowerCase() === genre.toLowerCase()
      )?.country;

      if (country) {
        genreCountryCounter[genre] = genreCountryCounter[genre] || {};
        genreCountryCounter[genre][country] =
          (genreCountryCounter[genre][country] || 0) + 1;
      }
    });
  });

  const countryTotals: { [key: string]: number } = {};

  Object.keys(genreCountryCounter).forEach((genre) => {
    const countryCounts: { [key: string]: number } = genreCountryCounter[genre];

    Object.keys(countryCounts).forEach((country) => {
      countryTotals[country] =
        (countryTotals[country] || 0) + countryCounts[country];
    });
  });

  // Trier les pays par total décroissant
  const sortedCountries = Object.keys(countryTotals).sort(
    (a, b) => countryTotals[b] - countryTotals[a]
  );

  const [showResults, setShowResults] = useState(false);

  const handleButtonClick = () => {
    setShowResults(!showResults);
  };

  return (
    <div className="countries-component">
      <div className={`button-and-list ${showResults ? "show-list" : ""}`}>
        <img onClick={handleButtonClick} src={leftArrow} alt="" />
        <div className="countries-list">
          {sortedCountries.map((country, index: number) => (
            <div key={country}>
              <h1 className="ml-4 mr-5 mt-4 text-center text-xl">
                {(index + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })}
              </h1>
              <h3 className="text-center">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesTop;
