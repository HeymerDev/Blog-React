import axios from "axios";
import { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3900/api/articles").then((res) => {
      console.log(res.data);
      setArticles(res.data.articles);
    });
  }, []);

  let content;
  if (articles.length > 0) {
    content = (
      <>
        <h2 className="subheader">Listado de Articulos</h2>
        {articles.map((article, i) => {
          return (
            <article className="article-item" id="article-template" key={i}>
              <div className="image-wrap">
                <img src={article.image} alt={article.title} />
              </div>

              <h3>{article.title}</h3>
              <span className="date">{article.date}</span>
              <a href="#">Leer más</a>

              <div className="clearfix"></div>
            </article>
          );
        })}
      </>
    );
  } else if (articles.length === 0) {
    content = (
      <>
        <h2 className="subheader">No hay articulos para mostrar</h2>
        <p>Todavia no hay contenido en esta seccion</p>
      </>
    );
  } else {
    content = (
      <>
        <h2 className="subheader">Cargando...</h2>
        <p>Espere un momento</p>
      </>
    );
  }

  return (
    <>
      <div id="articles">{content}</div>
    </>
  );
};

export default Articles;
