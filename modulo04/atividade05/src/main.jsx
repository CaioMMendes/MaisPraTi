import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import IPAddressFinder from "./pages/IPAddressFinder.jsx"
import LanguageTranslator from "./pages/LanguageTranslator.jsx"
import Login from "./pages/Login.jsx"
import MovieSearchEngine from "./pages/MovieSearchEngine.jsx"
import QuizApp from "./pages/QuizApp.jsx"
import TodoApp from "./pages/TodoApp.jsx"
import HomePage from "./pages/Home.jsx"
import { Toaster } from "sonner"
import AuthenticatedLayout from "./layout/AuthenticatedLayout.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import QRCodeGenerator from "./pages/QRCodeGenarator.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "app",
        element: <AuthenticatedLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "ipAddressFinder", element: <IPAddressFinder /> },
          { path: "languageTranslator", element: <LanguageTranslator /> },
          { path: "movieSearchEngine", element: <MovieSearchEngine /> },
          { path: "QRCodeGenerator", element: <QRCodeGenerator /> },
          { path: "quizApp", element: <QuizApp /> },
          { path: "todoApp", element: <TodoApp /> },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" richColors={true} />
  </React.StrictMode>
)
