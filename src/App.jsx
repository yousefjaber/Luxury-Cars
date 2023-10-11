import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs.jsx";
import Category from "./pages/Category.jsx";
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
      {path:"/Category",element:<Category/>},
      {path:"/ContactUs",element:<ContactUs/>},
      {path:"/Blog",element:<Blog/>},

    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
