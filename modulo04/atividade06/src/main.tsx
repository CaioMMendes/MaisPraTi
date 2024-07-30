import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Login from "./pages/login/login"

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
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",

// font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
//     monospace;
