import "../src/assets/css/App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Peliculas from "./components/Peliculas";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Pruebas from "./components/Pruebas.jsx";
import Page404 from "./components/Page404.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let buttonString = "Ir al Blog";

  const routes = [
    {
      path: "/",
      element: <Peliculas />,
    },
    {
      path: "/pruebas",
      element: <Pruebas />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Slider
          title="Amplia y comparte todos tus conocimientos sobre la Programacion, para que seas un genio de ella."
          btn={buttonString}
        />

        <div className="center">
          <section id="content">
            <Routes>
              {routes.map((screen) => (
                <Route
                  key={screen.path}
                  path={screen.path}
                  element={screen.element}
                />
              ))}
            </Routes>
          </section>

          <Sidebar />

          <div className="clearfix"></div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
