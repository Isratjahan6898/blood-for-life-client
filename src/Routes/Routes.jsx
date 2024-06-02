import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        
        // {
        //        path:'/login',
        //        element:<Login></Login>
        // }
      ]},

   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   }
 

    
  ]);