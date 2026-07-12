import TitleBox from '../components/TitleBox';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { MdPending } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaHashtag, FaEnvelope, FaCalendarAlt, FaCheckCircle, FaCoins, FaInfoCircle } from 'react-icons/fa';

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: bookings = [] } = useQuery({
        queryKey: ['manageBooking'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data;
        }
    });

    return (
        <div className="w-full max-w-7xl mx-auto my-6 px-4 antialiased animate-[fadeIn_0.3s_ease-out]">
            {/* Title Section */}
            <TitleBox title={'---At a Glance!---'} heading={'MANAGE ALL BOOKINGS'} />

            {/* Simple Modern White Table Card */}
            <div className="mt-8 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                
                {/* Minimal Header Metrics Hook Utility Bar */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Order Stream</h3>
                    <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                        {bookings?.length || 0} Total Records
                    </span>
                </div>

                {/* Clean Responsive Table Canvas */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                                <th className="py-4 px-6 w-16 text-center"><span className="flex items-center justify-center"><FaHashtag /></span></th>
                                <th className="py-4 px-6"><span className="flex items-center gap-1.5"><FaEnvelope className="text-slate-400 text-[10px]" /> User Email</span></th>
                                <th className="py-4 px-6 w-48"><span className="flex items-center gap-1.5"><FaCalendarAlt className="text-slate-400 text-[10px]" /> Booking Date</span></th>
                                <th className="py-4 px-6 w-36"><span className="flex items-center gap-1.5"><FaInfoCircle className="text-slate-400 text-[10px]" /> Activity Status</span></th>
                                <th className="py-4 px-6 w-32"><span className="flex items-center gap-1.5"><FaCoins className="text-slate-400 text-[10px]" /> Amount</span></th>
                                <th className="py-4 px-6 w-32 text-center"><span className="flex items-center justify-center gap-1.5"><FaCheckCircle className="text-slate-400 text-[10px]" /> Action Badge</span></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100 bg-white">
                            {bookings.map((item, index) => (
                                <tr key={item._id} className="hover:bg-slate-50/50 transition-colors duration-150">
                                    
                                    {/* Row Index Number */}
                                    <td className="py-4 px-6 text-slate-400 text-center font-semibold text-xs">{index + 1}</td>
                                    
                                    {/* Account Email Address Text */}
                                    <td className="py-4 px-6 font-semibold text-slate-800 tracking-tight text-xs">{item.email}</td>
                                    
                                    {/* Normalized System Timestamp parsing track */}
                                    <td className="py-4 px-6 text-slate-400 font-semibold text-xs">
                                        {item.date ? new Date(item.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        }) : "Pending Timestamp"}
                                    </td>
                                    
                                    {/* Functional Status Text Capsule Badge */}
                                    <td className="py-4 px-6">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                            item.status === 'paid' 
                                                ? 'bg-emerald-50 text-emerald-600' 
                                                : 'bg-amber-50 text-amber-600'
                                        }`}>
                                            {item.status || 'pending'}
                                        </span>
                                    </td>
                                    
                                    {/* Total Balanced Pricing Value */}
                                    <td className="py-4 px-6 text-slate-900 font-bold">
                                        ${typeof item.price === "number" ? item.price.toFixed(2) : item.price}
                                    </td>
                                    
                                    {/* Refined Action Status Icons Wrapper */}
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex items-center justify-center">
                                            {item.status === 'paid' ? (
                                                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500" title="Payment Fulfilled">
                                                    <FaCircleCheck className="text-lg" />
                                                </div>
                                            ) : (
                                                <div className="p-1.5 rounded-lg bg-red-50 text-red-400 animate-pulse" title="Action Settlement Pending">
                                                    <MdPending className="text-xl" />
                                                </div>
                                            )}
                                        </div>
                                    </td>

                                </tr>
                            ))}

                            {/* Fallback Empty Database State Array Trigger */}
                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center py-16 text-slate-400 font-medium text-xs tracking-wide">
                                        No transactional reservation bookings have been logged yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;
