import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const CreateDonation = () => {
    const {user}= useAuth();
    const navigate = useNavigate()

    const axiosSecure = useAxiosCommon()
    console.log(user);
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




    const handleSubmit = async e =>{
        e.preventDefault();
        const form = e.target;
        const requesterName= user?.displayName;
        const requesterEmail = user?.email;
     
        const recipientName= form.recipientName.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const hospital = form.hospital.value;
        const date = form.date.value;
        const time = form.time.value;
        const address = form.address.value;
        const message= form.message.value;
        const status = 'pending'


        try{
            const bloodData ={
              requesterName,requesterEmail,    recipientName ,district,upazila,hospital,date,time,
                  address, message,status
            }

            // post server-

            axiosSecure.post('/blood', bloodData)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });

                      navigate('/deshboard/my-donation-page')
                }
            })
          
          
        }

        catch(err){
            console.log(err);
        }


    }
    return (
        <div>
            <h1 className="text-center mt-[20px] font-bold text-4xl mb-[20px] text-red-500">Create Donation Form</h1>
               

             <div>

             <form  onSubmit={handleSubmit} className="">
          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
            {/* user name */}
          <div className="form-control">
    <label className="label">
      <span className="label-text">Requester Name</span>
    </label>
    <input type="text" name="userName" defaultValue={user?.displayName} placeholder="requester Name" className="input w-[350px] text-black lg:w-[350px] input-bordered" disabled required />
  </div>
      
   {/* user email */}
  <div className="form-control">
    <label className="label">
      <span className="label-text">requester email</span>
    </label>
    <input type="text"  name="userEmail" defaultValue={user?.email} placeholder="requester email" className="input w-[350px] lg:w-[350px] input-bordered" disabled required />
  </div>


          </div>

         



          <div className="flex flex-col md:flex-row lg:flex-row   md:px-[60px] lg:px-[100px] gap-[20px] lg:gap-[30px]">
    {/* recipient name */}
          <div className="form-control">
         <label className="label">
      <span className="label-text">recipient name</span>
    </label>
    <input type="text" name="recipientName"  placeholder="recipientName" className="input w-[350px] lg:w-[350px] input-bordered"  required />
         </div>
      
  {/* district */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">District</span>
    </label>
    <select name='district' className="select w-full max-w-xs">
                 
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
    <select name="upazila" className="select  w-full max-w-xs">


{
    upazilas.map(upazila=>  <option key={upazila.id}>{upazila.name}</option> )
}

</select>
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Hospital Name</span>
    </label>
    <input type="text"  name="hospital"  placeholder="user name" className="input w-[350px] lg:w-[350px] input-bordered" required />
        </div>



          </div>



          {/* current user */}

         
     

      <div className="flex flex-col md:flex-row lg:flex-row md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Donation Date</span>
    </label>
    <input type="date"  name="date"  placeholder="date" className="input w-[350px] lg:w-[350px] input-bordered" required />

  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Donation Time</span>
    </label>
    <input type="text" name="time"  placeholder="instaction" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>



          <div className="flex flex-col md:flex-row lg:flex-row  md:px-[60px] lg:px-[100px] md:gap-[20px] lg:gap-[30px]">
          <div className="form-control">
    <label className="label">
      <span className="label-text">Full Address</span>
    </label>
    <input type="text"  name="address"  placeholder="Address" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>
      

  <div className="form-control">
    <label className="label">
      <span className="label-text">Request message</span>
    </label>
    <input type="text" name="message"   placeholder="type message" className="input w-[350px] lg:w-[350px] input-bordered" required />
  </div>



          </div>






      


    <div className=" md:px-[60px] lg:px-[100px]">
    <div className="form-control mt-6">
    <button className="btn md:w-[700px] w-[350px] bg-red-400 text-white">Request Button </button>
  </div>
    </div>

      </form>
                
                
            </div>  
        </div>
    );
};

export default CreateDonation;
