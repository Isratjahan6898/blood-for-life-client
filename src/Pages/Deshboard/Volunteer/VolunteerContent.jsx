import { Link } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";


const VolunteerContent = () => {

    const axiosCommon= useAxiosCommon();
   
    const { data: blogsData = [], isLoading} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
         
    
          try {
            const { data } = await axiosCommon.get(`/blogs`);
            console.log('Received data:', data);  // Log received data
            return data;
          } catch (error) {
            console.error('Error fetching donation data:', error);
            return [];
          }
        },
      });

      if (isLoading) {
        return <div>Loading...</div>;
      }

    return (
        <div>
             <div className="flex justify-end my-[40px]">
            <Link to='/blog'><div className="btn bg-red-400 text-white">Add Blog</div></Link>
           </div>

           <div className="mx-[40px] mb-[60px]">

           <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Title</th>
              <th>Image</th>
              <th>Content</th>
              <th>Status</th>
              
              
            </tr>
          </thead>
          <tbody>

            {
              blogsData.map(blog =>

                <tr key={blog._id} className="bg-base-200">
                  <th>{blog.title}</th>
                  
                  <td><img  src={blog.image} className="h-[50px] w-[50px]"/></td>
                  <td>{blog.content}</td>
                  <td>{blog.status}</td>

           
                  
                
        
                 
                  

                   
                

                </tr>
              )
            }
    

          </tbody>
        </table>
      </div>
            </div> 



        </div>
    );
};

export default VolunteerContent;