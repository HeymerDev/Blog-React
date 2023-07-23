import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import Pruebas from "./components/Pruebas.jsx";
import Page404 from "./components/Page404.jsx";

/* The line `import { RouterProvider, createBrowserRouter } from "react-router-dom";` is importing two
components from the "react-router-dom" library. */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* The `const router = createBrowserRouter([...])` statement is creating a router configuration using
the `createBrowserRouter` function from the `react-router-dom` library. */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pruebas",
    element: <Pruebas />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
/* The code is rendering the root component of the application using ReactDOM's `createRoot` method. It
creates a root instance that can be used to render React elements into the DOM. The `render` method
is then called on the root instance to render the JSX code inside the `React.StrictMode` component. */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
