import { Helmet } from "@dr.pogodin/react-helmet";
import { BsCart4 } from "react-icons/bs";
import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { TbMessage2Star } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import IsAdminLinks from "../DashboardComponents/IsAdminLinks";
import UserLinks from "../DashboardComponents/UserLinks";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <>
        <Helmet>
             <title>Velvet Ember | Dashboard</title>
        <meta name="description" content="Welcome to Velvet Ember Dashboard" />
        </Helmet>
        <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="w-56 hidden md:block lg:block bg-[#D1A054] min-h-screen">
                <h1 className="text-xl text-black font-bold uppercase text-center py-5">velvet ember</h1>
                <ul className="space-y-4 pl-4">
                {
                    isAdmin ? <IsAdminLinks></IsAdminLinks>
                      : 
                     <UserLinks></UserLinks>
                }
                </ul>
            </div>
         <Sidebar isAdmin={isAdmin}></Sidebar>
            <div className="flex-1 bg-base-300">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Dashboard;