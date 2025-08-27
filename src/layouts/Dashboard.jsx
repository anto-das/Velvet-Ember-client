import { Helmet } from "@dr.pogodin/react-helmet";
import { BsCart4 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { TbMessage2Star } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import '../files/dashboard.css'

const Dashboard = () => {
    return (
        <>
        <Helmet>
             <title>Velvet Ember | Dashboard</title>
        <meta name="description" content="Welcome to Velvet Ember Dashboard" />
        </Helmet>
        <div className="lg:flex md:flex">
            <div className="w-56 bg-[#D1A054] min-h-screen">
                <h1 className="text-xl text-black font-bold uppercase text-center py-5">velvet ember</h1>
                <ul className="space-y-4">
                 <li> <NavLink className="flex items-center justify-center gap-1"><FaHome className="text-black text-xl"/> <span className="text-black font-bold uppercase"> User Home</span> </NavLink></li>
                 <li> <NavLink className="flex items-center justify-center gap-1"><FaCalendarDays className="text-black text-xl"/> <span className="text-black font-bold uppercase"> reservation</span> </NavLink></li>
                 <li> <NavLink className="flex items-center justify-center gap-1"><GiWallet className="text-black text-xl"/> <span className="text-black font-bold uppercase"> payment history</span> </NavLink></li>
                 <li> <NavLink className="flex items-center justify-center gap-1"><BsCart4 className="text-black text-xl"/> <span className="text-black font-bold uppercase"> my cart</span> </NavLink></li>
                 <li> <NavLink className="flex items-center justify-center gap-1"><TbMessage2Star className="text-black text-xl"/> <span className="text-black font-bold uppercase"> add review</span> </NavLink></li>
                 <li> <NavLink className="flex items-center justify-center gap-1"><IoMdCalendar className="text-black text-xl"/> <span className="text-black font-bold uppercase"> my booking</span> </NavLink></li>
                 <div className="divider divider-neutral"></div>
                  <li> <NavLink to={'/'} className="flex items-center justify-center gap-1"><FaHome className="text-black text-xl"/> <span className="text-black font-bold uppercase"> Home</span> </NavLink></li>
                   <li> <NavLink to={'/our-menu'} className="flex items-center justify-center gap-1"><FiMenu className="text-black text-xl"/> <span className="text-black font-bold uppercase">menu</span> </NavLink></li>
                    <li> <NavLink to={'/our-shop/salad'} className="flex items-center justify-center gap-1"><GiShoppingBag className="text-black text-xl"/> <span className="text-black font-bold uppercase">shop</span> </NavLink></li>
                     <li> <NavLink className="flex items-center justify-center gap-1"><MdContactMail className="text-black text-xl"/> <span className="text-black font-bold uppercase">contact</span> </NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Dashboard;