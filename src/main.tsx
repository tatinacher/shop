import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { AboutPage, CatalogPage, MainPage } from "./pages";
import { catalog } from "./app/data.ts";

/// <reference types="vite-plugin-svgr/client" />

const data = [...catalog, ...catalog, ...catalog];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "catalog",
        element: <CatalogPage data={data} />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
