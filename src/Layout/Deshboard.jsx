import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Deshboard/Sidebar/Sidebar";



const Deshboard = () => {
    return (
        <div>

            <div className="relative  md:flex">
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1 md:ml-80">
                
                <div>
                <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Deshboard;