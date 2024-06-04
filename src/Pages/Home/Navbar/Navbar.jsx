import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
  const{user,logOut}= useAuth();
  console.log(logOut);
  

  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch()
  }
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black  bg-base-100">
  <div className="navbar-start px-[40px]">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
      
      
      <Link><p className="mr-[20px]" >Donation Request</p></Link>

      <Link to='/blog'><p className="mr-[20px]">Bolg</p></Link>


      {
        user?<>

<Link><p className="mr-[20px]" >Funding Link</p></Link>


<div className="dropdown">
 <div  tabIndex={0} role="button">
 <img src={user.photoURL}  alt="Tailwind"   className='rounded-full mr-[50px] w-[30px] h-[30px]' />
 </div>
 <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52" >
 <p className="mr-[20px]"> <button onClick={handleLogOut}  className='mx-[10px]'>LogOut</button></p>
 <Link to='/deshboard'><p className="mt-[16px] mr-[20px]">desboard</p></Link>

 </ul>

</div>
          
          
        
        
        
        
        </> :<>
        
        <Link to='/login'><p className="mr-[20px]">Login</p></Link>
        
        </>
      }
    
      </ul>
    </div>
    <Link to='/'><h1 className=" font-extrabold text-red-900 font-lato italic text-5xl">Blood4Life</h1></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal text-white px-1">
      <Link to='/donationRequest'><p className="mr-[20px]" >Donation Request</p></Link>

      <Link to='/blog'><p className="mr-[20px]">Bolg</p></Link>

      {
        user?<>

<Link><p className="mr-[20px]" >Funding Link</p></Link>


<div className="dropdown">
 <div  tabIndex={0} role="button">
 <img src={user.photoURL}  alt="Tailwind"   className='rounded-full mr-[50px] w-[30px] h-[30px]' />
 </div>
 <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52" >
 <p className="mr-[20px]"> <button onClick={handleLogOut}  className='mx-[10px]'>LogOut</button></p>
 <Link  to='/deshboard'><p className="mt-[16px] mr-[20px]">desboard</p></Link>

 </ul>

</div>

           
        
        
        </> :<>
        
        <Link to='/login'><p className="mr-[20px]">Login</p></Link>
        
        </>
      }



     
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;