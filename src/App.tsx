import React from "react";


import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>
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
