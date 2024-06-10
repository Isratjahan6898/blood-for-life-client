import axios from "axios";
import JoditEditor from "jodit-react";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useRef, useState } from "react";

import Swal from "sweetalert2";


const BlogFrom = () => {

    const axiosCommon= useAxiosCommon();
  const editor = useRef(null);
 
	const [content, setContent] = useState('');

    
  const handleContent= async e =>{
    e.preventDefault();
    const form = e.target;
    const title= form.title.value;
    const image = form.image.files[0];
    // const content = form.content.value;
    console.log(title, image);

    const formData =new FormData()
    formData.append('image', image)

    try{
      const{ data }= await axios.post(`https://api.imgbb.com/1/upload/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
            console.log(data.data.display_url);

          

            const response = await axiosCommon.post(`/blogs`,{
              title,
              image :data.data.display_url,
               content,
              status:'draft'

            } );
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });

          
           
            console.log('User information updated:', response.data);
    }
    catch(err)
    {
      console.log(err);
    }
  }
    return (
        <div>

<div className="my-[80px] mx-[50px]">
        <div className="text-center text-red-500 text-5xl my-[60px] font-bold">Crate Blog</div>
           

        <form
        onSubmit={handleContent}


    className='space-y-6 ng-untouched ng-pristine ng-valid'
>
    <div className='space-y-4'>
        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Title
            </label>
            <input
                type='text'
                name='title'
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
                Content
            </label>
            <JoditEditor   
            ref={editor}
            value={content}
            onChange={setContent}
           
            
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


{/*  */}
        </div>
            
        </div>
    );
};

export default BlogFrom;