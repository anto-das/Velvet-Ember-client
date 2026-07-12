import { FaHome } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import { TbMessage2Star } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const UserLinks = () => {
  // Reusable styling function matching the IsAdminLinks theme setup
  const dynamicLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-[0.98] ${
      isActive
        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_4px_20px_rgba(245,158,11,0.25)] scale-[1.02]"
        : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.03]"
    }`;

  // Reusable active icon color tracking class
  const activeIconStyle = (isActive) => 
    `text-base transition-transform duration-300 group-hover:scale-110 ${
      isActive ? "text-slate-950" : "text-amber-500"
    }`;

  return (
    <div className="space-y-1.5">
      {/* SECTION LABEL: USER CONSOLE CORES */}
      <div className="px-4 pt-2 pb-1">
        <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">User Portal</p>
      </div>

      {/* User Home Track */}
      <li>
        <NavLink to="/dashboard/user-home" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <FaHome className={activeIconStyle(isActive)} />
              <span>User Home</span>
            </>
          )}
        </NavLink>
      </li>

      {/* Reservation Track */}
      <li>
        <NavLink to="/dashboard/reservation" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <FaCalendarDays className={activeIconStyle(isActive)} />
              <span>Reservation</span>
            </>
          )}
        </NavLink>
      </li>

      {/* Payment History Track */}
      <li>
        <NavLink to="/dashboard/payment-history" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <GiWallet className={activeIconStyle(isActive)} />
              <span>Payment History</span>
            </>
          )}
        </NavLink>
      </li>

      {/* Add Review Track */}
      <li>
        <NavLink to="/dashboard/add-review" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <TbMessage2Star className={activeIconStyle(isActive)} />
              <span>Add Review</span>
            </>
          )}
        </NavLink>
      </li>

      {/* My Bookings Track */}
      <li>
        <NavLink to="/dashboard/my-bookings" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <IoMdCalendar className={activeIconStyle(isActive)} />
              <span>My Booking</span>
            </>
          )}
        </NavLink>
      </li>

      {/* Premium Sleek Structural Divider Line */}
      <div className="my-4 border-t border-white/5 mx-2"></div>

      {/* SECTION LABEL: CORE LINKS SHORTCUTS */}
      <div className="px-4 pt-1 pb-1">
        <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Main Website</p>
      </div>

      {/* App Main Base Home Shortcut */}
      <li>
        <NavLink to="/" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <FaHome className={activeIconStyle(isActive)} />
              <span>Home Main</span>
            </>
          )}
        </NavLink>
      </li>

      {/* App Main Menu Shortcut */}
      <li>
        <NavLink to="/our-menu" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <FiMenu className={activeIconStyle(isActive)} />
              <span>Our Menu</span>
            </>
          )}
        </NavLink>
      </li>

      {/* App Main Shop Shortcut */}
      <li>
        <NavLink to="/our-shop/salad" className={({ isActive }) => `${dynamicLinkStyle({ isActive })} group`}>
          {({ isActive }) => (
            <>
              <GiShoppingBag className={activeIconStyle(isActive)} />
              <span>Our Shop</span>
            </>
          )}
        </NavLink>
      </li>
    </div>
  );
};

export default UserLinks;
