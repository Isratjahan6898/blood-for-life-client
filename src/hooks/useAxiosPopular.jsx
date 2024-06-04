import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";


const useAxiosPopular = () => {
    const axiosCommon= useAxiosCommon();
    const {user}= useAuth();

   const {data: bloodDatas = [], ispending: loading, refetch}= useQuery({
    queryKey:['bloodDatas'],
    queryFn: async ()=>{
        const res = await axiosCommon.get(`/my-donation/email=${user?.email}`)
        return res.data
    }
   })

   return [ bloodDatas, refetch, loading];
};

export default useAxiosPopular;