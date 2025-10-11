
import { FiMenu } from "react-icons/fi";
import IsAdminLinks from "../DashboardComponents/IsAdminLinks";
import UserLinks from "../DashboardComponents/UserLinks";
import { Link } from "react-router-dom";
import logo from '../assets/icon/logo.png'
const Sidebar = ({isAdmin}) => {
    return (
           <div className="drawer lg:hidden block px-3">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex justify-between py-4 items-center">
    {/* Page content here */}
     <Link to={'/'}> <img src={logo} className="w-8 mb-3" alt="" /> </Link>
    <label htmlFor="my-drawer" className="btn btn-md bg-[#d1a054] drawer-button"> <FiMenu className="text-xl text-white font-bold"></FiMenu> </label>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
     <ul className="menu bg-[#D1A054] text-base-content min-h-full w-[70%]">
    <h1 className="capitalize text-2xl text-gray-200 text-center font-bold py-10">Velvet ember</h1>
                {
                                    isAdmin ? <IsAdminLinks></IsAdminLinks> : <UserLinks></UserLinks>
                                }
                </ul>
  </div>
</div>
    );
};

export default Sidebar;