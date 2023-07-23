const Pelicula = ({ lenguaje, Favorita }) => {
  /* The line `const { title, image } = lenguaje;` is using object destructuring to extract the
    `title` and `image` properties from the `lenguaje` object. This allows the component to access
    these properties directly without having to use `lenguaje.title` and `lenguaje.image`. */
  const { title, image } = lenguaje;

  /* The `return` statement in the code is returning the JSX (JavaScript XML) code that represents the
    structure and content of the React component. */
  return (
    <>
      <div id="articles">
        <article className="article-item" id="article-template">
          <div className="image-wrap">
            <img src={image} alt={title} />
          </div>

          <h2>{title}</h2>
          <span className="date">Hace 5 minutos</span>
          <a href="#">Leer más</a>

          {/* The line `<button onClick={() => Favorita(lenguaje)}>Seleccionar Como tu
                    favorita</button>` is creating a button element with the text "Seleccionar Como
                    tu favorita". */}

          <button onClick={() => Favorita(lenguaje)}>
            Seleccionar Como tu favorita
          </button>

          <div className="clearfix"></div>
        </article>
      </div>
    </>
  );
};

export default Pelicula;
