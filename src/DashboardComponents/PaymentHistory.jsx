import TitleBox from "../components/TitleBox";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaHistory, FaHashtag, FaEnvelope, FaUtensils, FaDollarSign, FaCalendarAlt } from "react-icons/fa";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['payment-history'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    return (
        <div className="min-h-screen bg-slate-50/50 pb-16 antialiased selection:bg-amber-500 selection:text-white">
            {/* Title Block Section */}
            <div className="pt-6">
                <TitleBox 
                    title={'---At a Glance!---'}
                    heading={'payment history'}
                />
            </div>

            {/* Main Interactive Statistics Panel */}
            <div className="max-w-7xl mx-auto mt-6 px-4 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
                <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_15px_45px_-15px_rgba(0,0,0,0.05)] overflow-hidden p-5 md:p-8 space-y-6">
                    
                    {/* Header Summary Metadata Block */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-4 border-b border-slate-100">
                        <div>
                            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-[Cinzel] uppercase flex items-center gap-2">
                                <FaHistory className="text-amber-500 text-lg md:text-xl" />
                                <span>Total Payments: {paymentHistory?.length}</span>
                            </h1>
                            <p className="text-xs text-slate-400 mt-1">Review your historical safe credential transactions and receipts.</p>
                        </div>

                        {/* Interactive Status Indicator Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-600 font-bold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider">
                            <span>Secured History Log</span>
                        </div>
                    </div>

                    {/* Table Data Layout View Container Frame */}
                    <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white">
                        <table className="table w-full border-collapse min-w-[700px]">
                            {/* Adjusted Table Head Layer to match Velvet Ember Core Theme */}
                            <thead>
                                <tr className="bg-[#0f0303] text-white uppercase tracking-wider text-xs border-none">
                                    <th className="py-4.5 px-6 font-extrabold text-left rounded-l-2xl">
                                        <span className="flex items-center gap-1"><FaHashtag className="text-amber-500" /> #</span>
                                    </th>
                                    <th className="py-4.5 px-6 font-extrabold text-left">
                                        <span className="flex items-center gap-1.5"><FaEnvelope className="text-amber-500" /> User Email</span>
                                    </th>
                                    <th className="py-4.5 px-6 font-extrabold text-left">
                                        <span className="flex items-center gap-1.5"><FaUtensils className="text-amber-500" /> Food Items Ordered</span>
                                    </th>
                                    <th className="py-4.5 px-6 font-extrabold text-left">
                                        <span className="flex items-center gap-1.5"><FaDollarSign className="text-amber-500" /> Amount paid</span>
                                    </th>
                                    <th className="py-4.5 px-6 font-extrabold text-left rounded-r-2xl">
                                        <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-amber-500" /> Settled Date</span>
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Dynamic Render Output Rows */}
                            <tbody className="text-sm font-medium text-slate-700 divide-y divide-slate-100">
                                {
                                    paymentHistory?.map((item, index) => (
                                        <tr 
                                            key={item._id} 
                                            className="hover:bg-slate-50/80 transition-all duration-300 group border-b border-slate-100"
                                        >
                                            {/* Numeric Index Identifier track counter */}
                                            <td className="py-4 px-6 text-slate-400 font-bold">{index + 1}</td>
                                            
                                            {/* Email Metadata Slot */}
                                            <td className="py-4 px-6 font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                                                {item.email}
                                            </td>
                                            
                                            {/* Food Names Tracking Column */}
                                            <td className="py-4 px-6 max-w-xs">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {Array.isArray(item.foodName) ? (
                                                        item.foodName.map((food, fIdx) => (
                                                            <span key={fIdx} className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200/50 group-hover:bg-amber-500/10 group-hover:text-amber-600 group-hover:border-amber-500/20 transition-all duration-300">
                                                                {food}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200/50">
                                                            {item.foodName}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            
                                            {/* Transaction Amount Value Field */}
                                            <td className="py-4 px-6 text-slate-900 font-black tracking-wide">
                                                ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                                            </td>
                                            
                                            {/* Transaction Completion Time-stamp Area */}
                                            <td className="py-4 px-6 text-slate-500 text-xs font-semibold">
                                                {item.date ? new Date(item.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) : "N/A"}
                                            </td>
                                        </tr>
                                    ))
                                }

                                {/* Empty Fallback State layout block */}
                                {paymentHistory?.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="text-center py-20 text-slate-400 font-semibold tracking-wide bg-slate-50/20">
                                            No prior settlement transaction invoices tracked inside this account stack.
                                        </td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
