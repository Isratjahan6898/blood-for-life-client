import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const Register = () => {
    const{createUser,updateUserProfile}=useAuth();
    // console.log(createUser,updateUserProfile);
    const navigate = useNavigate();

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
        <div>
            <Helmet>
                <title>Blood4Life || signup</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to <span className=" font-extrabold text-red-900 font-lato italic text-2xl">Blood4Life</span></p>
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
                                    
                                    <option>Dhaka</option>
                                    <option>Faridpur</option>
                                    <option>Gazipur</option>
                                    <option>Gopalgonj</option>
                                    <option>Kisorgonj</option>
                                    <option>Madaripur</option>
                                    <option>Manukgaonj</option>
                                    <option>Munsigonj</option>
                                    <option>Narayangonj</option>
                                    <option>Narsingdi</option>
                                    <option>Rajbari</option>
                                    <option>Shariatpur</option>
                                    <option>Tangail</option>
                                    <option>Bogura</option>
                                    <option>Joypurhat</option>
                                    <option>Naogong</option>
                                    <option>Natore</option>
                                    <option>Pabna</option>
                                    <option>Rajshahi</option>
                                    <option>Sitajgonj</option>
                                </select>
                            </div>

                            {/* Upazila */}

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Upazila
                                </label>
                                <select name="upazila" className="select select-primary w-full max-w-xs">
                                    
                                    <option>Dhamrai</option>
                                    <option>Dohar </option>
                                    <option>Keraniganj</option>
                                    <option>Nawabganj</option>
                                    <option>Savar</option>
                                    <option>Alfadanga </option>
                                    <option>Bhanga</option>
                                    <option>Boalmari</option>
                                    <option>Charbhadrasan</option>
                                    <option>Faridpur Sadar</option>
                                    <option>Faridpur Sadar</option>
                                    <option>Nagarkanda</option>
                                    <option>Sadarpur</option>
                                    <option>Shaltha</option>
                                    <option>Gazipur Sadar</option>
                                    <option>Kaliakair</option>
                                    <option>Kapasia</option>
                                    <option>Sreepur</option>
                                    <option>Rajsjug</option>
                                    <option>Sitajgonj</option>
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
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>

                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>

                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-rose-500 text-red-600'
                        >
                            Login
                        </Link>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;