import { useEffect, useState } from "react";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";



const Profile = () => {
    const axiosCommon= useAxiosCommon();
    const { user } = useAuth();

    const { data: userData = [],  refetch} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
          if (!user?.email) {
            console.error('User email is not available');
            return [];
          }
    
          try {
            const { data } = await axiosCommon.get(`/user/${user?.email}`);
            console.log('Received data:', data);  // Log received data
            return data;
          } catch (error) {
            console.error('Error fetching donation data:', error);
            return [];
          }
        },
      });
   

    

    const [districts, setDistricts]= useState([]);

    const [upazilas, setUpazilas]= useState([]);
    const [editMode, setEditMode] = useState(false); // State to toggle edit mode

    
    useEffect(()=>{

        fetch('/districts.json')
        .then(res=>res.json())
        .then(data=> setDistricts(data))
    },[])

    useEffect(()=>{

        fetch('/upazila.json')
        .then(res=>res.json())
        .then(data=> setUpazilas(data))
    },[])

  
    return (
       <div>
         <div className="text-center my-[50px] text-red-600 text-4xl font-bold">Update profile</div>
            <div className="my-[60px]">
                <form  className='space-y-6 ng-untouched ng-pristine ng-valid'>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>Name</label>
                            <input type='text' name='name' id='name' defaultValue={userData.name} placeholder='Enter Your Name Here' className='w-fll px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' readOnly={!editMode} />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>Select Image:</label>
                            <input required type='file' id='image' name='image' accept='image/*' readOnly={!editMode} />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>Email address</label>
                            <input type='email' disabled name='email' id='email' defaultValue={userData.email} placeholder='Enter Your Email Here' className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' readOnly />
                        </div>
                        <div>
                            <label htmlFor='bloodGroup' className='block mb-2 text-sm'>Blood Group</label>
                            <select name='bloodGroup' id='bloodGroup' defaultValue={userData.bloodGroup} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' readOnly={!editMode}>
                                <option value='A+'>A+</option>
                                <option value='A-'>A-</option>
                                <option value='B+'>B+</option>
                                <option value='B-'>B-</option>
                                <option value='AB+'>AB+</option>
                                <option value='AB-'>AB-</option>
                                <option value='O+'>O+</option>
                                <option value='O-'>O-</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='district' className='block mb-2 text-sm'>District</label>
                            <select name='district' id='district' defaultValue={userData.district} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' readOnly={!editMode}>
                                {districts.map(district => (
                                    <option key={district.id} value={district.name}>{district.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='upazila' className='block mb-2 text-sm'>Upazila</label>
                            <select name='upazila' id='upazila' defaultValue={userData.upazila} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' readOnly={!editMode}>
                                {upazilas.map(upazila => (
                                    <option key={upazila.id} value={upazila.name}>{upazila.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        {editMode ? (
                            <button type='submit' className='bg-rose-500 w-full rounded-md py-3 text-white'>Save</button>
                        ) : (
                            <button type='button' onClick={() => setEditMode(true)} className='bg-rose-500 w-full rounded-md py-3 text-white'> Edit</button>
                        )}
                    </div>
                </form>
            </div>
       </div>
    );
};

export default Profile;