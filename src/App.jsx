import "../src/assets/css/App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Peliculas from "./components/Peliculas";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  let buttonString = "Ir al Blog";

  return (
    <div className="App">
      <Header />

      <Slider
        title="Amplia y comparte todos tus conocimientos sobre la Programacion, para que seas un genio de ella."
        btn={buttonString}
      />

      {/* The code is creating a container div with the class name "center". Inside this div, there is a
      section element with the id "content". Within the section element, the RouterProvider component is
      being rendered with the "router" prop set to the "router" variable. The RouterProvider component is
  responsible for providing the routing functionality to the application. */}
      <div className="center">
        <section id="content">
          <Peliculas />
        </section>

        <Sidebar />

        <div className="clearfix"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
