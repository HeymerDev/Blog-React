import Slider from "./Slider";
import Sidebar from "./Sidebar";

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
          <h2 className="subheader">Ultimos Articulos </h2>
        </section>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
