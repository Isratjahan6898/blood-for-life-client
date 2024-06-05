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
import DonationRequest from "../Pages/DonationRequest/DonationRequest";

import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateData from "../Pages/Deshboard/Doner/UpdateData";
import Modal from "../Pages/Modal/Modal";



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
       
        {
          path:'/donationRequest',
          element:<DonationRequest></DonationRequest>
        },
        {
          path:'/viewDetails/:id',
          element:<ViewDetails></ViewDetails>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blood/${params.id}`)

        }
      ]},

      // {
      //   path:'/donationRequest',
      //   element:<DonationRequest></DonationRequest>
      // },

   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   },
   
   {
      path:'/openModal',
      element:<Modal></Modal>
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
        },
        {
          path:'updateBloodData/:id',
          element:<UpdateData></UpdateData>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blood/${params.id}`)
        }
       ]
   }
 

    
  ]);