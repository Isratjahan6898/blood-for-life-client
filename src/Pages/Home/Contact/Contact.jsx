import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-[60px] mx-[20px] lg:mx-[70px] mb-[30px]">
             <div className='text-center'>
                <p className='text-red-500 mb-[20px]'>---Contact from---</p>
                <hr className='border-[2px]  ml-[80px] w-[300px] lg:ml-[420px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>Contact Us</h1>
                <hr className='border-[2px] ml-[80px] w-[300px] lg:ml-[420px] mb-[40px]' />
            </div>

            <div>
            <div className="min-h-screen bg-base-200">
  <div className="flex flex-col lg:flex-row gap-[20px]  lg:gap-[0px] justify-between py-[40px] px-[40px] ">
    <div>
      <h1 className="text-4xl font-bold">Contact Us</h1>
        <ol className="my-[16px]">
            <li className="font-bold mb-[20px] text-2xl">1. Contact Information</li>
           <ul className="list-disc">
            <li className="mb-[20px]"><span className="font-bold text-xl ">Address:</span> <br></br>
            123 Blood Donation Street, Health City, ST 12345
            </li>
            <li className="mb-[20px]" ><span className="font-bold text-xl ">Phone Number:</span> <br></br>
            Toll-Free: 1-800-BLOOD-HELP <br></br>Local: (123) 456-7890
            </li>

            <li className="mb-[20px]" ><span className="font-bold text-xl ">Email Address:</span> <br></br>
            General Inquiries: info@blooddonation.org <br></br>Support: support@blooddonation.org<br></br>Partnerships: partners@blooddonation.org
            </li>

            <li className="mb-[20px]" ><span className="font-bold text-xl ">Operating Hour:</span> <br></br>
            Mon-Fri: 9 AM - 5 PM <br></br>Sat-Sun: Closed
            </li>

            <li className="mb-[20px]" ><span className="font-bold text-xl ">Visit Us:</span> <br></br>
            Our office is open for visits from 9 AM to 5 PM, Monday through Friday.<br></br> Feel free to drop by for more information or assistance.
            </li>
            <li className="mb-[20px]" ><span className="font-bold text-xl ">Connect Us:</span> <br></br> 
            
            </li>
            <div className="flex gap-[20px]">
            <FaFacebook  className="text-3xl text-blue-600"/> <FaTwitter className="text-3xl text-blue-600" /> <FaInstagramSquare className="text-3xl text-pink-600" /> <FaLinkedin className="text-3xl text-blue-600" />
            </div>
          
           </ul>
        </ol>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="enter name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
      <span className="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="enter your number" className="input input-bordered" required />
   
        </div>
  <div>
  <label >Subject:</label>
    
  <select className="select select-gray-400 input input-bordered w-full max-w-xs">


<option  >General Inquiry</option>
<option>Donation Support</option>
<option>Feedback</option>
<option>Partnership</option>

</select>

<div>
                    <label className="block text-gray-700">Message:</label>
                    <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
  </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-400 text-white">Send Meaage</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Contact;