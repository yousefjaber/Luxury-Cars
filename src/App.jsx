import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CarProvider } from "./context/CarContext";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs.jsx";
import Hourly from "./pages/Hourly.jsx";
import CarList from "./pages/CarList.jsx";
import Blog from "./pages/Blog.jsx";
import RootLayout from "./components/Root";

const Router =createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      { path: "/home",element:<Home/>},
      {path:"/CarList",element:<CarList/>},
      {path:"/Hourly",element:<Hourly/>},
      {path:"/ContactUs",element:<ContactUs/>},
      {path:"/Blog",element:<Blog/>},

    ]
  }
]);

function App() {
  return (
    <CarProvider>
      <RouterProvider router={Router} />
    </CarProvider>
  );
}

export default App;
