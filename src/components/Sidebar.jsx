import { createRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = ({ blog }) => {
  const navigate = useNavigate();

  /* These lines of code are setting up state variables and a ref for the search functionality in the
 Sidebar component. */
  let searchRef = createRef();
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);

  /**
   * The function `toSearch` is a JavaScript React function that prevents the default behavior of an
   * event, sets the value of `search` based on the value of a `searchRef` reference, and sets
   * `redirect` to true.
   */
  const toSearch = (e) => {
    e.preventDefault();

    setSearch(searchRef.current.value);
    setRedirect(true);
  };

  /* The `useEffect` hook in this code is used to perform side effects in a React component. In this
  case, it is used to navigate to a different route when the `redirect` or `search` variables
  change. */
  useEffect(() => {
    if (redirect) {
      navigate(`/redirect/${search}`);
    }
  }, [redirect, search, navigate]);

  return (
    <>
      <aside id="sidebar">
        {blog === "true" && (
          <div id="nav-blog" className="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <Link to={"/blog/create"} className="btn btn-success">
              Crear artículo
            </Link>
          </div>
        )}

        <div id="search" className="sidebar-item">
          <h3>Buscador</h3>
          <p>Encuentra el artículo que buscas</p>
          <form onSubmit={toSearch}>
            <input type="text" name="search" ref={searchRef} />
            <input type="submit" name="submit" value="Buscar" className="btn" />
          </form>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
