import { loadStripe } from "@stripe/stripe-js";
import TitleBox from "../components/TitleBox";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { FaLock, FaCcStripe, FaShieldAlt } from "react-icons/fa";

// Stripe publisher client injection point
const stripePromise = loadStripe(`${import.meta.env.VITE_stripe_payment_publishable_key}`);

const Payment = () => {
    return (
        <div className="min-h-screen bg-slate-50/50 pb-16 antialiased selection:bg-amber-500 selection:text-white">
            {/* Title Section Container */}
            <div className="pt-6">
                <TitleBox title={'--Payment--'} heading={'Pay Your Bill'} />
            </div>

            {/* Main Interactive Check-Out Canvas Frame with smooth entrance */}
            <div className="max-w-5xl mx-auto mt-6 px-4 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
                <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_15px_45px_-15px_rgba(0,0,0,0.05)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Left Panel: Security and Trust Indicators (35% Width Space) */}
                    <div className="lg:col-span-4 bg-[#0f0303] p-8 text-slate-300 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                        {/* Elegant Geometric Accent Circle */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/[0.03] rounded-full blur-2xl pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <div>
                                <span className="text-[10px] font-black tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md uppercase">
                                    Secure Gateway
                                </span>
                                <h3 className="text-xl font-black text-white mt-3 font-[Cinzel] tracking-wide">Velvet Ember Checkout</h3>
                                p.text-xs.text-slate-400.mt-1 { "Fast, encrypted, and monitored digital gateway processing system." }
                            </div>

                            {/* Trust Seals Column */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                                    <FaShieldAlt className="text-amber-500 text-lg flex-shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-200">SSL Encryption Verified</p>
                                        <p className="text-[10px] text-slate-400 mt-0.5">Your 256-bit bank data stays fully shielded.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                                    <FaLock className="text-amber-500 text-sm flex-shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-slate-200">Tokenized Storage</p>
                                        <p className="text-[10px] text-slate-400 mt-0.5">Card processing values are never held locally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Network Processing Verification Badge */}
                        <div className="pt-8 lg:pt-0 flex items-center justify-between border-t border-white/5 text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                            <span className="flex items-center gap-1.5"><FaCcStripe className="text-xl text-slate-400" /> Powered by Stripe</span>
                        </div>
                    </div>

                    {/* Right Panel: The Dynamic Stripe Injected CheckOut Form Workspace (65% Width) */}
                    <div className="lg:col-span-8 p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-slate-50/20">
                        <div className="mb-6">
                            <h4 className="text-base font-black text-slate-800 tracking-tight">Billing & Authorization</h4>
                            <p className="text-xs text-slate-400 mt-0.5">Please fill out your verified plastic credential tokens carefully below.</p>
                        </div>
                        
                        {/* Stripe Elements Context Tunnel Provider */}
                        <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-inner transition-shadow duration-300 focus-within:shadow-md">
                            <Elements stripe={stripePromise}>
                                <CheckOutForm />
                            </Elements>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;
