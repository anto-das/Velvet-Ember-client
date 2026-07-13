import { FaCoins, FaPlus, FaClock, FaFire } from "react-icons/fa";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useMenu from "../hooks/useMenu";

// Structured data mapping matching your schema
const offeredItemsMock = [
  {
    _id: "642c155b2c4774f05c36ee80",
    name: "Roast Duck Breast",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry reduction syrup infusion.",
    image: "https://unsplash.com",
    category: "offered",
    price: 14.5,
  },
  {
    _id: "642c155b2c4774f05c36ee81",
    name: "Smoked Obsidian Salmon",
    recipe:
      "Pan-seared Atlantic salmon coated in citrus-infused active coal dust with grilled asparagus tips.",
    image: "https://unsplash.com",
    category: "offered",
    price: 18.0,
  },
  {
    _id: "642c155b2c4774f05c36ee82",
    name: "Velvet Chocolate Hearth Cake",
    recipe:
      "Warm molten chocolate core dusted with volcanic gold flakes and pure Madagascan vanilla dust shell.",
    image: "https://unsplash.com",
    category: "offered",
    price: 9.5,
  },
];

const OfferedSection = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const [menuItems] = useMenu(); // Assuming useCart returns the menu items as well
  const filteredMenuItems = menuItems.filter((item) => item.category === "offered");

  const handleAddToCart = (item, e) => {
    e.stopPropagation();

    if (!user || !user.email) {
      toast.error("Please sign in to add delicious items to your tray!");
      return;
    }

    const cartDoc = {
      menuId: item._id,
      email: user.email,
      name: item.name,
      image: item.image,
      price: item.price,
      category: item.category,
    };

    axiosSecure
      .post("/carts", cartDoc)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success(`${item.name} reserved in your cart tray!`);
          refetch();
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="w-full text-slate-800 py-16 px-4 md:px-8 antialiased relative overflow-hidden selection:bg-amber-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-10 relative z-0">
        {/* LIGHT MODE LUXURY HEADER BANNER PANEL */}
        <div className="w-full rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden group animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
          <div className="space-y-2.5">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-black tracking-widest text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-lg uppercase">
              <FaFire className="text-[10px] animate-pulse text-amber-600" />{" "}
              Limited Offers
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight font-[Cinzel]">
              Chef's Seasonal{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Curations
              </span>
            </h2>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed font-medium">
              Exquisite epicurean compositions handcrafted by our culinary
              masters, reserved exclusively for temporary dining intervals.
            </p>
          </div>

          {/* Minimalist Countdown Timer Box Grid */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/60 p-3.5 rounded-2xl self-stretch md:self-auto justify-center transition-colors group-hover:bg-amber-500/5 group-hover:border-amber-500/20 duration-300">
            <FaClock className="text-amber-600 text-sm animate-[spin_8s_linear_infinite]" />
            <div className="text-left font-mono">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                Fresh reset in
              </p>
              <p className="text-sm font-black text-slate-800 mt-1.5 tracking-wider leading-none">
                14h : 22m : 45s
              </p>
            </div>
          </div>
        </div>

        {/* STAGGERED ANIMATED PRODUCT CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredMenuItems.map((item, index) => (
            <div
              key={item._id}
              className="group bg-white border border-slate-100 rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] hover:border-amber-500/20 flex flex-col overflow-hidden h-full transform hover:-translate-y-1.5 transition-all duration-500 ease-out animate-[slideUp_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
              style={{ animationDelay: `${index * 100}ms` }} // Simulates Framer Motion stagger loop natively
            >
              {/* Image Frame Container */}
              <div className="w-full h-48 sm:h-52 overflow-hidden bg-slate-100 relative">
                {/* Floating Absolute Category Tag Badge */}
                <span className="absolute top-4 left-4 z-10 text-[9px] font-black tracking-widest text-amber-700 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl uppercase shadow-sm border border-slate-100">
                  {item.category}
                </span>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Information Content Body Area */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed line-clamp-3">
                    {item.recipe}
                  </p>
                </div>

                {/* Pricing & Checkout Action Footer Row Track */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  {/* Currency Price Indicator Track */}
                  <div className="space-y-0.5">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Rate Price
                    </p>
                    <div className="flex items-center gap-1 text-slate-900 font-black text-base mt-1 tracking-wide leading-none">
                      <FaCoins className="text-[10px] text-slate-400" />
                      <span>${Number(item.price).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Add To Tray Minimalist Micro-Button */}
                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-slate-200 bg-white text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 transform active:scale-95 group-hover:border-amber-500/30 shadow-sm"
                  >
                    <span>Reserve</span>
                    <FaPlus className="text-[7px] opacity-70" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferedSection;
