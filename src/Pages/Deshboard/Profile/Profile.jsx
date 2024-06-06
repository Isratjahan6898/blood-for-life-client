import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";


const Profile = () => {
    const {user}= useAuth();

    
    return (
        <div>
               
         profile
        </div>
    );
};

export default Profile;