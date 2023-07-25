import logo from "../assets/images/react.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="center">
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Blog</strong>React
            </span>
          </div>
          <nav id="menu">
            <ul>
              <li>
                <NavLink to={"/"} activateClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} activateClassName>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to={"/formulario"} activateClassName>
                  Formulario
                </NavLink>
              </li>
              <li>
                <NavLink to={"/lenguajes"} activateClassName>
                  Lenguajes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/peliculas"} activateClassName>
                  Peliculas
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
