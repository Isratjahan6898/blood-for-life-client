import { FaHome, FaUsers } from "react-icons/fa";
import MenuItem from "../MenuItem";

import { MdContentPasteSearch, MdOutlineFindInPage } from "react-icons/md";


const AdminMenu = () => {
    return (
        <div>
            <MenuItem label='AdminHome' address='/deshboard/adminHome' icon={FaHome}/>
            <MenuItem label='AllUsers' address='/deshboard/allUser' icon={FaUsers }/>
            <MenuItem label='All-Donation-Request' address='/deshboard/createDonation' icon=   
           {MdOutlineFindInPage}/>

<MenuItem label='Content-management' address='/deshboard/content-management' icon={MdContentPasteSearch }/>
        </div>
    );
};

export default AdminMenu;