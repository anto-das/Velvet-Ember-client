import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import '../files/navbar.css'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
const Navbar = () => {
  const {logout} = useContext(AuthContext);
  const handleSignOut = () =>{
    logout()
    .then(() =>{
      toast.success('Sign Out Sucessfull')
    })
  }
  const {user} = useContext(AuthContext);
  const navOptions = <>
     <ul className="menu items-center menu-vertical lg:menu-horizontal md:menu-horizontal px-1 w-full">
      <li  className="text-md font-bold text-white uppercase" ><NavLink to={'/'}>home</NavLink></li>
     <li> <NavLink  to={'/contact-us'} className="text-md font-bold text-white  uppercase">contact us</NavLink></li>
      <li ><NavLink to={'/dashboard'} className="text-md font-bold text-white  uppercase">dashboard</NavLink></li>
     <li > <NavLink to={'/our-menu'} className="text-md font-bold text-white  uppercase">our menu</NavLink></li>
     <li > <NavLink to={'/our-shop/salad'} className="text-md font-bold text-white  uppercase">our shop</NavLink></li>
    {
      user? <> <button onClick={handleSignOut} className="flex justify-center items-center gap-2"><li className="text-md font-bold text-white  uppercase">sign out</li> <FaUserCircle className="text-3xl text-white"/></button> </> :<> <li > <NavLink to={'sign-in'} className="text-md font-bold text-white  uppercase">sign in</NavLink></li></>
    }
    </ul>
  </>
  return (
   <div className="navbar flex justify-between items-center bg-black/20 shadow-sm">
  <div className="inline">
   <Link to={'/'}>
    <p className="capitalize shadow-none border-none text-lg font-bold text-white">velvet <span className='text-amber-500'> ember</span> 
    </p>
   </Link>
  </div>
  <div className="flex gap-2">
        <div className="hidden lg:block md:block">
          {navOptions}
        </div>
   <div className="dropdown dropdown-end">
     <div className="mx-2 text-xl text-white font-bold btn btn-ghost btn-circle hover:text-black hover:shadow-none hover:border-none lg:hidden md:hidden" role="button" tabIndex={0}>
        < AiOutlineMenuFold/>
        </div>
        <div className="menu bg-gray-600 menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow" tabIndex={0}>
          {navOptions}
        </div>
   </div>
  </div>
</div>
  )
}

export default Navbar