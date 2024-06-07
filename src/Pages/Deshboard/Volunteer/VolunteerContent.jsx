import { Link } from "react-router-dom";


const VolunteerContent = () => {
    return (
        <div>
             <div className="flex justify-end my-[40px]">
            <Link to='/blog'><div className="btn bg-red-400 text-white">Add Blog</div></Link>
        </div> 
        </div>
    );
};

export default VolunteerContent;