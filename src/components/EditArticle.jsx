import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Global from "../Global";

import swal from "sweetalert";

import Sidebar from "./Sidebar";

const EditArticle = () => {
  let url = Global.url;
  let navigate = useNavigate();

  const { id } = useParams();

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
      .put(`${url}article/${id}`, article)
      .then((res) => {
        if (res.data.article) {
          setArticle(res.data.article);
          setStatus("succes");

          swal(
            "Articulo Editado",
            "El articulo ha sido editado correctamente",
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

  const getArticle = (id) => {
    axios
      .get(url + "article/" + id)
      .then((res) => {
        setArticle(res.data.article);
      })
      .catch((error) => {
        setStatus("failed");
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(article);
    getArticle(id);
    if (status === "succes") {
      navigate("/blog");
    }
  }, [status, navigate, id]);

  return (
    <div className="center">
      <section id="content">
        <h2 className="subheader"> Editar Articulo</h2>
        {article.title && (
          <form className="mid-form" onSubmit={saveArticle}>
            <div className="form-group">
              <label htmlFor="titulo">Titulo</label>
              <input
                type="text"
                name="titulo"
                ref={titleRef}
                onChange={changeState}
                defaultValue={article.title}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                name="content"
                ref={contentRef}
                onChange={changeState}
                defaultValue={article.content}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen</label>
              <input type="file" name="file0" onChange={fileChange} />
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Enviar" className="btn btn-success" />
          </form>
        )}
      </section>

      <Sidebar />
    </div>
  );
};

export default EditArticle;
