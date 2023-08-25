import phoneImg from "../assets/images/Phone-img.png";
import spotifyLogo from "../assets/images/spotify.svg";

const Home = () => {
  return (
    <div className="flex items-center">
      <div className="home-component">
        <div className="text md:float-left md:w-1/2 md:p-6">
          <div className="container mt-8 p-0 md:p-9">
            <h4 className="text-3xl md:text-left text-center mb-4 p-3">
              La <span>bande-son</span> mondiale de vos favoris.
            </h4>
            <p className="text-lg md:text-left md:text-2xl text-center mb-4 p-3">
              Découvrez la tapisserie harmonieuse du monde avec MelodyMapper.
              Attribuez des villes à vos 10 morceaux Spotify préférés et
              observez votre voyage musical dévoiler des mélodies qui résonnent
              dans différents paysages urbains. MelodyMapper n'est pas encore
              disponible pour tout le monde, mais cela ne saurait tarder. Soyez
              le premier à être informé de son lancement en vous inscrivant sur
              notre liste d'attente.
            </p>
            <span className="spotify-button p-4 w-44 rounded-2xl grid grid-cols-1 justify-items-center">
              <img className="w-8 mr-1" src={spotifyLogo} />
              Connexion Spotify
            </span>
          </div>
        </div>
        <div className="text part2 md:float-right md:w-1/2 md:p-6">
          <div className="container">
            <img className="w-full" src={phoneImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
