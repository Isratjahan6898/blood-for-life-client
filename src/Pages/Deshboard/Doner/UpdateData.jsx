import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosCommon from '../../../hooks/useAxiosCommon';


const UpdateData = () => {
    const navigate = useNavigate()

    const axiosCommon = useAxiosCommon();
   

    const item = useLoaderData();
    console.log(item);

    const { requesterName,
    requesterEmail,  recipientName ,district,upazila,hospital,date,time,
        address, message, _id} = item;
    const { handleSubmit, register, reset } = useForm();

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



    const onSubmit = (data) => {
        console.log(data);

        const bloodData ={
               recipientName:data.recipientName ,
               district: data.district,
               upazila:data.upazila,
               hospital:data.hospital,
               date: data.date,
               time: data.time,
                address:data.address, 
                message: data.message
             }

             axiosCommon.patch(`/blood/${_id}`, bloodData)
            .then(res=>{
                console.log(res.data);
                if(res.data.modifiedCount >0){
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "update has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });

                      navigate('/deshboard/my-donation-page')
                }
            })

    }
    return (
        <div>
            

            <form  onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
            {/* user name */}
          <div className="form-control">
    <label className="label">
      <span className="label-text">Requester Name</span>
    </label>
    <input type="text" name="userName" {...register("requesterName")} defaultValue={requesterName} placeholder="requester Name" className="input w-[350px] text-black lg:w-[350px] input-bordered" disabled required />
  </div>
      
   {/* user email */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">requester email</span>
    </label>
    <input type="text"  name="userEmail" {...register("requesterEmail")} defaultValue={requesterEmail} placeholder="requester email" className="input w-[350px] lg:w-[350px] input-bordered" disabled required />
  </div>


          </div>

         



          <div className="flex flex-col md:flex-row lg:flex-row   md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
    {/* recipient name */}
          <div className="form-control">
         <label className="label">
      <span className="label-text">recipient name</span>
    </label>
    <input type="text" name="recipientName" defaultValue={recipientName} {...register("recipientName")} placeholder="recipientName" className="input w-[350px] lg:w-[350px] input-bordered"  required />
         </div>
      
  {/* district */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">District</span>
    </label>
    <select name='district' defaultValue={district} {...register("district")} className="select w-full max-w-xs">
                 
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
    <select name="upazila" defaultValue={upazila} {...register("upazila")} className="select  w-full max-w-xs">


{
    upazilas.map(upazila=>  <option key={upazila.id}>{upazila.name}</option> )
}

</select>
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Hospital Name</span>
    </label>
    <input type="text" defaultValue={hospital} {...register("hospital")} name="hospital"  placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>



          </div>



          {/* current user */}

         
     

      <div className="flex flex-col md:flex-row lg:flex-row md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Donation Date</span>
    </label>
    <input type="date"  name="date" defaultValue={date} {...register("date")} placeholder="date" className="input w-[350px] lg:w-[350px] input-bordered" required />

  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Donation Time</span>
    </label>
    <input type="text" name="time" defaultValue={time} {...register("time")} placeholder="instaction" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>



          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Full Address</span>
    </label>
    <input type="text"  name="address" defaultValue={address} {...register("address")}  placeholder="Address" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Request message</span>
    </label>
    <input type="text" name="message" defaultValue={message} {...register("message")}  placeholder="type message" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>






      


    <div className=" md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <button className="btn md:w-[700px] w-[350px] bg-red-400 text-white">Update Button </button>
  </div>
    </div>

      </form>
        </div>
    );
};

export default UpdateData;