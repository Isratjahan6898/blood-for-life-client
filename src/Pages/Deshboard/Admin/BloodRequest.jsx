import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { MdDelete, MdOutlineBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";


const BloodRequest = () => {
    
    const axiosCommon = useAxiosCommon();

    const { data: bloodData= [], isLoading, refetch} = useQuery({
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

    const handleDelete = blood => {


        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axiosCommon.delete(`/my-donation/${blood._id}`)
            console.log(res.data);
            refetch()
            if(res.data.deletedCount> 0){
              Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
            }
    
          }
          
    
        })
      }
      
    return (
        <div>
           

            <div className=" mt-[30px]">
    <h1 className="text-center font-bold text-3xl text-red-800"> All Donation Request</h1>
    

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
              <th>Delete</th>
              <th>Edit</th>
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
                  <td><button
                     onClick={() => handleDelete(blood)}
                  ><MdDelete className="text-3xl text-red-600" /></button></td>
                   <td><Link to={`/deshboard/adminUpdate/${blood._id}`}><button ><MdOutlineBrowserUpdated className="text-3xl text-green-600 " /></button></Link></td>

                   
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
    );
};

export default BloodRequest;