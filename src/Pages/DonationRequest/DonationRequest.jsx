import { useEffect, useState } from "react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


const DonationRequest = () => {
  const axiosCommon= useAxiosCommon();

  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await axiosCommon.get('/api/donate/pending');
        setPendingRequests(response.data);
      } catch (error) {
        console.error('Error fetching pending donation requests:', error);
      }
    };

    fetchPendingRequests();
  }, [axiosCommon]);
    return (
        <div>
           <div className="hero h-[400px] mb-[40px] bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/CWFCHcK/pexels-shvetsa-3786215.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello Blood Donar</h1>
      <p className="mb-5">Donating one unit of blood may save the lives of up to three people, according to the American Red Cross. Blood donors provide a vital service to the community. Making a difference in the lives of others can boost a donors sense of well-being.</p>
     
    </div>
  </div>
</div>


           
           <div>
               <h1 className="text-red-700 font-bold text-3xl text-center mb-[50px] ">Find All Blood Request</h1>


               <div className="my-[50px]">


               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Recipient Name</th>
        <th>Location</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
       {
       
          pendingRequests.map((pending, index)=><tr key={pending._id}>
          <th>{index+1}</th>
          <td>{pending. recipientName}</td>
          <td>{pending.district}  
            {pending.upazila}
            
            
            </td>
          <td>{pending.date}</td>
          <td>{pending.time}</td>
          <Link to={`/viewDetails/${pending._id}`}><td><button><FaEye className="text-3xl" /></button></td></Link>
        </tr>)
         
       }
      {/* <tr>
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
        </div>
    );
};

export default DonationRequest;