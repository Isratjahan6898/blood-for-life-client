import { FaHome } from "react-icons/fa";
import MenuItem from "../MenuItem";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineFindInPage } from "react-icons/md";

const HostMenu = () => {
    return (
        <div>
            <MenuItem label='Home' address='/deshboard/donerHome' icon={FaHome}/>
            <MenuItem label='My-Donation-page' address='/deshboard/my-donation-page' icon={BsGraphUp}/>
            <MenuItem label='Create Donation Page' address='/deshboard/all-blood-donation-request' icon=   
           {MdOutlineFindInPage}/>
        </div>
    );
};

export default HostMenu;