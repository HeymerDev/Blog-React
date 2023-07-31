import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Global from "../Global";
import swal from "sweetalert";

import Sidebar from "./Sidebar";

const Article = () => {
  const [article, setArticle] = useState();

  const { id } = useParams();

  let url = Global.url;
  const navigate = useNavigate();

  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
 making an HTTP GET request to fetch an article from the server using the `axios` library. The URL
 for the request is constructed using the `url` variable from the `Global` module and the `id`
 parameter from the URL. */
  useEffect(() => {
    axios.get(`${url}article/${id}`).then((res) => {
      setArticle(res.data.article);
    });
  });

  const deleteArticle = (id) => {
    swal({
      title: "Estas seguro?",
      text: "Estas seguro de borrar este articulo?!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(url + "article/" + id).then((res) => {
          setArticle(res.data.article);
          navigate("/blog");

          swal(
            "Articulo Borrado",
            "El articulo se borro correctamente",
            "success"
          );
        });
      } else {
        swal("Tranquilo", "tu articulo no se ha borrado", "error");
      }
    });
  };

  return (
    <>
      <div className="center">
        <section id="content">
          {article && (
            <article className="article-item article-detail">
              <div className="image-wrap">
                {article.image !== null ? (
                  <img
                    src={Global.url + "get-image/" + article.image}
                    alt={article.title}
                  />
                ) : (
                  <img
                    src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
                    alt={article.title}
                  />
                )}
              </div>

              <h1 className="subheader">{article.title}</h1>
              <span className="date">{moment(article.date).fromNow()}</span>
              <p>{article.content}</p>

              <button
                onClick={() => {
                  deleteArticle(article._id);
                }}
                className="btn btn-danger"
              >
                Eliminar
              </button>
              <Link
                to={"/blog/edit/" + article._id}
                className="btn btn-warning"
              >
                Editar
              </Link>

              <div className="clearfix"></div>
            </article>
          )}

          {!article && (
            <div className="article">
              <h2 className="subheader">EL ARTICULO NO EXISTE</h2>
              <p>Busca Otro Articulo</p>
              <button>
                <Link to={"/blog"} className="link-without-decoration">
                  Ir al Blog
                </Link>
              </button>
            </div>
          )}
        </section>
        <Sidebar />
      </div>
    </>
  );
};

export default Article;
