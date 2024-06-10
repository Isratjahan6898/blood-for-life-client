import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";


const AdminHome = () => {
    const {user}= useAuth();
    
    const axiosCommon = useAxiosCommon();

    

    const { data: userss= [], isLoading} = useQuery({
        queryKey: ['userss'],
        queryFn: async () => {
       
    
          try {
            const { data } = await axiosCommon.get(`/user`);
            console.log('Received data:', data);  // Log received data
            return data;
          } catch (error) {
            console.error('Error fetching donation data:', error);
            return [];
          }
        },
      });


      const { data: bloodData= []} = useQuery({
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
      
      const { data: users= []} = useQuery({
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
      const totalPrice = users.reduce((sum, user) => sum + parseFloat(user.price), 0);




      if (isLoading) {
          return <span className="loading loading-spinner loading-lg"></span>;
      }
    return (
        <div>
            <div className="mt-[50px]"> <h1 className="text-center font-bold lg:text-3xl text-red-800">WelCome Admin: {user?.displayName}</h1>
            
            </div>

            <div className="my-[100px] text-center">
            <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Totla Users</div>
    <div className="stat-value">{userss.length}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Funding</div>
    <div className="stat-value text-secondary">${totalPrice}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">total blood donation request</div>
    <div className="stat-value">{bloodData.length}</div>
   
  </div>
  
</div>
            </div>
            
        </div>
    );
};

export default AdminHome;