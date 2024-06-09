import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";


const Funding = () => {
    const axiosCommon= useAxiosCommon();

    const { data: users= [], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
       
    
          try {
            const { data } = await axiosCommon.get(`/payment`);
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
        <div>
            <div className="">
            <div className="hero bg-fixed h-[350px] " style={{backgroundImage: 'url(https://i.ibb.co/xXY5DFm/pexels-kirill-dratsevich-237907001-12227661.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Fundings Page
Critically Needed</h1>
      <p className="mb-5">Blood donation refers to a practice where people donate their blood to people so it helps them with their health problems. Blood is one of the most essential fluids of our body that helps in the smooth functioning of our body. </p>
      
    </div>
  </div>
</div>
        </div>

        <div className="my-[80px]">

        <div className="flex justify-end my-[40px] mr-[40px]">
            <Link to='/payment'><div className="btn bg-red-400 text-white">Payment</div></Link>
           </div>

           <div>
            <h1 className="text-center font-bold text-4xl text-red-800 mt-[30px]">List Of User Who Give Fund</h1>
           </div>

           <div className="my-[70px]">

           <div className="overflow-x-auto mx-[80px]">
  <table className="table table-zebra ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Fund Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>

        {
            users.map((user, index)=>
                <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.price}</td>
                <td>{user.date}</td>
                
              </tr> 

            )
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

export default Funding;