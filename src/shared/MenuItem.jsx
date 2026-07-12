import { useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const { _id, name, price, image, recipe, category } = item;
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    console.log("Card clicked with id:", id);
    navigate(`/dish-detail/${id}`);
  };

  return (
    <div
      onClick={() => handleCardClick(_id)}
      className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 transition-all duration-300 border-b border-slate-100 hover:bg-slate-50/50 rounded-2xl cursor-pointer"
    >
      {/* Left Area: Food Showcase Photo & Descriptions */}
      <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
        
        {/* Minimal Modern Image Box Frame */}
        <div className="relative overflow-hidden w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-slate-50 rounded-xl border border-slate-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Text Context & Descriptive Meta */}
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-black text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
              {name}
            </h3>
            
            {/* Simple Minimal Dotted Separator Track Line */}
            <div className="hidden sm:block flex-1 border-b border-dashed border-slate-200 group-hover:border-amber-500/20 transition-colors" />
          </div>
          
          <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-xl line-clamp-2">
            {recipe}
          </p>
          
          {/* Minimalist Micro Category Capsule Badge */}
          {category && (
            <span className="inline-block text-[9px] uppercase tracking-widest font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded transition-colors group-hover:bg-amber-500/10 group-hover:text-amber-600">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* Right Area: Monetary Valuation Label */}
      <div className="sm:self-center shrink-0 pl-0 sm:pl-4 self-end sm:self-auto">
        <span className="inline-flex items-center gap-1 text-sm font-black text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 transition-all duration-300 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white shadow-sm">
          <FaCoins className="text-[10px] text-slate-400 group-hover:text-amber-400 transition-colors" />
          <span>${Number(price || 0).toFixed(2)}</span>
        </span>
      </div>
      
    </div>
  );
};

export default MenuItem;
