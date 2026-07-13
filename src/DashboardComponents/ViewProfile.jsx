import { useState } from "react";
import TitleBox from "../components/TitleBox";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaShieldAlt,
  FaCalendarCheck,
  FaCoins,
  FaStar,
  FaEdit,
  FaCheckCircle,
  FaCrown,
} from "react-icons/fa";

const ViewProfile = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // Fetch local payment history to calculate customer worth
  const { data: payments = [] } = useQuery({
    queryKey: ["payment-history", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  // Calculate overall financial expenditure footprint safely
  const totalSpent = payments.reduce(
    (sum, current) => sum + (current.price || 0),
    0,
  );

  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-4 antialiased animate-[slideUp_0.6s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Structural Header Banner */}

      {/* Main Structural Twin Columns Matrix */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: THE EXECUTIVE IDENTITY AVATAR CARD (5 Columns Space) */}
        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.02)] flex flex-col items-center text-center relative overflow-hidden group">
          {/* Subtle Ambient Decorative Amber Glow Back Shroud */}
          <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-amber-500/[0.03] rounded-full blur-xl animate-pulse pointer-events-none" />

          {/* Floating Tier Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-[9px] font-black uppercase tracking-widest rounded-lg">
            <FaCrown className="text-[10px]" />
            <span>VIP Patron</span>
          </div>

          {/* Heavy Border Image Track Layout */}
          <div className="w-24 h-24 p-1 rounded-full border-2 border-slate-100 bg-slate-50 relative group-hover:border-amber-500 transition-colors duration-500 shadow-sm mt-4">
            <img
              src={user?.photoURL || "https://unsplash.com"}
              alt={user?.displayName || "Profile avatar"}
              className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span
              className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"
              title="Profile Node Synchronized"
            />
          </div>

          {/* Core Descriptive Credentials Headers */}
          <div className="mt-4 space-y-1">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-[Cinzel]">
              {user?.displayName || "Anonymous Client"}
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <FaCheckCircle className="text-emerald-500 text-[9px]" />
              <span>Verified Account Cluster</span>
            </div>
          </div>

          {/* Quick Metrics Statistics Horizontal Rail */}
          <div className="w-full grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-slate-50 font-mono">
            <div className="text-center p-2.5 bg-slate-50/60 rounded-2xl border border-slate-100/50">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                Expenditure
              </p>
              <p className="text-sm font-black text-slate-800 mt-1.5 leading-none">
                ${totalSpent.toFixed(2)}
              </p>
            </div>
            <div className="text-center p-2.5 bg-slate-50/60 rounded-2xl border border-slate-100/50">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                Tray Size
              </p>
              <p className="text-sm font-black text-slate-800 mt-1.5 leading-none">
                {cart?.length || 0} Items
              </p>
            </div>
          </div>

          {/* Action Trigger Modification Button */}
          <button
            onClick={() => navigate("/dashboard/add-review")}
            className="w-full mt-5 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-900 hover:border-slate-900 hover:text-white text-slate-600 font-bold text-xs uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-sm group/btn"
          >
            <FaEdit className="text-[10px] group-hover/btn:rotate-12 transition-transform" />
            <span>Update Profile</span>
          </button>
        </div>

        {/* RIGHT COLUMN: CORE SECURE REGISTRY DETAILS PANEL (7 Columns Space) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.02)] space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Registry Parameters
            </h4>
          </div>

          {/* List of Descriptive Credential Tracks */}
          <div className="space-y-4 pt-2">
            {/* Field Track 1: Client Name */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-slate-50/50 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                  <FaUserCircle />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Account Full Name
                </span>
              </div>
              <span className="text-xs font-bold text-slate-800 tracking-tight sm:text-right">
                {user?.displayName || "Not Provisioned"}
              </span>
            </div>

            {/* Field Track 2: Email Routing Anchor */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-slate-50/50 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs">
                  <FaEnvelope />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Primary Email Track
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-600 font-mono tracking-tight sm:text-right select-all">
                {user?.email || "anonymous@velvetember.com"}
              </span>
            </div>

            {/* Field Track 3: Verification Role Clearance */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-slate-50/50 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center text-xs">
                  <FaShieldAlt />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Access Clearance Level
                </span>
              </div>
              <span className="inline-flex px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-600 self-start sm:self-auto border border-slate-200/40">
                Authorized Client
              </span>
            </div>

            {/* Field Track 4: Local Meta Node Creation Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-slate-50/50 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs">
                  <FaCalendarCheck />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Session Node Created
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-400 sm:text-right">
                {user?.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      },
                    )
                  : "Synchronizing..."}
              </span>
            </div>
          </div>

          {/* Micro Analytical Footer Warning Text */}
          <div className="pt-2 border-t border-slate-50 flex items-center gap-2 text-[10px] text-slate-400 font-medium leading-normal">
            <FaShieldAlt className="text-slate-300 text-xs flex-shrink-0" />
            <p>
              Your connection route points to a heavily tokenized database
              cluster. Metadata updates require 256-bit validation keys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
