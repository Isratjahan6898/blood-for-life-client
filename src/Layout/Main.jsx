

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const Main = () => {
    return (
        <div>
           
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          {/* <Banner></Banner> */}
        </div>
    );
};

export default Main;