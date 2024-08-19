import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import MovieDetails from "./pages/movie-details/movie-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //  errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:  <Navigate to="/login" replace /> ,
      },
      {
        path:'/login',
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
