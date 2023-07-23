import { useState } from "react";
import MiComponente from "./MiComponente";

const Pruebas = () => {
  let [contador, setCount] = useState(0);

  function holaMundo(name, edad) {
    let presentacion = (
      <>
        <h3>Hola Soy {name}</h3>
        <h3>Tengo {edad} años</h3>
      </>
    );

    return presentacion;
  }

  const sumar = () => setCount(contador + 1);

  const restar = () => setCount(contador - 1);

  return (
    <>
      <section id="content">
        <h2 className="subheader">Ultimos Articulos</h2>
        <p>Bienvenido al Blog De Heymer Meza</p>

        {holaMundo("Heymer", 17)}

        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
        </section>

        <h2 className="subheader">Estados</h2>
        <p>{contador}</p>
        <input type="button" value="Sumar" onClick={sumar} />
        <input type="button" value="Restar" onClick={restar} />
      </section>
    </>
  );
};

export default Pruebas;
