import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

const Blog = () => {
  return (
    <>
      <Slider title="Blog" size="slider-small" />
      <div className="center">
        <section id="content">
          {/*listado de articulos*/}
          <Articles />
        </section>
        <Sidebar blog="true" />
      </div>
    </>
  );
};

export default Blog;
