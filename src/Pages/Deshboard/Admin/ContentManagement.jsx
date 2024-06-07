import { Link } from "react-router-dom";


const ContentManagement = () => {
    return (
        <div className="flex justify-end my-[40px]">
            <Link to='/blog'><div className="btn bg-red-400 text-white">Add Blog</div></Link>
        </div>
    );
};

export default ContentManagement;