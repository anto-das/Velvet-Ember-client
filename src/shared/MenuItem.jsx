import { useNavigate } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { _id, name, price, image, recipe,category } = item;
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    console.log("Card clicked with id:",id);
    navigate(`/dish-detail/${id}`);
  };
  return (
    <div
      onClick={() => handleCardClick(_id)}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-5 transition-all duration-300 ease-out border-b border-dashed border-neutral-200 hover:border-solid hover:border-[#D99904]/40 hover:bg-neutral-50/60 rounded-xl cursor-pointer"
    >
      {/* Left Section: Image and Text Info */}
      <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
        {/* Fancy Image Wrapper with custom border-radius & subtle overlay */}
        <div className="relative overflow-hidden w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-neutral-100 rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Text Contents */}
        <div className="space-y-1.5 flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg font-serif font-semibold text-neutral-800 tracking-wide group-hover:text-[#D99904] transition-colors duration-200">
              {name}
            </h3>
            {/* Elegant luxury dotted separator line */}
            <div className="hidden sm:block flex-1 border-b border-dotted border-neutral-300 relative top-[-4px] group-hover:border-[#D99904]/30 transition-colors" />
          </div>
          
          <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xl line-clamp-2">
            {recipe}
          </p>
          
          {/* Optional Category Tag */}
          {category && (
            <span className="inline-block text-[10px] uppercase tracking-widest font-medium bg-neutral-100 text-neutral-600 px-2.5 py-0.5 rounded-full group-hover:bg-[#D99904]/10 group-hover:text-[#D99904] transition-colors">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* Right Section: Price and Floating Badge */}
      <div className="sm:self-center shrink-0 pl-1 sm:pl-4">
        <span className="text-xl font-mono font-medium text-[#D99904] bg-[#D99904]/5 px-3 py-1.5 rounded-lg border border-[#D99904]/10 group-hover:bg-[#D99904] group-hover:text-white transition-all duration-300 shadow-sm">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
