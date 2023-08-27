import { Link } from "react-router-dom";
import logoText from "../assets/images/Logo-with-text.svg";
import world from "../assets/images/world.svg";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Navbar = () => {
  const languageContext = useContext(LanguageContext);
  const switchLanguage = languageContext?.switchLanguage || (() => {});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav>
      <div className="navbar-component mb-4">
        <ul className="nav-list pt-5 pl-9 ">
          <li className="nav-list-item md:flex md:justify-center">
            <Link to="/MelodyMapper/">
              <picture className="logo">
                <img className="w-40" src={logoText} />
              </picture>
            </Link>
          </li>
          <li className="nav-list-item md:flex md:justify-end">
            <picture
              className="world"
              id="menu-button"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <img className="w-7 mr-8 mt-2" src={world} />
            </picture>
            <div
              className={`translation-dropdown absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                isDropdownOpen ? "" : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-1"
                  onClick={() => {
                    switchLanguage("fr");
                    closeDropdown();
                  }}
                >
                  🇫🇷 French
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  id="menu-item-2"
                  onClick={() => {
                    switchLanguage("en");
                    closeDropdown();
                  }}
                >
                  🇺🇸 English
                </a>
                <form method="POST" action="#" role="none">
                  <Link to="/MelodyMapper/">
                    <button
                      type="submit"
                      className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      id="menu-item-3"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
