import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import '../files/navbar.css'
const Navbar = () => {
  const navOptions = <>
     <ul className="menu  menu-vertical lg:menu-horizontal md:menu-horizontal px-1 w-full">
      <li  className="text-md font-bold text-white uppercase" ><NavLink to={'/'}>home</NavLink></li>
     <li> <NavLink  to={'/contact-us'} className="text-md font-bold text-white  uppercase">contact us</NavLink></li>
      <li ><NavLink to={'/dashboard'} className="text-md font-bold text-white  uppercase">dashboard</NavLink></li>
     <li > <NavLink to={'/our-menu'} className="text-md font-bold text-white  uppercase">our menu</NavLink></li>
     <li > <NavLink to={'/our-shop/salad'} className="text-md font-bold text-white  uppercase">our shop</NavLink></li>
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
    <div className="dropdown dropdown-left flex items-center">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
   <div className="dropdown dropdown-end">
     <div className="mx-2 text-xl text-white font-bold btn btn-ghost btn-circle lg:hidden md:hidden" role="button" tabIndex={0}>
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