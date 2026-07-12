import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { BsCart4 } from "react-icons/bs";
import { FaUser, FaUserEdit, FaSignOutAlt, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import logo from "../assets/icon/logo.png";
import "./navbar.css";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const navigate = useNavigate();

  // Controlled component states to manage custom animations cleanly
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSignOut = () => {
    logout().then(() => {
      toast.success("Signed out successfully");
      setIsProfileOpen(false);
    });
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  };

  const linkStyle = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-wider transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-500 after:transform ${
      isActive
        ? "text-amber-500 after:scale-x-100"
        : "text-slate-200 hover:text-amber-400 after:scale-x-0 hover:after:scale-x-100"
    } after:transition-transform after:duration-300`;

  const navOptions = (
    <ul className="flex flex-row items-center w-full gap-5 lg:gap-6 md:gap-4 list-none p-0 m-0 justify-around ">
      <li>
        <NavLink to="/" onClick={closeMenus} className={linkStyle}>
          home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={isAdmin ? "/dashboard/admin-home" : "/dashboard/my-bookings"}
            onClick={closeMenus}
            className={linkStyle}
          >
            dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/our-menu" onClick={closeMenus} className={linkStyle}>
          our menu
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/our-shop/salad"
            onClick={closeMenus}
            className={linkStyle}
          >
            our shop
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact" onClick={closeMenus} className={linkStyle}>
          contact
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/sign-in" onClick={closeMenus} className={linkStyle}>
            sign in
          </NavLink>
        </li>
      )}

      <li className="pt-2 lg:pt-0 md:pt-0">
        <Link
          to={isAdmin ? "/dashboard/admin-home" : "/dashboard/my-bookings"}
          onClick={closeMenus}
        >
          <button className="btn btn-circle bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.4)] border-none text-white font-bold relative transition-all duration-300 transform active:scale-95 group">
            <span className="bg-white text-slate-900 text-[10px] font-extrabold rounded-full absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center shadow-md animate-bounce">
              {cart.length}
            </span>
            <BsCart4 className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navbar sticky top-0 z-50 flex justify-between items-center bg-[#0f0303]/90 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-3 transition-all duration-300">
      {/* Left Area: Logo & Brand Name */}
      <div className="flex items-center">
        <Link to="/" className="group" onClick={closeMenus}>
          <div className="flex gap-2 items-center justify-center">
            <img
              src={logo}
              className="w-7 h-7 object-contain transition-transform duration-500 group-hover:rotate-12"
              alt="Velvet Ember Logo"
            />
            <p className="text-lg font-black tracking-tight text-white m-0 flex items-center">
              <span className="italic px-2.5 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20 font-black tracking-widest text-amber-500 uppercase text-sm">
                Velvet
              </span>
              <span className="ml-1.5 text-white font-black tracking-widest uppercase text-sm group-hover:text-amber-400 transition-colors duration-300">
                Ember
              </span>
            </p>
          </div>
        </Link>
      </div>

      {/* Right Area: Navigation Links & Profile Dynamic Group */}
      <div className="flex items-center gap-2">
        {/* Desktop View Menu Links */}
        <div className="hidden lg:block md:block mr-4">{navOptions}</div>

        {/* Mobile View Toggle Action Button Switch */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-slate-200 font-bold btn btn-ghost btn-circle hover:bg-white/10 hover:text-amber-400 lg:hidden md:hidden transition-colors z-50"
          aria-label="Toggle Navigation Options Menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <AiOutlineMenuFold />
          )}
        </button>

        {/* 100% Full-Width Slide Down Mobile App Dropdown Panel */}
        <div
          className={`absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-6 lg:hidden md:hidden transition-all duration-300 ease-in-out z-40 transform origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {navOptions}
        </div>

        {/* Dynamic User Profile Group Container Block */}
        {user && (
          <div className="border-l border-white/10 pl-3 ml-1 flex items-center relative">
            {/* Click Trigger Avatar Mask Wrapper Frame */}
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 h-8 rounded-full overflow-hidden border border-amber-500/30 hover:border-amber-500 cursor-pointer shadow-sm active:scale-95 transition-all"
            >
              <img
                src={user?.photoURL || "https://unsplash.com"}
                alt="Account User Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Custom Interactive Glassmorphic Profile Drops System Drawer */}
            <div
              className={`absolute right-0 top-12 w-56 rounded-2xl p-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-200 transform origin-top-right ${
                isProfileOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
              }`}
            >
              {/* Account Meta Identification Banner header card */}
              <div className="px-3 py-2.5 border-b border-slate-800/60 mb-1">
                <p className="text-xs font-bold text-white truncate leading-none">
                  {user?.displayName || "VIP Client"}
                </p>
                <p className="text-[10px] text-slate-400 font-medium truncate mt-1 leading-none">
                  {user?.email}
                </p>
              </div>

              <ul className="list-none p-0 m-0 space-y-0.5">
                {/* Route Track 1: View Profile */}
                <li>
                  <button
                    onClick={() => {
                      navigate("/dashboard/user-home");
                      closeMenus();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/[0.04] hover:text-amber-400 text-left transition-colors"
                  >
                    <FaUser className="text-xs text-slate-400" />
                    <span>View Profile</span>
                  </button>
                </li>

                {/* Route Track 2: Update Profile Link option */}
                <li>
                  <button
                    onClick={() => {
                      navigate("/dashboard/add-review");
                      closeMenus();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:bg-white/[0.04] hover:text-amber-400 text-left transition-colors"
                  >
                    <FaUserEdit className="text-sm text-slate-400" />
                    <span>Update Profile</span>
                  </button>
                </li>

                {/* Separator track border */}
                <div className="border-t border-slate-800/60 my-1 mx-1"></div>

                {/* Route Track 3: Sign Out Processing Module Action button */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-500/10 text-left transition-colors"
                  >
                    <FaSignOutAlt className="text-xs" />
                    <span>Sign Out</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
