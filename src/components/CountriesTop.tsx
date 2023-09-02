import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CountriesTop = () => {
  const { language } = useContext(LanguageContext) || { language: "en" };
  interface Translations {
    [key: string]: {
      topCountries: string;
      topCountriesSubtitle: string;
    };
  }

  const translations: Translations = {
    fr: {
      topCountries:
        "Classement des pays dont vous streamez le plus le contenu :",
      topCountriesSubtitle: "Voici la liste des pays que vous streamez le plus",
    },
    en: {
      topCountries: "Ranking of countries whose content you stream the most :",
      topCountriesSubtitle:
        "Here's a list of the countries you stream from the most:",
    },
  };

  const translationKey = language || "en";
  const { topCountries, topCountriesSubtitle } = translations[translationKey];

  const genreCountryMapping = [
    {
      genre: "pop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "rap",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "rock",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "hip hop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "urbano latino",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "trap latino",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "dance pop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "reggaeton",
      country: "🇵🇷 Puerto Rico",
      img: "https://images.unsplash.com/photo-1599943503164-2dcaab73121a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "pop rap",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "modern rock",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "latin pop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "classic rock",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "musica mexicana",
      country: "🇲🇽 Mexico",
      img: "https://images.unsplash.com/photo-1619702134729-e5e082e58b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "trap",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "filmi",
      country: "🇮🇳 India",
      img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    },
    {
      genre: "permanent wave",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "k-pop",
      country: "🇰🇷 South Korea",
      img: "https://images.unsplash.com/photo-1619179834700-7a886aac80cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    },
    {
      genre: "alternative metal",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "pov: indie",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "r&b",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "edm",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "album rock",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "corrido",
      country: "🇲🇽 Mexico",
      img: "https://images.unsplash.com/photo-1619702134729-e5e082e58b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "pop dance",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "norteno",
      country: "🇲🇽 Mexico",
      img: "https://images.unsplash.com/photo-1619702134729-e5e082e58b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "contemporary country",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "soft rock",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "hard rock",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "canadian pop",
      country: "🇨🇦 Canada",
      img: "https://plus.unsplash.com/premium_photo-1670782711823-1c45c8524c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "melodic rap",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "sad sierreno",
      country: "🇲🇽 Mexico",
      img: "https://images.unsplash.com/photo-1619702134729-e5e082e58b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "color noise",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "rap latina",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "latin viral pop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "uk contemporary r&b",
      country: "🇬🇧 UK",
      img: "https://images.unsplash.com/photo-1623577287452-68b18b24a4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "sierreno",
      country: "🇲🇽 Mexico",
      img: "https://images.unsplash.com/photo-1619702134729-e5e082e58b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "mellow gold",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "nu metal",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "uk pop",
      country: "🇬🇧 UK",
      img: "https://images.unsplash.com/photo-1623577287452-68b18b24a4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "country",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "post-grunge",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "jazz blues",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "memphis soul",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "neo soul",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "soul",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "southern soul",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "vocal jazz",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "chicago rap",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "drumless hip hop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "slap house",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "conscious hip hop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "swiss hip hop",
      country: "🇨🇭 Suisse",
      img: "https://plus.unsplash.com/premium_photo-1670782711862-80d4334c36e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "modern bollywood",
      country: "🇮🇳 India",
      img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    },
    {
      genre: "sertanejo universitario",
      country: "🇧🇷 Brazil",
      img: "https://plus.unsplash.com/premium_photo-1667868018725-36d4a1f32922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
    {
      genre: "alternative rock",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "banda",
      country: "🇲🇽 Mexico",
      img: "https://images.unsplash.com/photo-1619702134729-e5e082e58b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "neon pop punk",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "rap conscient",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "pop urbaine",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "french hip hop",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "rap francais",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "cloud rap francais",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "rap francais nouvelle vague",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "azontobeats",
      country: "🇨🇩 Congo",
      img: "https://plus.unsplash.com/premium_photo-1670782711962-f59010a90b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "musique urbaine kinshasa",
      country: "🇨🇩 Congo",
      img: "https://plus.unsplash.com/premium_photo-1670782711962-f59010a90b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "rumba congolaise",
      country: "🇨🇩 Congo",
      img: "https://plus.unsplash.com/premium_photo-1670782711962-f59010a90b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "ndombolo",
      country: "🇨🇩 Congo",
      img: "https://plus.unsplash.com/premium_photo-1670782711962-f59010a90b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "soukous",
      country: "🇨🇩 Congo",
      img: "https://plus.unsplash.com/premium_photo-1670782711962-f59010a90b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "congolese gospel",
      country: "🇨🇩 Congo",
      img: "https://plus.unsplash.com/premium_photo-1670782711962-f59010a90b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "zilizopendwa",
      country: "🇨🇩 Congo",
      img: "https://images.unsplash.com/photo-1623577287452-68b18b24a4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "coupe-decale",
      country: "🇨🇮 Cote Ivoire",
      img: "https://plus.unsplash.com/premium_photo-1670689708220-78742d3369b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "belgian hip hop",
      country: "🇧🇪 Belgique",
      img: "https://images.unsplash.com/photo-1633941237002-38ff71424bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "rap belge",
      country: "🇧🇪 Belgique",
      img: "https://images.unsplash.com/photo-1633941237002-38ff71424bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "rap belge",
      country: "🇧🇪 Belgique",
      img: "https://images.unsplash.com/photo-1633941237002-38ff71424bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "cali rap",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "chanson",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "dream pop",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "thrash metal",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "canadian rock",
      country: "🇨🇦 Canada",
      img: "https://plus.unsplash.com/premium_photo-1670782711823-1c45c8524c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "pittsburgh rap",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "modern blues rock",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "shoegaze",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "rap rock",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "dutch edm",
      country: "🇳🇱 Netherlands",
      img: "https://plus.unsplash.com/premium_photo-1670689707933-b1c85b8f7b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "polish trap",
      country: "🇵🇱 Poland",
      img: "https://plus.unsplash.com/premium_photo-1670782711936-8e082231b066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
    },
    {
      genre: "k-rap",
      country: "🇰🇷 South Korea",
      img: "https://images.unsplash.com/photo-1619179834700-7a886aac80cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    },
    {
      genre: "melodic drill",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "new americana",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "nyc rap",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "classical",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "vocal jazz",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "reggaeton flow",
      country: "🇵🇷 Puerto Rico",
      img: "https://images.unsplash.com/photo-1599943503164-2dcaab73121a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "pluggnb",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "memphis hip hop",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "r&b francais",
      country: "🇫🇷 France",
      img: "https://images.unsplash.com/photo-1551866442-64e75e911c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "pixel",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "brooklyn drill",
      country: "🇺🇸 USA",
      img: "https://images.unsplash.com/photo-1498174979972-c9de7e6a93d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      genre: "punjabi hip hop",
      country: "🇮🇳 India",
      img: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    },
    {
      genre: "neo-synthpop",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "turkish trap",
      country: "🇹🇷 Turkey",
      img: "https://images.unsplash.com/photo-1555223302-e369e66cf4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1813&q=80",
    },
    {
      genre: "sheffield indie",
      country: "🇬🇧 UK",
      img: "https://images.unsplash.com/photo-1623577287452-68b18b24a4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "movie tunes",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      genre: "plugg",
      country: "🌍 Global",
      img: "https://images.unsplash.com/photo-1523281353252-5e14672131b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  const topArtists: { genres: string[] }[] = JSON.parse(
    localStorage.getItem("top_artist") || "[]"
  );

  const genreCountryCounter: { [key: string]: { [key: string]: number } } = {};

  topArtists.forEach((artist) => {
    artist.genres.forEach((genre) => {
      const countryInfo = genreCountryMapping.find(
        (mapping) => mapping.genre.toLowerCase() === genre.toLowerCase()
      );

      if (countryInfo) {
        const { country } = countryInfo;
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

  const sortedCountries = Object.keys(countryTotals).sort(
    (a, b) => countryTotals[b] - countryTotals[a]
  );

  const settings = {
    slidesPerView: "auto" as const,
    centeredSlides: true,
    spaceBetween: 1,
    loop: false,
  };

  return (
    <div className="top-countries flex flex-col items-center w-full">
      <div className="text-left text-content">
        <h3 className="text-lg mt-4">{topCountries}</h3>
        <h3 className="text-sm mb-6 subtitle">{topCountriesSubtitle}</h3>
      </div>

      <div className="ranking w-full">
        <Swiper {...settings} className="swiper-container">
          {sortedCountries.map((country, index) => (
            <SwiperSlide key={country}>
              <div className="items flex flex-col mb-6">
                <div className="top-info flex-col items-center">
                  <img
                    src={
                      genreCountryMapping.find(
                        (mapping) => mapping.country === country
                      )?.img
                    }
                    alt=""
                    style={{ width: "140px", height: "140px" }}
                  />
                  <div className="text-paragraph flex flex-col">
                    <h1 className="mt-1 md:text-xl">
                      {(index + 1).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                      })}
                      . {country}
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

export default CountriesTop;
