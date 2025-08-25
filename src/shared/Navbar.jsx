import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import '../files/navbar.css'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { BsCart4 } from "react-icons/bs";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
const Navbar = () => {
  const {logout,user} = useContext(AuthContext);
  const [cart] =useCart();
  const handleSignOut = () =>{
    logout()
    .then(() =>{
      toast.success('Sign Out Sucessfull')
    })
  }
  const navOptions = <>
     <ul className="menu items-center menu-vertical lg:menu-horizontal md:menu-horizontal px-1 w-full">
      <li  className="text-md font-bold text-white uppercase" ><NavLink to={'/'}>home</NavLink></li>
     <li> <NavLink  to={'/contact-us'} className="text-md font-bold text-white  uppercase">contact us</NavLink></li>
      <li ><NavLink to={'/dashboard'} className="text-md font-bold text-white  uppercase">dashboard</NavLink></li>
     <li > <NavLink to={'/our-menu'} className="text-md font-bold text-white  uppercase">our menu</NavLink></li>
     <li > <NavLink to={'/our-shop/salad'} className="text-md font-bold text-white  uppercase">our shop</NavLink></li>
     <Link><button className="btn btn-circle bg-green-400 shadow-none border-none font-bold relative"> <span className="bg-white rounded-full absolute right-1 w-5 text-gray-700 -top-3">{cart.length} </span> <BsCart4 className="text-white text-xl font-bold"/></button></Link>
     {/* user profile */}
    {
      user? <></> :<> <li > <NavLink to={'sign-in'} className="text-md font-bold text-white  uppercase">sign in</NavLink></li></>
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
  <div className="flex items-center">
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
   {/* user profile */}
  {
    user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
          <img
            alt={user.displayName}
            src={user.photoURL} 
            className="w-full" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li onClick={handleSignOut}><a>Logout</a></li>
      </ul>
    </div>
  }
  </div>
</div>
  )
}

export default Navbar