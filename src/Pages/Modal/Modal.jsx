import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";



const Modal = () => {
    const {user}= useAuth();
    console.log(user);
    const { handleSubmit, register, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
  
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-red-400" onClick={()=>document.getElementById('my_modal_5').showModal()}> Donate</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">

    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control">
    <label className="label">
      <span className="label-text">Requester Name</span>
    </label>
    <input type="text"  {...register("requesterName")} defaultValue={user?.displayName}  placeholder="requester Name" className="input w-[350px] text-black lg:w-[350px] input-bordered"  required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Requester email</span>
    </label>
    <input type="email"  {...register("requesterEmail")}  defaultValue={user?.email} placeholder="requester email" className="input w-[350px] text-black lg:w-[350px] input-bordered" required />
  </div>
    
  <div className="form-control mt-6">
    <button className="btn  bg-red-400 text-white">Confirm</button>
  </div>
    </form>
   
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Modal;