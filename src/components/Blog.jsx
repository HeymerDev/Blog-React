import Slider from "./Slider";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Slider title="Blog" size="slider-small" />
      <div className="center">
        <section id="content">{/*listado de articulos*/}</section>
        <Sidebar blog="true" />
      </div>
    </>
  );
};

export default Home;
