import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'

import { AiOutlineBars } from 'react-icons/ai'

import { NavLink, useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

import useRole from '../../../hooks/useRole'
import HostMenu from './HostMenu/HostMenu'
import AdminMenu from './AdminMenu/AdminMenu'
import Volunteer from './Volunteer/Volunteer'
import useAdmin from '../../../hooks/useAdmin'





const Sidebar = () => {
    const {user, logOut } = useAuth()
    console.log(user);
    const [isActive, setActive] = useState(false);
    const [role]= useRole();
    console.log(role);
    const navigate = useNavigate();

    const[isAdmin]=useAdmin();


    const handleLogOut = ()=>{
      logOut()
      .then()
      .catch()
      navigate('/')
    }


    const handleToggle = () => {
        setActive(!isActive)
      }
    return (
        <div>
               {/* Small Screen Navbar */}
      <div className='bg-red-400 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
         

                <Link to='/'><h1 className=" font-extrabold text-red-900 font-lato italic text-5xl">Blood4Life</h1></Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-red-400 text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
             

<Link to='/'><h1 className=" font-extrabold hidden md:block text-red-900 font-lato italic text-4xl">Blood4Life</h1></Link>
            </div>

            {/* <div >
              <h1>{user.displayName
              }</h1>

            </div> */}
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Home */}
              {/* <div>
              <h1>{user?.dispalyName}</h1>

            </div>  */}

            
            <div className='flex flex-col justify-center items-center '>
              <h1 className='text-center font-bold text-2xl mb-[20px]'>{user.displayName
              }</h1>

              <img src={user.
photoURL} alt=""  className='w-[70px] h-[70px] rounded-full'/>
              </div>



            {role==='doner' && <HostMenu></HostMenu>}
            {role==='volunteer'&& <Volunteer></Volunteer>}
            {isAdmin && <AdminMenu></AdminMenu>}

              
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/deshboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
        </div>
    );
};

export default Sidebar;