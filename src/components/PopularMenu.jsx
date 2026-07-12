import TitleBox from "./TitleBox";
import MenuItem from "../shared/MenuItem";
import useMenu from "../hooks/useMenu";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PopularMenu = () => {
  const [items = []] = useMenu();
  const popularItem = items.filter((item) => item.category === "popular");

  return (
    <div className="w-full max-w-6xl mx-auto my-12 px-4 flex flex-col items-center antialiased">
      {/* Dynamic Title Header Section */}
      <TitleBox
        title={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      
      {/* Clean Simplified Catalog Grid Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8">
        {popularItem.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* Modern High-Utility SaaS CTA Redirect Button */}
      <div className="mt-10">
        <Link
          to="/our-menu"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-700 bg-white hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all duration-300 transform active:scale-95 shadow-sm group"
        >
          <span>View Full Menu</span>
          <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
