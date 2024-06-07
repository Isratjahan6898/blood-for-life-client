import { FaHome } from "react-icons/fa";
import MenuItem from "../MenuItem";
import { MdContentPasteSearch } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";


const Volunteer = () => {
    return (
        <div>
             <div>
            <MenuItem label='VolunteerHome' address='/deshboard/volunteerHome' icon={FaHome}/>
            <MenuItem label='All-Donation-Request' address='/deshboard/all-blood-donation' icon={BsGraphUp}/>
            <MenuItem label='Create Donation Page' address='/deshboard/content-managemen' icon=   
           {MdContentPasteSearch}/>
        </div>
        </div>
    );
};

export default Volunteer;