import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

import { useParams } from "react-router-dom";

const Search = () => {
  /* `const { search } = useParams();` is using the `useParams` hook from the `react-router-dom`
  library to extract the value of the `search` parameter from the URL. */
  const { search } = useParams();

  return (
    <>
      <Slider title={"Buqueda: " + search} size="slider-small" />
      <div className="center">
        <section id="content">
          {/*listado de articulos*/}
          <Articles title="Listado de Articulos" search={search} />
        </section>
        <Sidebar blog="true" />
      </div>
    </>
  );
};

export default Search;
