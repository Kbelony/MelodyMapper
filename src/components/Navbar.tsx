import { Link } from "react-router-dom";
import logoText from "../assets/images/Logo-with-text.svg";

const Navbar = () => {
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
