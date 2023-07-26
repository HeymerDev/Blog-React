import { useState } from "react";

import { createRef } from "react";
import Sidebar from "./Sidebar";

const Formulario = () => {
  const [user, setUser] = useState({});

  /* The code `let nombreRef = createRef(); let apellidosRef = createRef(); let bioRef = createRef(); let
  hombreRef = createRef(); let mujerRef = createRef(); let otroRef = createRef();` is creating
  references (refs) using the `createRef()` function. */
  let nombreRef = createRef();
  let apellidosRef = createRef();
  let bioRef = createRef();
  let hombreRef = createRef();
  let mujerRef = createRef();
  let otroRef = createRef();

  const recibirFromulario = (e) => {
    /* The code `e.preventDefault();` is preventing the default behavior of the form submission. By calling
    this function, the form will not be submitted and the page will not be refreshed. */
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
      apellidos: apellidosRef.current.value,
      bio: bioRef.current.value,
      genero: genero,
    });

    console.log("formulario enviado");
    console.log(user);
  };

  return (
    /* The code is defining a functional component called `Formulario` in JavaScript React. */
    <>
      <div className="center">
        <section id="content">
          <h2 className="subheader">Formulario</h2>

          {/* The code `{user.nombre && (...)}` is a conditional rendering statement in JSX. It checks
          if the `user.nombre` property exists and is truthy. If it is, it renders the JSX code
          inside the parentheses, which creates a `<div>` element with the id "user-data" and
          displays the user's name, last name, and gender. */}

          {user.nombre && (
            <div id="user-data">
              <p>
                <strong>Nombre:</strong> {user.nombre}
              </p>
              <p>
                <strong>Apellidos:</strong> {user.apellidos}
              </p>
              <p>
                <strong>Genero:</strong> {user.genero}
              </p>
            </div>
          )}

          <form
            className="mid-form"
            onSubmit={recibirFromulario}
            onChange={recibirFromulario}
          >
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
                value="Hombre"
                ref={hombreRef}
              />{" "}
              Hombre
              <input
                type="radio"
                name="genero"
                value="Mujer"
                ref={mujerRef}
              />{" "}
              Mujer
              <input
                type="radio"
                name="genero"
                value="Otro"
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
