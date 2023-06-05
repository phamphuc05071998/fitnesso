import React, {lazy} from "react";



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import About from "./Pages/About";

import  { loadDetailCourse } from "./Pages/DetaiFree";

import { loadDetailCourse as loader } from "./Pages/Product";
import Authenticate from "./Pages/Authenticate";

const Home = lazy(() => import('./Pages/Home') );
const FreeWorkout  = lazy(() => import('./Pages/FreeWorkout'))
// const Authenticate = lazy(() => import('./Pages/Authenticate'))
const DetailFree = lazy(() => import('./Pages/DetaiFree'))
const Product = lazy(() => import('./Pages/Product'))
const Shop = lazy(() => import('./Pages/Shop'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => import('./Pages/Home').then((module) => module.getPlans()),
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
            loader: () => import('./Pages/FreeWorkout').then((module) => module.loader()),
          },
          {
            path: ":id",
            element: <DetailFree />,
            loader: loadDetailCourse,
          },
        ],
      },

      {
        path: "/shop",
        children: [
          {
            path: "",
            element: <Shop />,
            loader: () => import('./Pages/Shop').then((module) => module.loader()),
          },
          {
            path: ":id",
            element: <Product />,
            loader: loader,
          },
        ],
      },
      {
        path: "/auth/:mode",
        element: <Authenticate />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
