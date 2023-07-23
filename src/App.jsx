import "../src/assets/css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Page404 from "./components/Page404.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    path: "*",
    element: <Page404 />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
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
