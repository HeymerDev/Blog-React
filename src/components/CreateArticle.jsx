import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Global from "../Global";

import swal from "sweetalert";

import Sidebar from "./Sidebar";

const CreateArticle = () => {
  let url = Global.url;
  let navigate = useNavigate();

  const [article, setArticle] = useState({});
  const [status, setStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  let titleRef = useRef();
  let contentRef = useRef();

  const changeState = () => {
    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
  };

  const saveArticle = (e) => {
    e.preventDefault();

    changeState();

    /* This code is making a POST request to the server using the Axios library. It is sending the
`article` object as the request body to the `save` endpoint. */
    axios
      .post(`${url}save`, article)
      .then((res) => {
        if (res.data.article) {
          setArticle(res.data.article);
          setStatus("succes");

          swal(
            "Articulo Creado",
            "El articulo ha sido creado correctamente",
            "success"
          );

          if (selectedFile !== null) {
            let articleId = article._id;

            const formData = new FormData();

            formData.append("file0", selectedFile);

            axios
              .post(`${url}upload-image/${articleId}`, formData)
              .then((res) => {
                if (res.data.article) {
                  setArticle(res.data.article);
                  setStatus("succes");
                } else {
                  setStatus("failed");
                }
              })
              .catch((error) => {
                setStatus("failed");
              });
          }
        } else {
          setStatus("failed");
        }
      })
      .catch((error) => {
        console.error(`error en la solicitud: ${error}`);
      });
  };

  const fileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (status === "succes") {
      navigate("/blog");
    }
  }, [status, navigate]);

  return (
    <div className="center">
      <section id="content">
        <h2 className="subheader"> Crear Articulo</h2>

        <form className="mid-form" onSubmit={saveArticle}>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              type="text"
              name="titulo"
              ref={titleRef}
              onChange={changeState}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Contenido</label>
            <textarea
              name="content"
              ref={contentRef}
              onChange={changeState}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="file0">Imagen</label>
            <input type="file" name="file0" onChange={fileChange} />
          </div>

          <div className="clearfix"></div>

          <input type="submit" value="Enviar" className="btn btn-success" />
        </form>
      </section>

      <Sidebar />
    </div>
  );
};

export default CreateArticle;
