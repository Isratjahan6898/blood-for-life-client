import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Deshboard/Sidebar/Sidebar";


const Deshboard = () => {
    return (
        <div>

            <div className="relative min-h-screen md:flex">
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1 md:ml-64">
                <div className="p-5">
                <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Deshboard;