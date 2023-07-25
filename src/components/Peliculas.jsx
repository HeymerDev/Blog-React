import { useState } from "react";
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";

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

  const [peliculas, setPeliculas] = useState([
    {
      title: "No Way Home",
      image:
        "https://media.vandalsports.com/i/640x360/8-2022/2022822162218_1.jpg",
    },

    {
      title: "Infinity War",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/mlou-13x19-dolbyatamc-handout-v4-online-lg-1524737456.jpg?crop=1.00xw:0.685xh;0,0.0249xh&resize=2048:*",
    },

    {
      title: "Dragon Ball Super: Super Hero",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/Dragon_Ball_Super_Super_Hero_Logo.png",
    },
  ]);

  /**
   * The function "seleccionarFavorita" logs the given language to the console.
   */
  const seleccionarFavorita = (pelicula) => {
    console.log(pelicula);
    setFavoritos(pelicula.title);
  };

  /* The code block is checking if the `favorito` state variable has a value. If it does, it sets the
  `htmlFavorita` variable to a JSX element representing a paragraph with the class name "favorita"
  and some inline styles. Inside the paragraph, it displays the value of `favorito` as the favorite
  language. */
  if (favorito) {
    htmlFavorita = (
      <p className="favorita" style={favoriteStyles}>
        <strong>Tu Pelicula Favorita es: </strong>
        <small>{favorito}</small>
      </p>
    );
  } else {
    htmlFavorita = <p>No hay Pelicula Favorita</p>;
  }

  /* The `return` statement in the `Peliculas` component is returning JSX (JavaScript XML) code. JSX is a
  syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. */
  return (
    <div className="center">
      <section id="content">
        <h4 className="subheader">Peliculas Favorita</h4>
        <p>
          Seleccion de peliculas favoritas de {name} <br /> selecciona cual de
          estas tres es la tuya
        </p>

        {htmlFavorita}

        {peliculas.map((pelicula, index) => {
          return (
            <Pelicula
              key={index}
              pelicula={pelicula}
              Favorita={seleccionarFavorita}
            />
          );
        })}
      </section>
      <Sidebar blog="false" />
    </div>
  );
};

export default Peliculas;
