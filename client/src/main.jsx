import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import CreateDream from "./pages/CreateDream.jsx";
import ConfirmCreateDream from "./pages/ConfirmCreateDream.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/createdream",
    element: <CreateDream />,
  },
  {
    path: "/reviewdream",
    element: <ConfirmCreateDream />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
