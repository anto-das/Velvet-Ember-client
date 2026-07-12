import { Link } from 'react-router-dom';
import TitleBox from '../components/TitleBox';
import useCart from '../hooks/useCart';
import MyBookingsTable from './MyBookingsTable';
import { FaCreditCard, FaCalendarCheck, FaDollarSign } from 'react-icons/fa';

const MyBookings = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => (total + item.price), 0);
    
    return (
        <div className="min-h-screen bg-slate-50/50 pb-16 antialiased selection:bg-amber-500 selection:text-white">
            {/* Title Section */}
            <div className="pt-6">
                <TitleBox 
                    title={'---Excellent Ambience---'}
                    heading={'MY BOOKINGS'}
                /> 
            </div>

            {/* Main Interactive Dashboard Panel */}
            <div className='max-w-7xl mx-auto mt-6 bg-white border border-slate-100 rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden p-5 md:p-8 space-y-6 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]'>
                
                {/* Top Statistics Bar & CTA Action */}
                <div className='flex flex-col sm:flex-row gap-4 items-center justify-between pb-4 border-b border-slate-100'>
                    
                    <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                        {/* Bookings Tracker Badge */}
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                                <FaCalendarCheck className="text-sm" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Bookings</p>
                                <p className="text-base md:text-lg font-black text-slate-800 mt-1 leading-none">{cart.length}</p>
                            </div>
                        </div>

                        {/* Total Price Tracker Badge */}
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                <FaDollarSign className="text-sm" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Total Balance</p>
                                <p className="text-base md:text-lg font-black text-slate-800 mt-1 leading-none">${totalPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Checkout Action Trigger Button */}
                    <div className="w-full sm:w-auto flex justify-end">
                        {
                            cart.length ? (
                                <Link to={'/dashboard/reservation'} className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] transition-all duration-300 transform active:scale-[0.98]">
                                        <FaCreditCard className="text-xs" />
                                        <span>Proceed To Pay</span>
                                    </button>
                                </Link>
                            ) : (
                                <button disabled className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 text-slate-400 font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl cursor-not-allowed border border-slate-200/50">
                                    <FaCreditCard className="text-xs text-slate-300" />
                                    <span>Proceed To Pay</span>
                                </button>
                            )
                        }
                    </div>

                </div>

                {/* Table Data Content Frame wrapper */}
                <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-inner">
                   <MyBookingsTable />
                </div>

            </div>
        </div>
    );
};

export default MyBookings;
