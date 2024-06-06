import { useLoaderData } from "react-router-dom";
// import Modal from 'react-modal';
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../hooks/useAxiosCommon";



const ViewDetails = () => {
  const axiosCommon= useAxiosCommon();
  const {user}= useAuth();
    const item= useLoaderData();
    const { handleSubmit, register, reset } = useForm();
    const { recipientName ,district,upazila,hospital,date,time,
        address, message,status, _id} = item;
    console.log(item);
    const [request, setRequest] = useState(null);

    const onSubmit = (data) => {
      console.log(data);

      
  }
   


  const handleDonate = async () => {
    try {

      const response = await axiosCommon.put(`/donation-requests/${_id}/status`, { status: 'inprogress' });
      setRequest(prevRequest => ({ ...prevRequest, status: 'inprogress' }));
      reset();
      document.getElementById('my_modal_3').close();
    } catch (error) {
      console.error('Failed to update the donation status:', error);
    }
  };

  // if (!request) return <div>Loading...</div>;
    return (
        <div>

            <div>
            <div className="hero bg-fixed h-[400px] bg-fixed mb-[30px]" style={{backgroundImage: 'url(https://i.ibb.co/xXY5DFm/pexels-kirill-dratsevich-237907001-12227661.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Blood Request View Details</h1>
      <p className="mb-5">One blood donation can save as many as three lives. Sustainable and quality blood services play a critical role in the health of a society and in preparing for, and responding to, disasters. </p>
      
    </div>
  </div>
</div>
            </div>


            <div className="my-[60px] mx-[40px]">

            <div className="card  w-full bg-slate-200 shadow-xl">
  <div className="card-body">
    <h2 className=" mb-[10px]" ><span className="font-bold text-2xl ">Recipient Name:  </span><span className="text-xl font-bold">{recipientName}</span></h2>
    <p className=" mb-[10px]">
        <span className="font-bold text-2xl">Location:  </span>

      {district}  {upazila}

    </p>
    <p className=" mb-[10px]">
        <span className="font-bold text-2xl">Hospital Name:  </span>
       {hospital}

    </p>

    <p className=" mb-[10px]">
        <span className="font-bold text-2xl">Hospital Address:  </span>
       {address}

    </p>
    <p className=" mb-[10px]" >
        <span className="font-bold text-2xl">Date:  </span>
       {date}

    </p>
    <p className=" mb-[10px]">
        <span className="font-bold text-2xl">Time:  </span>
       {time}

    </p>

    <p className=" mb-[10px]">
        <span className="font-bold text-2xl">status:  </span>
       {status}

    </p>

    <p className=" mb-[10px]">
        <span className="font-bold text-2xl">Why Need Blood:  </span>
       {message}

    </p>


    <div className="card-actions  mb-[10px]">
    

<button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
        Donate
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Confirm Donation</h3>
          <div>
            <label>Donor Name: </label>
            <input type="text"   {...register("requesterName")} defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="mt-4">
            <label>Donor Email: </label>
            <input type="email" {...register("requesterEmail")} defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="modal-action">
            <button type="button" onClick={handleDonate} className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default ViewDetails;