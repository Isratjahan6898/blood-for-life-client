import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";


const ViewDetails = () => {
    const item= useLoaderData();
    const {   recipientName ,district,upazila,hospital,date,time,
        address, message,status} = item;
    console.log(item);
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
      <button className=" btn bg-red-400"> <Modal></Modal></button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default ViewDetails;