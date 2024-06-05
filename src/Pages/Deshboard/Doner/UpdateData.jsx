import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
// import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";


const UpdateData = () => {const {
    register,
    handleSubmit
    
   
  } = useForm

    const item= useLoaderData();
    console.log(item);
   

    const {recipientName,  district, hospital, 
        message, time, upazila, address, date,} = item;

    const {user}= useAuth();



    // const axiosSecure = useAxiosCommon()
   
    const [districts, setDistricts]= useState([]);
    const [upazilas, setUpazilas]= useState([])
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


  const onSubmit = data =>{
    console.log(data);
  }

      


  
 
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-red-500 my-[30px]">Update Form</h1>

            <div>
            <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
            {/* user name */}
          <div className="form-control">
    <label className="label">
      <span className="label-text">Requester Name</span>
    </label>
    <input type="text" name="userName" {...register("userName")} defaultValue={user?.displayName} placeholder="requester Name" className="input w-[350px] text-black lg:w-[350px] input-bordered" disabled required />
  </div>
      
   {/* user email */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">requester email</span>
    </label>
    <input type="text"  name="userEmail" {...register("userEmail")} defaultValue={user?.email} placeholder="requester email" className="input w-[350px] lg:w-[350px] input-bordered" disabled required />
  </div>


          </div>

         



          <div className="flex flex-col md:flex-row lg:flex-row   md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
    {/* recipient name */}
          <div className="form-control">
         <label className="label">
      <span className="label-text">recipient name</span>
    </label>
    <input type="text" name="recipientName" {...register("receipientName")} defaultValue={recipientName}  placeholder="recipientName" className="input w-[350px] lg:w-[350px] input-bordered"  required />
         </div>
      
  {/* district */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">District</span>
    </label>
    <select name='district' {...register("district")} defaultValue={district} className="select w-full max-w-xs">
                 
                 {
                  districts.map(district=>
  
                      <option key={district.id}>{district.name}</option>
                  )
                 }
  
                 
              </select>
  </div>


          </div>



     

         



         


          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Upazila</span>
    </label>
    <select name="upazila" {...register("upazila")} defaultValue={upazila} className="select  w-full max-w-xs">


{
    upazilas.map(upazila=>  <option key={upazila.id}>{upazila.name}</option> )
}

</select>
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Hospital Name</span>
    </label>
    <input type="text"  {...register("hospital")} name="hospital"  defaultValue={hospital} placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>



          </div>



          {/* current user */}

         
     

      <div className="flex flex-col md:flex-row lg:flex-row md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Donation Date</span>
    </label>
    <input type="date"  {...register("date")} name="date" defaultValue={date}  placeholder="date" className="input w-[350px] lg:w-[350px] input-bordered" required />

  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Donation Time</span>
    </label>
    <input type="text" name="time" {...register("time")} defaultValue={time}  placeholder="instaction" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>



          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Full Address</span>
    </label>
    <input type="text"  name="address" {...register("address")} defaultValue={address}  placeholder="Address" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Request message</span>
    </label>
    <input type="text" name="message" {...register("message")} defaultValue={message}  placeholder="type message" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>






      


    <div className=" md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
      <input type="submit" value="Update" />
    {/* <button className="btn md:w-[700px] w-[350px] bg-red-400 text-white">Update Button </button> */}
  </div>
    </div>

      </form>
            </div>
        </div>
    );
};

export default UpdateData;