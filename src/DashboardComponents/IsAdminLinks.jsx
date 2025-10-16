
import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const IsAdminLinks = () => {
    return (
        <>
        <li> <NavLink to={'/dashboard/admin-home'} className="flex items-center justify-start gap-1"><FaHome className="text-black text-xl"/> <span className="text-black font-bold uppercase">admin Home</span> </NavLink></li>
                         <li> <NavLink to={'/dashboard/add-items'} className="flex items-center justify-start gap-1"><FaUtensils className="text-black text-xl"/> <span className="text-black font-bold uppercase"> add items</span> </NavLink></li>
                         <li> <NavLink to={'/dashboard/manage-items'} className="flex items-center justify-start gap-1"><FaList className="text-black text-xl"/> <span className="text-black font-bold uppercase"> manage items </span> </NavLink></li>
                         <li> <NavLink to={'/dashboard/bookings'} className="flex items-center justify-start gap-1"><FaBook  className="text-black text-xl"/> <span className="text-black font-bold uppercase"> manage bookings</span> </NavLink></li>
                         <li> <NavLink to={'/dashboard/users'} className="flex items-center justify-start gap-1"><FaUsers className="text-black text-xl"/> <span className="text-black font-bold uppercase"> all users</span> </NavLink></li>
                         <div className="divider divider-neutral"></div>
                          <li> <NavLink to={'/'} className="flex items-center justify-start gap-1"><FaHome className="text-black text-xl"/> <span className="text-black font-bold uppercase"> Home</span> </NavLink></li>
                           <li> <NavLink to={'/our-menu'} className="flex items-center justify-start gap-1"><FiMenu className="text-black text-xl"/> <span className="text-black font-bold uppercase">menu</span> </NavLink></li>
                            <li> <NavLink to={'/our-shop/salad'} className="flex items-center justify-start gap-1"><GiShoppingBag className="text-black text-xl"/> <span className="text-black font-bold uppercase">shop</span> </NavLink></li>
        </>
    );
};

export default IsAdminLinks;