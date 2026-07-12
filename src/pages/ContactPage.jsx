import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Data:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center p-4 md:p-10 antialiased relative overflow-hidden z-0">
      {/* Decorative Modern Animated Abstract Shapes in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-200/40 rounded-full blur-[120px] animate-[pulse_8s_infinite] "></div>
      <div className="absolute bottom-[-15%] right-[-5%] w-[35vw] h-[35vw] bg-orange-200/30 rounded-full blur-[100px] animate-[pulse_6s_infinite_1s]"></div>

      {/* Main Container with Entrance Animation */}
      <div className="relative z-10 w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex flex-col md:flex-row overflow-hidden animate-[slideUp_0.7s_cubic-bezier(0.16,1,0.3,1)]">
        {/* Left Side: Brand & Identity */}
        <div className="w-full md:w-5/12 bg-gradient-to-b from-amber-500/5 to-orange-500/5 p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-full">
              Say Hello
            </span>
            <h1 className="text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Velvet{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Ember
              </span>
            </h1>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              We love crafting premium digital experiences. Drop us a line and
              let's spark a new project together.
            </p>

            {/* Premium Info List */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  hello@velvetember.com
                </span>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  +1 (555) 234-5678
                </span>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  San Francisco, California
                </span>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-semibold text-slate-400 mt-10 md:mt-0 tracking-wider uppercase">
            © {new Date().getFullYear()} Velvet Ember Studio.
          </p>
        </div>

        {/* Right Side: Animated Light Form */}
        <div className="w-full md:w-7/12 p-8 lg:p-12 bg-white/40">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Input */}
            <div className="group relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 transition-colors group-focus-within:text-amber-600">
                Your Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className={`w-full px-4 py-3 rounded-xl border bg-white transition-all duration-300 outline-none text-sm focus:ring-4 focus:ring-amber-500/5 placeholder-slate-300 text-slate-800 ${errors.name ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-xs font-medium text-red-500 mt-1 block animate-[shake_0.3s_ease-in-out]">
                  Name field is required
                </span>
              )}
            </div>

            {/* Email Input */}
            <div className="group relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 transition-colors group-focus-within:text-amber-600">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`w-full px-4 py-3 rounded-xl border bg-white transition-all duration-300 outline-none text-sm focus:ring-4 focus:ring-amber-500/5 placeholder-slate-300 text-slate-800 ${errors.email ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                placeholder="name@company.com"
              />
              {errors.email && (
                <span className="text-xs font-medium text-red-500 mt-1 block animate-[shake_0.3s_ease-in-out]">
                  Valid email is required
                </span>
              )}
            </div>

            {/* Message Input */}
            <div className="group relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 transition-colors group-focus-within:text-amber-600">
                Message
              </label>
              <textarea
                rows="4"
                {...register("message", { required: true })}
                className={`w-full px-4 py-3 rounded-xl border bg-white transition-all duration-300 outline-none text-sm focus:ring-4 focus:ring-amber-500/5 placeholder-slate-300 text-slate-800 resize-none ${errors.message ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                placeholder="Tell us about your project or vision..."
              ></textarea>
              {errors.message && (
                <span className="text-xs font-medium text-red-500 mt-1 block animate-[shake_0.3s_ease-in-out]">
                  Message cannot be empty
                </span>
              )}
            </div>

            {/* Interactive Springy Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-amber-600 text-white hover:text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-[0_10px_20px_rgba(217,119,6,0.15)] transition-all duration-300 flex items-center justify-center gap-2 group text-sm transform active:scale-[0.97]"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-xs transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
