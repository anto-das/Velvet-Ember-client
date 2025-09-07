import { BsCart4 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { TbMessage2Star } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
           <div className="drawer lg:hidden block p-5">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex justify-between items-center">
    {/* Page content here */}
      <p className="capitalize rounded shadow-none border-none text-lg font-bold text-white bg-[#d1a054] py-1 px-2">velvet <span className='text-black'> ember</span> 
    </p>
    <label htmlFor="my-drawer" className="btn btn-md bg-[#d1a054] drawer-button"> <FiMenu className="text-xl text-white font-bold"></FiMenu> </label>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
     <ul className="menu bg-[#D1A054] text-base-content min-h-full w-[70%]">
                 <li> <NavLink className="flex items-center justify-start gap-1"><FaHome className="text-black text-xl"/> <span className="text-black font-bold uppercase"> User Home</span> </NavLink></li>
                 <li> <NavLink className="flex  items-center justify-start  gap-1"><FaCalendarDays className="text-black text-xl"/> <span className="text-black font-bold uppercase"> reservation</span> </NavLink></li>
                 <li> <NavLink className="flex  items-center justify-start  gap-1"><GiWallet className="text-black text-xl"/> <span className="text-black font-bold uppercase"> payment history</span> </NavLink></li>
                 <li> <NavLink className="flex  items-center justify-start  gap-1"><BsCart4 className="text-black text-xl"/> <span className="text-black font-bold uppercase"> my cart</span> </NavLink></li>
                 <li> <NavLink className="flex  items-center justify-start  gap-1"><TbMessage2Star className="text-black text-xl"/> <span className="text-black font-bold uppercase"> add review</span> </NavLink></li>
                 <li> <NavLink className="flex  items-center justify-start  gap-1"><IoMdCalendar className="text-black text-xl"/> <span className="text-black font-bold uppercase"> my booking</span> </NavLink></li>
                 <div className="divider divider-neutral"></div>
                  <li> <NavLink to={'/'} className="flex  items-center justify-start  gap-1"><FaHome className="text-black text-xl"/> <span className="text-black font-bold uppercase"> Home</span> </NavLink></li>
                   <li> <NavLink to={'/our-menu'} className="flex  items-center justify-start  gap-1"><FiMenu className="text-black text-xl"/> <span className="text-black font-bold uppercase">menu</span> </NavLink></li>
                    <li> <NavLink to={'/our-shop/salad'} className="flex  items-center justify-start  gap-1"><GiShoppingBag className="text-black text-xl"/> <span className="text-black font-bold uppercase">shop</span> </NavLink></li>
                     <li> <NavLink className="flex  items-center justify-start  gap-1"><MdContactMail className="text-black text-xl"/> <span className="text-black font-bold uppercase">contact</span> </NavLink></li>
                </ul>
  </div>
</div>
    );
};

export default Sidebar;