import { Helmet } from "@dr.pogodin/react-helmet";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import IsAdminLinks from "../DashboardComponents/IsAdminLinks";
import UserLinks from "../DashboardComponents/UserLinks";
import useAdmin from "../hooks/useAdmin";
import { FaUserShield, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <>
      <Helmet>
        <title>Velvet Ember | Dashboard</title>
        <meta name="description" content="Welcome to Velvet Ember Dashboard" />
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen bg-slate-50/50 antialiased selection:bg-amber-500 selection:text-white">
        {/* Desktop Left Rail - Premium Sidebar Frame */}
        <div className="w-64 hidden md:flex flex-col bg-[#0f0303] border-r border-white/5 min-h-screen sticky top-0 text-slate-300 shadow-[4px_0_24px_rgba(0,0,0,0.4)]">
          {/* Architectural Brand Identity Panel Header */}
          <div className="p-6 border-b border-white/5">
            <Link to="/" className="group block focus:outline-none">
              <h1 className="text-lg font-black tracking-widest text-white uppercase flex items-center justify-center">
                <span className="italic px-2.5 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 uppercase text-xs font-black">
                  Velvet
                </span>
                <span className="ml-1.5 text-white font-black tracking-widest uppercase text-xs group-hover:text-amber-400 transition-colors duration-300">
                  Ember
                </span>
              </h1>
            </Link>
          </div>

          {/* Role Indicator Dynamic Profile Tag */}
          <div className="mx-4 mt-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${isAdmin ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-400"}`}
            >
              {isAdmin ? <FaUserShield /> : <FaUserCircle />}
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                Access Level
              </p>
              <p className="text-xs font-black text-slate-200 mt-1 capitalize leading-none tracking-wide">
                {isAdmin ? "Admin Console" : "User Portal"}
              </p>
            </div>
          </div>

          {/* Highly Interactive Nav Links Track Wrapper */}
          <div className="flex-1 px-4 py-6 overflow-y-auto custom-sidebar-scrollbar">
            <ul className="space-y-2 list-none p-0 m-0">
              {isAdmin ? <IsAdminLinks /> : <UserLinks />}
            </ul>
          </div>

          {/* Micro-System Copyright Meta Badge */}
          <div className="p-4 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-600">
              v2.4.0 • Enterprise
            </p>
          </div>
        </div>

        {/* Mobile Slide-over Component Bridge */}
        <div className="md:hidden">
          <Sidebar isAdmin={isAdmin} />
        </div>

        {/* Desktop Unified Content Display Canvas */}
        <div className="flex-1 min-w-0 bg-slate-50/60 p-4 md:p-8 lg:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto animate-[fadeIn_0.4s_ease-out]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
