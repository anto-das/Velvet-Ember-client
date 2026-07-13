import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { FaPlus, FaCoins, FaExclamationCircle } from "react-icons/fa";

const DishCard = ({ item }) => {
  const { name, recipe, image, _id, price, category } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    const cartDoc = {
      menuId: _id,
      email: user?.email,
      name,
      image,
      price,
      category,
    };

    if (user && user.email) {
      axiosSecure
        .post("/carts", cartDoc)
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success(`${name} added to your cart successfully!`);
            refetch();
          }
        })
        .catch((err) => toast.error(err.message));
    } else {
      // Premium Clean Authentication Intercept Toast Prompt
      toast((t) => (
        <div className="p-1 space-y-3 antialiased text-slate-800">
          <div className="flex items-center gap-2 text-amber-600">
            <FaExclamationCircle className="text-base" />
            <p className="text-xs font-bold uppercase tracking-wider">Authentication Required</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            You must be signed in to add items to your cart. Would you like to log in now?
          </p>
          <div className="flex justify-end items-center gap-2 pt-1 border-t border-slate-100">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/sign-in");
              }}
              className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      ), {
        duration: 5000,
        position: 'top-center',
        style: {
          borderRadius: '16px',
          background: '#ffffff',
          border: '1px solid #f1f5f9',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
          padding: '12px',
          maxWidth: '320px'
        }
      });
    }
  };

  return (
    <div className="w-4/5 mx-auto group relative bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-amber-500/20 transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden flex flex-col h-full z-0">
      
      {/* Top Floating Absolute Category Badge */}
      <span className="absolute top-3 left-3 z-10 text-[9px] font-black tracking-widest text-amber-700 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg uppercase shadow-sm border border-slate-100">
        {category}
      </span>

      {/* Image Showcasing Frame */}
      <div className="w-full h-48 sm:h-52 overflow-hidden bg-slate-50 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle bottom fade gradient matrix shroud over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Narrative Context Info Content Body Box */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1.5">
          <h2 className="text-base font-black text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
            {name}
          </h2>
          <p className="text-slate-400 text-xs font-medium leading-relaxed">
            {recipe && recipe.length > 55 ? `${recipe.substring(0, 55)}...` : recipe}
          </p>
        </div>

        {/* Dynamic Metric Valuation and Core Action Buttons Footer Area */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          {/* Price Tracking Indicator Label */}
          <div className="flex items-center gap-1 text-slate-900 font-black text-sm tracking-wide">
            <FaCoins className="text-[10px] text-slate-400 transform -translate-y-0.5" />
            <span>${Number(price || 0).toFixed(2)}</span>
          </div>

          {/* Minimal Luxury Interactive Add-to-Cart Trigger Action Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 transform active:scale-95 group-hover:border-amber-500/30 shadow-sm"
          >
            <span>Add</span>
            <FaPlus className="text-[8px] opacity-70" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default DishCard;
