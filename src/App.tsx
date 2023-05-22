import React from "react";


import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import About from "./Pages/About";
import FreeWorkout from "./Pages/FreeWorkout";
import Shop from "./Pages/Shop";
import Detail from "./Pages/Detail";
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
      },
      {
        path:'/free-workouts',
        element:<FreeWorkout/>
      },{
        path: '/shop'
        ,children: [
          { 
            path:"",
            element:<Shop/>
          },
          {
            path: ':id',
            element: <Detail/>
          }
        ]
       
      }, 

    ]
  },
]);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
