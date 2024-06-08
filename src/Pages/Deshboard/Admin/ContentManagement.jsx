import { QueryClient, useQuery} from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";



const ContentManagement = () => {
    const queryClient = new QueryClient();
    const axiosCommon= useAxiosCommon();
   
    const { data: blogsData = [], isLoading, refetch} = useQuery({
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

      
  const handleDelete = blog => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosCommon.delete(`/blogs/${blog._id}`)
        console.log(res.data);
        refetch()
        if(res.data.deletedCount> 0){
          Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
        }

      }
      

    })
  }


  const handleStatusChange = async (blogId, newStatus) => {
    try {
      await axiosCommon.put(`/blogs/${blogId}/status`, { status: newStatus });
      queryClient.invalidateQueries('blogs');
    } catch (error) {
      console.error('Error updating blog status:', error);
    }
    refetch();
  };

      if (isLoading) {
        return <div>Loading...</div>;
      }

    
    return (
       <div>
        <div>
        <div className="flex justify-end my-[40px]">
            <Link to='/blog'><div className="btn bg-red-400 text-white">Add Blog</div></Link>
        </div>
        </div>

        <div>

        <div className="mx-[30px] mb-[60px]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Title</th>
              <th>Image</th>
              <th>Content</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>
              
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

                  <th>
                  <th>
           <details className="dropdown">
  <summary className="m-1 btn ">Status</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li className="text-green-600"><a  onClick={() => handleStatusChange(blog._id, 'draft')}>draft</a></li>
    <li><a   className="text-red-600"  onClick={() => handleStatusChange(blog._id, 'published')}>published</a></li>

  </ul>
</details>
           </th> 
                  </th>
                  
                
        
                  <td><button
                    onClick={() => handleDelete(blog)}
                  ><MdDelete className="text-3xl text-red-600" /></button>
                  </td>
                  

                   
                

                </tr>
              )
            }
    

          </tbody>
        </table>
      </div>
    </div>

        </div>
       </div>
    );
};

export default ContentManagement;