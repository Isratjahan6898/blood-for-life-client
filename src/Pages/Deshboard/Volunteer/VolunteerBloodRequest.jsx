import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


const VolunteerBloodRequest = () => {

    const axiosCommon = useAxiosCommon();

    const { data: bloodData= [], isLoading} = useQuery({
        queryKey: ['bloodData'],
        queryFn: async () => {
       
    
          try {
            const { data } = await axiosCommon.get(`/blood`);
            console.log('Received data:', data);  // Log received data
            return data;
          } catch (error) {
            console.error('Error fetching donation data:', error);
            return [];
          }
        },
      });
      console.log(bloodData);

      if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    return (
        <div>
             <div>
           

           <div className=" mt-[30px]">
   <h1 className="text-center font-bold text-3xl mb-[40px] text-red-800"> All Donation Request</h1>
   

   <div className="">
     <div className="overflow-x-auto">
       <table className="table">
         {/* head */}
         <thead>
           <tr>

             <th>recipient name</th>
             <th>recipient location</th>
             <th>donation time</th>
             <th>donation date</th>
             <th>donation status</th>
             <th>donor</th>
             
             <th>View Details</th>
           </tr>
         </thead>
         <tbody>

           {
             bloodData.map(blood =>

               <tr key={blood._id} className="bg-base-200">
                 <th>{blood.recipientName}</th>
                 <td>{blood.district} {blood.upazila}</td>
                 <td>{blood.time}</td>
                 <td>{blood.date}</td>
                 <td>{blood.status}</td>
                 
               
       
                 <td>{blood.requesterName}  {blood.requesterEmail}</td>
                 

                  
                 <Link to={`/viewDetails/${blood._id}`}><td><button><FaEye className="text-3xl" /></button></td></Link>

               </tr>
             )
           }
   

         </tbody>
       </table>
     </div>
   </div>
 </div>
       </div>
        </div>
    );
};

export default VolunteerBloodRequest;