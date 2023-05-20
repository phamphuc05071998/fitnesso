import React from "react";


import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>
      }, {
        path:'/about',
        element: <About/>
      }
    ]
  },
]);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
