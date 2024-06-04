import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdOutlineBrowserUpdated } from "react-icons/md";


const MyDonationPage = () => {
    const {user}= useAuth();

   
    const axiosCommon = useAxiosCommon();

    const { data: bloodData = [], isLoading } = useQuery({
        queryKey: ['my-donation', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                console.error('User email is not available');
                return [];
            }
    
            try {
                const { data } = await axiosCommon.get(`/my-donation/${user?.email}`);
                console.log('Received data:', data);  // Log received data
                return data;
            } catch (error) {
                console.error('Error fetching donation data:', error);
                return [];
            }
        },
    });


    

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }
   

    return (
        <div className=" mt-[30px]">
         <h1 className="text-center font-bold text-3xl text-red-800">My All Donation Request</h1>

         <div>
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
        <th>Edit</th>
        <th>Delete</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>

        {
            bloodData.map(blood=>
                
      <tr key={blood._id} className="bg-base-200">
      <th>{blood.recipientName}</th>
      <td>{blood.district} {blood.upazila}</td>
      <td>{blood.time}</td>
      <td>{blood.date}</td>
      <td>{blood.status}</td>
      <td>{blood.requesterName}  {blood.requesterEmail}</td>
      <td><button><MdDelete  className="text-3xl"/></button></td>
      <td><button><MdOutlineBrowserUpdated  className="text-3xl"/></button></td>
      <td><button><FaEye  className="text-3xl"/></button></td>

    </tr>
            )
        }
{/*       
      <tr className="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
     
    </tbody>
  </table>
</div>
         </div>
        </div>
    );
};

export default MyDonationPage;