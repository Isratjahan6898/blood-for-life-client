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
import Profile from "../Pages/Deshboard/Profile/Profile";
import AllUser from "../Pages/Deshboard/Admin/AllUser";
import AdminHome from "../Pages/Deshboard/Admin/AdminHome";
import BloodRequest from "../Pages/Deshboard/Admin/BloodRequest";
import UpdateAdmin from "../Pages/Deshboard/Admin/UpdateAdmin";
import ContentManagement from "../Pages/Deshboard/Admin/ContentManagement";

import VolunteerHome from "../Pages/Deshboard/Volunteer/VolunteerHome";
import VolunteerBloodRequest from "../Pages/Deshboard/Volunteer/VolunteerBloodRequest";
import VolunteerContent from "../Pages/Deshboard/Volunteer/VolunteerContent";



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
             //doner
          // index:true,
          path:'donerHome',
          element:<DonerHome></DonerHome>
       },


        {
          path:'my-donation-page',
          element:<MyDonationPage></MyDonationPage>
        },
        {
          path:'all-blood-donation-request',
          element:<CreateDonation></CreateDonation>
        },
        {
          path:'updateBloodData/:id',
          element:<UpdateData></UpdateData>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blood/${params.id}`)
        },
      
         //admin
        {
          path:'allUser',
          element:<AllUser></AllUser>
        },

        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'createDonation',
          element:<BloodRequest></BloodRequest>
        },
        {
          path:'adminUpdate/:id',
          element:<UpdateAdmin></UpdateAdmin>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blood/${params.id}`)
        },

        {
          path:'content-management',
          element:<ContentManagement></ContentManagement>
        },

       
      {
        path:'volunteerHome',
        element:<VolunteerHome></VolunteerHome>
      },       

      {
       path:'all-blood-donation',
       element:<VolunteerBloodRequest></VolunteerBloodRequest>
      },

      {
        path:'content-managemen',
        element:<VolunteerContent></VolunteerContent>
      },
        

        {
          path:'profile',
          element:<Profile></Profile>,
         
        },
       ]
   }
 

    
  ]);