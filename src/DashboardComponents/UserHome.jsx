import { GiWallet } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FiShoppingBag, FiLayers, FiCreditCard } from "react-icons/fi";
import useMenu from "../hooks/useMenu";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useCart from "../hooks/useCart";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UserHome = () => {
  const [menu] = useMenu();
  const [cart] = useCart();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/review");
      return data;
    },
  });
  const filteredReviews = reviews.filter(
    (review) => review.email === user.email,
  );

  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-4 md:px-6 antialiased overflow-hidden animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Header / Greeting */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight font-[Cinzel]">
            Welcome Back,{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              {user?.displayName || "VIP Guest"}
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Here's your current premium studio overview status.
          </p>
        </div>
        {/* Live Server Pulse Dot Status */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider self-start md:self-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Live Account</span>
        </div>
      </div>

      {/* Top Cards Grid: Simple but Luxury Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1: Menu */}
        <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <FiLayers className="text-xl group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Available Menu
            </h3>
            <p className="text-xl font-black text-slate-900 mt-0.5">
              {menu?.length || 0}
            </p>
          </div>
        </div>

        {/* Card 2: Cart */}
        <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <FiShoppingBag className="text-xl group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              My Active Cart
            </h3>
            <p className="text-xl font-black text-slate-900 mt-0.5">
              {cart?.length || 0}
            </p>
          </div>
        </div>

        {/* Card 3: Payments */}
        <div className="group bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
            <FiCreditCard className="text-xl group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Payments Cleared
            </h3>
            <p className="text-xl font-black text-slate-900 mt-0.5">
              {payments?.length || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Split Layout: Mini Profile Box + Unified Clean Logs */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-6 gap-5">
        {/* Minimal Dynamic Premium Profile Badge */}
        <div className="md:col-span-4 bg-[#0f0303] flex flex-col justify-center items-center p-6 rounded-2xl relative overflow-hidden shadow-sm group">
          <div className="absolute top-[-50px] right-[-50px] w-28 h-28 bg-amber-500/[0.04] rounded-full blur-xl animate-pulse"></div>
          <div className="w-16 h-16 p-1 bg-white/10 rounded-full border border-white/10">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h4 className="text-base font-black text-white mt-3 font-[Cinzel] tracking-wide">
            {user?.displayName || "Studio Guest"}
          </h4>
          <span className="text-[9px] font-extrabold tracking-widest text-amber-500 uppercase mt-0.5 bg-amber-500/10 px-2 py-0.5 rounded">
            Client Tier
          </span>
        </div>

        {/* Activity Feed Tracker Logs Area */}
        <div className="md:col-span-8 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex flex-col justify-center">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
            Your Recent Footprints
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Box 1 */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 transition-colors">
              <FaCartPlus className="text-amber-600 text-sm" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                  Cart Items
                </p>
                <p className="text-sm font-black text-slate-800 mt-1 leading-none">
                  {cart?.length || 0}
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 transition-colors">
              <IoMdStar className="text-amber-600 text-base" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                  Reviews Given
                </p>
                <p className="text-sm font-black text-slate-800 mt-1 leading-none">
                  {filteredReviews?.length || 0}
                </p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 transition-colors">
              <GiWallet className="text-amber-600 text-sm" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">
                  Total Invoices
                </p>
                <p className="text-sm font-black text-slate-800 mt-1 leading-none">
                  {payments?.length || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
