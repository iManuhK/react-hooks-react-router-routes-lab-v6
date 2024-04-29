import React from "react";
import Home from "./pages/Actors"
import ErrorPage from "./pages/ErrorPage";
import Actors from "./pages/Actors";
import Directors from "./pages/Actors";
import Movie from "./pages/Movie"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movies/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  }
  ];

export default routes;