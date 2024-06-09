import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import usePagination from "../../../hooks/usePagination";
import Pagination from '@mui/material/Pagination';

// import { useState } from "react";


const AllUser = () => {

    const axiosCommon = useAxiosCommon();
    // const [users, setUsers] = useState([]);
    const axiosSecure= useAxiosSecure();
    const itemsPerPage = 6;


    const { data: userss= [], isLoading, refetch} = useQuery({
      queryKey: ['userss'],
      queryFn: async () => {
     
  
        try {
          const { data } = await axiosSecure.get(`/user`);
          console.log('Received data:', data);  // Log received data
          return data;
        } catch (error) {
          console.error('Error fetching donation data:', error);
          return [];
        }
      },
    });
    
    const {
      currentPage,
      totalPages,
      startIndex,
      endIndex,
      setPage
    } = usePagination(userss.length, itemsPerPage);
    const currentItems = userss.slice(startIndex, endIndex + 1);

    const handleChange = (event, value) => {
      setPage(value);
    };

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    const handleRoleChange = (userId, newRole) => {
      

        axiosCommon.put(`api/users/${userId}/role`, { role: newRole })
            .then(response => {
              refetch();
                // setUsers(users.map(user => 
                //     user._id === userId ? { ...user, role: newRole } : user
                // ));
              
            })
            .catch(error => console.error('Error updating user role:', error));
            
    };



    const handleStatusChange = (userId, newStatus) => {
      console.log(newStatus);
        axiosCommon.put(`api/users/${userId}/status`, { status: newStatus })
            .then(response => {
              refetch();
                // setUsers(users.map(user => 
                //     user._id === userId ? { ...user, status: newStatus } : user
                // ));
            })
        
            .catch(error => console.error('Error updating user status:', error));
            
    };


    return (
        <div className="mt-[40px]">
            <h1 className="text-center font-bold text-4xl text-red-800">All Users</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        currentItems.map(user=> <tr key={user._id}>

      
       
       
            <td>
             <div className="flex items-center gap-3">
               <div className="avatar">
                 <div className="mask mask-squircle w-12 h-12">
                   <img src={user.image} alt="Avatar Tailwind CSS Component" />
                 </div>
               </div>
               <div>
                 <div className="font-bold">{user.name}</div>
                 
               </div>
             </div>
           </td>
           <td>
             {user.email}
             
           </td>
           <td>{user.role}</td>
           <td>{user.status}</td>
           <th>
           <details className="dropdown">
  <summary className="m-1 btn ">Status</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li className="text-green-600"><a onClick={() => handleStatusChange(user._id, 'active')}>Active</a></li>
    <li><a   onClick={() => handleStatusChange(user._id, 'blocked')}className="text-red-600">Blocked</a></li>

  </ul>
</details>
           </th> 

           <th>
           <details className="dropdown">
  <summary className="m-1 btn">Update Role</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a onClick={() => handleRoleChange(user._id, 'admin')}>Admin</a></li>
    <li><a  onClick={() => handleRoleChange(user._id, 'volunteer')}>Voulenteer</a></li>
    <li><a  onClick={() => handleRoleChange(user._id, 'donor')}>Doner</a></li>
  </ul>
</details>
           </th> 
         </tr>)
     }
    
      
      
    </tbody>

    
  </table>
</div>

<div className="flex justify-center mb-[60px] mt-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </div>
        </div>
    );
};

export default AllUser;