import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
      <Link><p className="mr-[20px]" >Donation Request</p></Link>

      <Link to='/blog'><p className="mr-[20px]">Bolg</p></Link>
      <Link><p className="mr-[20px]">Login</p></Link>
      </ul>
    </div>
    <h1 className=" font-extrabold text-red-900 font-lato italic text-5xl">Blood4Life</h1>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal text-white px-1">
      <Link><p className="mr-[20px]" >Donation Request</p></Link>

      <Link to='/blog'><p className="mr-[20px]">Bolg</p></Link>
      <Link><p className="mr-[20px]">Login</p></Link>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;