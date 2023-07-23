import React, { useState } from "react";
import Pelicula from "./Pelicula";

/* The code defines a functional component called `Peliculas`. It uses the `useState` hook from React
to declare a state variable `lenguajes` and a function `setLenguajes` to update the state. The
initial value of `lenguajes` is an array of objects representing different programming languages,
each with a `title` and an `image` property. */
const Peliculas = () => {
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
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
  ]);

  /**
   * The function "seleccionarFavorita" logs the given language to the console.
   */
  const seleccionarFavorita = (lenguaje) => {
    console.log(lenguaje);
    setFavoritos(lenguaje.title);
  };

  /* The code block is checking if the `favorito` state variable has a value. If it does, it sets the
  `htmlFavorita` variable to a JSX element representing a paragraph with the class name "favorita"
  and some inline styles. Inside the paragraph, it displays the value of `favorito` as the favorite
  language. */
  if (favorito) {
    htmlFavorita = (
      <p className="favorita" style={favoriteStyles}>
        <strong>Tu lenguaje Favorito es: </strong>
        <small>{favorito}</small>
      </p>
    );
  } else {
    htmlFavorita = <p>No hay Lenguaje Favorita</p>;
  }

  /* The `return` statement in the `Peliculas` component is returning JSX (JavaScript XML) code. JSX is a
  syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. */
  return (
    <>
      <h4 className="subheader">Lenguajes de Programacion</h4>
      <p>
        Seleccion de lenaguajes favoritos de {name} <br /> selecciona cual de
        estos tres es el tuyo
      </p>

      {htmlFavorita}

      {lenguajes.map((lenguaje, index) => {
        return (
          <Pelicula
            key={index}
            lenguaje={lenguaje}
            Favorita={seleccionarFavorita}
          />
        );
      })}
    </>
  );
};

export default Peliculas;
