import React from "react";

import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import About from "./Pages/About";
import FreeWorkout from "./Pages/FreeWorkout";
import Shop from "./Pages/Shop";
import DetailFree from "./Pages/DetaiFree";
import Product from "./Pages/Product";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/free-workouts",
        children: [
          {
            path: "",
            element: <FreeWorkout />,
          },
          {
            path: ":id",
            element: <DetailFree />,
          },
        ],
      },
      {
        path: "/shop",
        children: [
          {
            path:'',
            element: <Shop/>
          },
          {
            path: ':id',
            element: <Product/>
          }
        ]
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
