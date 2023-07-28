import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

const Home = () => {
  let buttonString = "Ir al Blog";

  return (
    <>
      <Slider
        title="Amplia y comparte todos tus conocimientos sobre la Programacion, para que seas un genio de ella."
        btn={buttonString}
        size="slider-big"
      />
      <div className="center">
        <section id="content">
          <Articles home="true" title="Ultimos Articulos" />
        </section>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
