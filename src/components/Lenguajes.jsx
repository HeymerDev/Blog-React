import { useState } from "react";
import Lenguaje from "./Lenguaje";
import Sidebar from "./Sidebar";

const Lenguajes = () => {
  let favoriteStyles = {
    background: "green",
    color: "white",
    padding: "10px",
  };

  let name = "Heymer Meza";
  let [favorito, setFavoritos] = useState("");
  let htmlFavorita;

  const [lenguajes, setLenguajes] = useState([
    {
      title: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    },

    {
      title: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png",
    },

    {
      title: "TypeScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
  ]);

  /**
   * The function "seleccionarFavorita" logs the given language to the console.
   */
  const seleccionarFavorita = (lenguaje) => {
    console.log(lenguaje);
    setFavoritos(lenguaje.title);
  };

  /* The code block is checking if the `favorito` variable has a value. If it does, it sets the
  `htmlFavorita` variable to a JSX element that displays the favorite language. The JSX element
  includes a `<p>` tag with the class name "favorita" and a style object `favoriteStyles` that sets
  the background color, text color, and padding. Inside the `<p>` tag, it displays the favorite
  language using the `favorito` variable. */
  if (favorito) {
    htmlFavorita = (
      <p className="favorita" style={favoriteStyles}>
        <strong>Tu Lenguaje Favorito es: </strong>
        <small>{favorito}</small>
      </p>
    );
  } else {
    htmlFavorita = <p>No hay lenguaje Favorito</p>;
  }

  return (
    <div className="center">
      <section id="content">
        <h4 className="subheader">Lenguajes Favoritos</h4>
        <p>
          Seleccion de lenaguajes favoritos de {name} <br /> selecciona cual de
          estos tres el tuyo
        </p>

        {htmlFavorita}
        {/* The code block is mapping over the `lenguajes` array and rendering a component called `Lenguaje` for
each item in the array. */}

        {lenguajes.map((lenguaje, index) => {
          return (
            <Lenguaje
              key={index}
              lenguaje={lenguaje}
              Favorito={seleccionarFavorita}
            />
          );
        })}
      </section>

      <Sidebar blog="false" />
    </div>
  );
};

export default Lenguajes;
