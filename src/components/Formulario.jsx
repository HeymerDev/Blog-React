import { useState } from "react";

import { createRef } from "react";
import Sidebar from "./Sidebar";

const Formulario = () => {
  const [user, setUser] = useState({});

  let nombreRef = createRef();
  let apellidosRef = createRef();
  let bioRef = createRef();
  let hombreRef = createRef();
  let mujerRef = createRef();
  let otroRef = createRef();

  const recibirFromulario = (e) => {
    e.preventDefault();

    let genero;

    if (hombreRef.current.checked) {
      genero = hombreRef.current.value;
    } else if (mujerRef.current.checked) {
      genero = mujerRef.current.value;
    } else {
      genero = otroRef.current.value;
    }

    /* The `setUser` function is being called with an object as its argument. This object contains
    properties `nombre`, `apellido`, `bio`, and `genero`, which are being assigned the values of the
    corresponding input fields. */
    setUser({
      nombre: nombreRef.current.value,
      apellido: apellidosRef.current.value,
      bio: bioRef.current.value,
      genero: genero,
    });

    alert("formulario enviado");
    console.log(user);
  };

  return (
    <>
      <div className="center">
        <section id="content">
          <h2 className="subheader">Formulario</h2>

          <form className="mid-form" onSubmit={recibirFromulario}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" ref={nombreRef} />
            </div>

            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" name="apellidos" ref={apellidosRef} />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Biografia</label>
              <textarea name="bio" ref={bioRef}></textarea>
            </div>

            <div className="form-group radibuttons">
              <input
                type="radio"
                name="genero"
                value="hombre"
                ref={hombreRef}
              />{" "}
              Hombre
              <input
                type="radio"
                name="genero"
                value="mujer"
                ref={mujerRef}
              />{" "}
              Mujer
              <input
                type="radio"
                name="genero"
                value="otro"
                ref={otroRef}
              />{" "}
              Otro
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Enviar" className="btn btn-success" />
          </form>
        </section>
        <Sidebar blog="false" />
      </div>
    </>
  );
};

export default Formulario;
