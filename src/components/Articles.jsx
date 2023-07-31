import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Global from "../Global";


import { Link } from "react-router-dom";

const Articles = ({ home, title, search }) => {
  const [articles, setArticles] = useState([]);
  /* The code block is checking if the `home` prop is set to the string value "true". If it is, it will
execute the `useEffect` hook. */

  if (home === "true") {
    useEffect(() => {
      axios.get(`${Global.url}articles/true`).then((res) => {
        console.log(res.data);
        setArticles(res.data.articles);
      });
    }, []);
    /* The `else if (search)` block is checking if the `search` prop is truthy. If it is, it calls the
`getArticleBySearch` function passing the `search` prop as an argument. This function is responsible
for making an API call to retrieve articles based on the search query. */
  } else if (search) {
    getArticleBySearch(search);
  } else {
    /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
  making an HTTP GET request to retrieve a list of articles from the server. */
    useEffect(() => {
      axios.get(`${Global.url}articles`).then((res) => {
        console.log(res.data);
        setArticles(res.data.articles);
      });
    }, []);
  }

  /**
   * The function `getArticleBySearch` is a React hook that makes an API call to retrieve articles based
   * on a search term and updates the state with the fetched articles.
   */
  function getArticleBySearch(search) {
    useEffect(() => {
      axios.get(`${Global.url}search/${search}`).then((res) => {
        console.log(res.data);
        if (res.data.articles) {
          setArticles(res.data.articles);
        }
      });
    }, [search]);
  }

  let content;
  if (articles.length > 0) {
    content = (
      <>
        <h2 className="subheader">{title}</h2>
        {articles.map((article, i) => {
          return (
            <article className="article-item" id="article-template" key={i}>
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

              <h3>{article.title}</h3>
              <span className="date">{moment(article.date).fromNow()}</span>
              <Link to={"/blog/article/" + article._id}>Leer Mas</Link>

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
