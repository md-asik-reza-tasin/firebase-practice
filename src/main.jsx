import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import SimpleRegister from "./SimpleRegister.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/simpleregister",
        element: <SimpleRegister></SimpleRegister>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
