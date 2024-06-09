import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useVlounteer = () => {
    
        const{user}= useAuth();
   const axiosSecure= useAxiosSecure();
   const{data: isVolunteer}= useQuery({
    queryKey:[user?.email, 'isVolunteer'],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/user/volunteer/${user?.email}`);
        console.log(res.data);
        return res.data?.volunteer
    }

   })
   return [isVolunteer];
   
};

export default useVlounteer;