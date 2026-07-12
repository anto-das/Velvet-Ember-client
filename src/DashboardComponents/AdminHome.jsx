import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { PiUsersFourFill } from "react-icons/pi";
import { SiCodechef } from "react-icons/si";
import { FaTruckMoving, FaChevronRight } from "react-icons/fa";
import Chart from "../components/Chart";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data, isLoading } = useQuery({
        queryKey: ['adminHome'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className="w-full max-w-6xl mx-auto my-4 px-4 md:px-6 antialiased selection:bg-amber-500 selection:text-white animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]">
            
            {/* Executive Greeting Header Panel */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                    <span className="text-[10px] font-black tracking-widest text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md uppercase">
                        Enterprise Controller
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2 font-[Cinzel] uppercase">
                        Management <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Overview</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">Real-time analytical metrics snapshot log for Velvet Ember Studio.</p>
                </div>
                
                {/* Micro-System Dynamic System Tracker Pulse Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 font-bold px-3 py-1.5 rounded-xl text-[10px] uppercase tracking-wider self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    <span>System Sync Active</span>
                </div>
            </div>

            {/* Top Grid Matrix: 4 Advanced Micro-Animated Performance Card Rails */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {/* METRIC 1: REVENUE */}
                <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_rgba(245,158,11,0.08)] hover:border-amber-500/20 transition-all duration-500 transform hover:-translate-y-1.5 flex items-center justify-between relative overflow-hidden">
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white shadow-sm group-hover:rotate-6">
                            <GiWallet className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Revenue</p>
                            <p className="text-xl font-black text-slate-900 mt-0.5">
                                ${isLoading ? "..." : (data?.revenue ? Number(data.revenue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : "0.00")}
                            </p>
                        </div>
                    </div>
                    <FaChevronRight className="text-slate-200 text-[10px] transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* METRIC 2: CUSTOMERS */}
                <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_rgba(245,158,11,0.08)] hover:border-amber-500/20 transition-all duration-500 transform hover:-translate-y-1.5 flex items-center justify-between relative overflow-hidden">
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm group-hover:rotate-6">
                            <PiUsersFourFill className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customers</p>
                            <p className="text-xl font-black text-slate-900 mt-0.5">
                                {isLoading ? "..." : (data?.users?.toLocaleString() || 0)}
                            </p>
                        </div>
                    </div>
                    <FaChevronRight className="text-slate-200 text-[10px] transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* METRIC 3: PRODUCTS */}
                <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_rgba(245,158,11,0.08)] hover:border-amber-500/20 transition-all duration-500 transform hover:-translate-y-1.5 flex items-center justify-between relative overflow-hidden">
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white shadow-sm group-hover:rotate-6">
                            <SiCodechef className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products</p>
                            <p className="text-xl font-black text-slate-900 mt-0.5">
                                {isLoading ? "..." : (data?.menuItems?.toLocaleString() || 0)}
                            </p>
                        </div>
                    </div>
                    <FaChevronRight className="text-slate-200 text-[10px] transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* METRIC 4: ORDERS */}
                <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_10px_25px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_rgba(245,158,11,0.08)] hover:border-amber-500/20 transition-all duration-500 transform hover:-translate-y-1.5 flex items-center justify-between relative overflow-hidden">
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white shadow-sm group-hover:rotate-6">
                            <FaTruckMoving className="text-xl" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Orders</p>
                            <p className="text-xl font-black text-slate-900 mt-0.5">
                                {isLoading ? "..." : (data?.orders?.toLocaleString() || 0)}
                            </p>
                        </div>
                    </div>
                    <FaChevronRight className="text-slate-200 text-[10px] transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

            </div>

            {/* Bottom Segment Layout Canvas for Core Analytics Visualization Charts */}
            <div className="mt-8 bg-white border border-slate-100 p-4 md:p-6 lg:p-8 rounded-3xl shadow-[0_15px_50px_-20px_rgba(0,0,0,0.03)] transition-all duration-300">
                <div className="mb-6">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Business Analytics Flow</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Visual representation charting processing categories performance pipelines.</p>
                </div>
                
                {/* Encapsulated Chart display frame component area wrapper */}
                <div className="w-full overflow-x-auto custom-dashboard-chart-container">
                    <Chart />
                </div>
            </div>

        </div>
    );
};

export default AdminHome;
