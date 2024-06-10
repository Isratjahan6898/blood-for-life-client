
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";





const Blog = () => {
  const axiosCommon= useAxiosCommon();

  const { data: blogsData= []} = useQuery({
    queryKey: ['blogData'],
    queryFn: async () => {
   

      try {
        const { data } = await axiosCommon.get(`/api/blogs/publish`);
        console.log('Received data:', data);  // Log received data
        return data;
      } catch (error) {
        console.error('Error fetching donation data:', error);
        return [];
      }
    },
  });

  console.log(blogsData);



 

 
    return (
        <div>

          
              <div className="">
            <div className="hero bg-fixed h-[550px] " style={{backgroundImage: 'url(https://i.ibb.co/DLTL3zF/pexels-n-voitkevich-5863400.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Blood Donors
Critically Needed</h1>
      <p className="mb-5">One blood donation can save as many as three lives. Sustainable and quality blood services play a critical role in the health of a society and in preparing for, and responding to, disasters. </p>
      
    </div>
  </div>
</div>

        </div>

          <h1 className="text-center font-bold text-4xl text-red-700 my-[100px]">See Blog Of BloodDonation</h1>

        <div className="grid grid-cols-1 mx-[20px]  md:grid-cols-2 lg:grid-cols-3 lg:mx-[70px] mb-[80px]">
            {
              blogsData.map(blog=><div key={blog._id} className="card w-[350px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={blog.image} alt="Shoes" className="rounded-xl h-[150px] w-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{blog.title}</h2>
                  <p>{blog.content}</p>
                  
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default Blog;