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

import Profile from "../Pages/Deshboard/Profile/Profile";
import AllUser from "../Pages/Deshboard/Admin/AllUser";
import AdminHome from "../Pages/Deshboard/Admin/AdminHome";
import BloodRequest from "../Pages/Deshboard/Admin/BloodRequest";
import UpdateAdmin from "../Pages/Deshboard/Admin/UpdateAdmin";
import ContentManagement from "../Pages/Deshboard/Admin/ContentManagement";

import VolunteerHome from "../Pages/Deshboard/Volunteer/VolunteerHome";
import VolunteerBloodRequest from "../Pages/Deshboard/Volunteer/VolunteerBloodRequest";
import VolunteerContent from "../Pages/Deshboard/Volunteer/VolunteerContent";
import SearchPage from "../Pages/SearchPage/SearchPage";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import VolunteerRoute from "./VolunteerRoute";
import Funding from "../Pages/Funding/Funding";
import Payment from "../Pages/Funding/Payment";




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
          path:'/searchPage',
          element:<SearchPage></SearchPage>
        }, 
       
        {
          path:'/donationRequest',
          element:<DonationRequest></DonationRequest>
        },
        {
          path:'/viewDetails/:id',
          element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blood/${params.id}`)

        },

        {
          path:'/funding',
       element:<Funding></Funding>
        }
       
      ]},

   
  //  {
  //       path:'/funding',
  //       element:<Funding></Funding>
  //  },
   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/register',
    element:<Register></Register>
   },

  
   
   {
      path:'/payment',
      element:<Payment></Payment>
   },
   
   {
       path:'/deshboard',
       element:<PrivateRoutes>
        <Deshboard></Deshboard>
        </PrivateRoutes>,
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
          element:<PrivateRoutes>
            <AdminRoutes>
              <AllUser></AllUser>
              </AdminRoutes>
          </PrivateRoutes>
        },

        {
          path:'adminHome',
          element:<PrivateRoutes>
            <AdminRoutes>
            <AdminHome></AdminHome>
            </AdminRoutes>
          </PrivateRoutes>
        },
        {
          path:'createDonation',
          element:<PrivateRoutes>
            <AdminRoutes>
            <BloodRequest></BloodRequest>
            </AdminRoutes>
          </PrivateRoutes>
        },
        {
          path:'adminUpdate/:id',
          element:<PrivateRoutes>
            <AdminRoutes>
            <UpdateAdmin></UpdateAdmin>
            </AdminRoutes>
          </PrivateRoutes>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/blood/${params.id}`)
        },

        {
          path:'content-management',
          element:<PrivateRoutes>
            <AdminRoutes>
            <ContentManagement></ContentManagement>
            </AdminRoutes>
          </PrivateRoutes>
        },

       
      {
        path:'volunteerHome',
        element:<PrivateRoutes>
          <VolunteerRoute>
          <VolunteerHome></VolunteerHome>
          </VolunteerRoute>
        </PrivateRoutes>
      },       

      {
       path:'all-blood-donation',
       element:<PrivateRoutes>
        <VolunteerRoute>
        <VolunteerBloodRequest></VolunteerBloodRequest>
        </VolunteerRoute>
       </PrivateRoutes>
      },

      {
        path:'content-managemen',
        element:<PrivateRoutes>
          <VolunteerRoute>
          <VolunteerContent></VolunteerContent>
          </VolunteerRoute>
        </PrivateRoutes>
      },
        

        {
          path:'profile',
          element:<Profile></Profile>,
         
        },
       ]
   }
 

    
  ]);