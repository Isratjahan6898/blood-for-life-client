import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const Register = () => {
    const{createUser,updateUserProfile}=useAuth();
    // console.log(createUser,updateUserProfile);
    const navigate = useNavigate();


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



    const handleSignUp= async e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.files[0];
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            toast('Passwords do not match');
            return;
        }

        const formData =new FormData()
        formData.append('image', image)

        
       
        // console.log(email,name,image,bloodGroup,district,upazila,password,confirmPassword);

        try{

            
       

        //upload img
           const{ data }= await axios.post(`https://api.imgbb.com/1/upload/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
            console.log(data.data.display_url);


            //user registation

            const result= await createUser(email,password);
            console.log(result);

            //update UserProfile

            await updateUserProfile(name,data.data.display_url)
            navigate('/');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              




        }
        
        catch(err)
        {
          console.log(err);
        }
    }

    return (
        <div className="my-[50px]">
            <Helmet>
                <title>Blood4Life || signup</title>
            </Helmet>
              
             

            <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
    <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
      <div
        className='hidden bg-cover bg-center lg:block lg:w-1/2'
        style={{
          backgroundImage: `url('https://i.ibb.co/vDh8rWw/pexels-cais-4680222.jpg')`,
        }}
      ></div>

      <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
        <div className='flex justify-center mx-auto'>
          <img
            className='w-auto h-7 sm:h-8'
            src=''
            alt=''
          />
        </div>

        <p className='mt-3 text-xl text-center text-gray-600 '>
          Welcome back!
          <h1 className="font-bold text-2xl">Blood4Life</h1>
        </p>



        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b  lg:w-1/4'></span>

          <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
            or login with email
          </div>

          <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
        </div>
      
        <form
onSubmit={handleSignUp}

    className='space-y-6 ng-untouched ng-pristine ng-valid'
>
    <div className='space-y-4'>
        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Name
            </label>
            <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
            />
        </div>
        <div>
            <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
            </label>
            <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
            />
        </div>
        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
            </label>
            <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
            />
        </div>

        {/* blood */}

        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Blood Group
            </label>
            <select name='bloodGroup' className="select select-primary w-full max-w-xs">
                
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
            </select>
        </div>
        {/* district */}
        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Distict
            </label>
            <select name='district' className="select select-primary w-full max-w-xs">
                 
               {
                districts.map(district=>

                    <option key={district.id}>{district.name}</option>
                )
               }

               
            </select>
        </div>

        {/* Upazila */}

        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Upazila
            </label>
            <select name="upazila" className="select select-primary w-full max-w-xs">


                {
                    upazilas.map(upazila=>  <option key={upazila.id}>{upazila.name}</option> )
                }
                
            </select>
        </div>

        <div>
            <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                    Password
                </label>
            </div>
            <input
                type='password'
                name='password'
               
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
            />
        </div>

        <div>
            <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                    confirm Password
                </label>
            </div>
            <input
                type='password'
                name='confirmPassword'
                
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
            />
        </div>
    </div>

    <div>
        <button
            type='submit'
            className='bg-rose-500 w-full rounded-md py-3 text-white'
        >
            Continue
        </button>
    </div>
</form>
        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b  md:w-1/4'></span>

          <Link

            to='/login'
            className='text-xs text-red-700 uppercase  hover:underline'
          >
            or Login
          </Link>

          <span className='w-1/5 border-b  md:w-1/4'></span>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Register;