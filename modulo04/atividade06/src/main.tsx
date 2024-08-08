import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //  errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


