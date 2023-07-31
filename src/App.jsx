import "../src/assets/css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Page404 from "./components/Page404.jsx";
import Peliculas from "./components/Peliculas";
import Lenguajes from "./components/Lenguajes";
import Formulario from "./components/Formulario";
import Article from "./components/Article";
import Search from "./components/Search";
import Redirect from "./components/Redirect";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";

/* The line `import { BrowserRouter, Routes, Route } from "react-router-dom";` is importing specific
components from the "react-router-dom" library. */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* The `routes` constant is an array of objects that define the routes for the application. Each object
in the array represents a specific route and has two properties: `path` and `element`. */
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/peliculas",
    element: <Peliculas />,
  },
  {
    path: "/lenguajes",
    element: <Lenguajes />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/blog/article/:id",
    element: <Article />,
  },
  {
    path: "/blog/search/:search",
    element: <Search />,
  },
  {
    path: "/blog/create",
    element: <CreateArticle />,
  },
  {
    path: "/blog/edit/:id",
    element: <EditArticle />,
  },
  {
    path: "/redirect/:search",
    element: <Redirect />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

function App() {
  return (
    <div className="App">
      {/* The code block is defining the routing configuration for the application using the
      `react-router-dom` library. */}
      <BrowserRouter>
        <Header />

        <Routes>
          {/* The code block 
          `{routes.map((screen) => (
              <Route
                key={screen.path}
                path={screen.path}
                element={screen.element}
              />
            ))}` 
          is mapping over the `routes` array and creating a `<Route>` component for
          each object in the array. */}
          {routes.map((screen) => (
            <Route
              key={screen.path}
              path={screen.path}
              element={screen.element}
            />
          ))}
        </Routes>

        <div className="clearfix"></div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
