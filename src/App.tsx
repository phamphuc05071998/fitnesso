import React from "react";

import Home, { getPlans } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import About from "./Pages/About";
import FreeWorkout from "./Pages/FreeWorkout";
import Shop from "./Pages/Shop";
import DetailFree, { loadDetailCourse } from "./Pages/DetaiFree";
import Product from "./Pages/Product";
import { loadDetailCourse as loader } from "./Pages/Product";
import Authenticate from "./Pages/Authenticate";
import { loader as loadFreeCourses } from "./Pages/FreeWorkout";
import { loader as loadPaidCourse } from "./Pages/Shop";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getPlans},
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
            loader: loadFreeCourses
          },
          {
            path: ":id",
            element: <DetailFree />,
            loader: loadDetailCourse
          },
        ],
      },

      {
        path: "/shop",
        children: [
          {
            path:'',
            element: <Shop/>,
            loader: loadPaidCourse
          },
          {
            path: ':id',
            element: <Product/>,
            loader: loader
          }
        ]
      },
      {
        path: '/auth/:mode',
        element: <Authenticate/>
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
