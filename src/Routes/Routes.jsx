import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Deshboard from "../Layout/Deshboard";
import MyDonationPage from "../Pages/Deshboard/Doner/MyDonationPage";
import DonerHome from "../Pages/Deshboard/Doner/DonerHome";
import CreateDonation from "../Pages/Deshboard/Doner/CreateDonation";



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
      
      ]},

   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   }, 
   
   {
       path:'/deshboard',
       element:<Deshboard></Deshboard>,
       children:[
        {
          path:'donerHome',
          element:<DonerHome></DonerHome>
       },


        {
          path:'my-donation-page',
          element:<MyDonationPage></MyDonationPage>
        },
        {
          path:'createDonation',
          element:<CreateDonation></CreateDonation>
        }
       ]
   }
 

    
  ]);