import { FaUtensils, FaCloudUploadAlt, FaAsterisk } from 'react-icons/fa';
import TitleBox from '../components/TitleBox';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const hosting_image_key = import.meta.env.VITE_HOSTING_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm();
  
  const onSubmit = async (data) => {
    const imgData = { image: data.image[0] };
    try {
      const res = await axiosPublic.post(image_hosting_api, imgData, {
        headers: {
          "content-type": "multipart/form-data",
        }
      });
      
      if (res.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url
        };
        
        const menuRes = await axiosSecure.post('/menu', menuItem);
        if (menuRes.data.insertedId) {
          reset();
          toast.success(`${data.name} is successfully added to the menu!`);
        }
      }
    } catch (error) {
      toast.error(error.message || "Failed to catalog product item configuration tracks.");
    }
  };

  // Reusable mini visual helper component to handle unified required fields indicators
  const FormLabel = ({ children }) => (
    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1 mb-2">
      {children} <FaAsterisk className="text-[6px] text-red-400 transform -translate-y-0.5" />
    </label>
  );

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16 antialiased selection:bg-amber-500 selection:text-white">
      {/* Structural Header Banner */}
      <div className="pt-6">
        <TitleBox title={"---What's new?---"} heading={'ADD AN ITEM'} />
      </div>

      {/* Main Interactive Workspace Panel with entrance bounce effect */}
      <div className="max-w-4xl mx-auto mt-6 px-4 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_15px_45px_-15px_rgba(0,0,0,0.05)] overflow-hidden p-6 md:p-10 lg:p-12">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Field Track 1: Recipe Identity Name */}
            <div>
              <FormLabel>Recipe Name</FormLabel>
              <input 
                type="text" 
                placeholder="e.g. Woodfired Truffle Pizza" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5" 
                {...register("name", { required: true })}
              />
            </div>

            {/* Field Track 2: Categorization & Metric Valuation Pricing Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Category Select Module */}
              <div>
                <FormLabel>Category</FormLabel>
                <div className="relative">
                  <select 
                    {...register("category", { required: true })} 
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select category classification...</option>
                    <option value="salad">Salad Selection</option>
                    <option value="soup">Soup Selection</option>
                    <option value="pizza">Pizza Crusts</option>
                    <option value="dessert">Sweet Dessert</option>
                    <option value="drink">Craft Drink</option>
                    <option value="offered">Seasonal Offered</option>
                  </select>
                  {/* Custom Styled Chevron Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://w3.org" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Numerical Balance Value Price Track */}
              <div>
                <FormLabel>Price ($)</FormLabel>
                <input 
                  type="number" 
                  step="0.01"
                  placeholder="0.00" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5" 
                  {...register("price", { required: true })}
                />
              </div>
            </div>

            {/* Field Track 3: Narrative Text Description Content Block */}
            <div>
              <FormLabel>Recipe Details</FormLabel>
              <textarea 
                {...register("recipe", { required: true })}
                id="recipe"
                rows="5"
                placeholder="Detail the taste profiles, ingredients matrices, preparation notes, or sensory highlights..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 resize-none focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5"
              />
            </div>

            {/* Field Track 4: File Image Payload Integration Zone */}
            <div>
              <FormLabel>Product Showcase Image</FormLabel>
              <div className="relative group w-full border-2 border-dashed border-slate-200 hover:border-amber-500 bg-slate-50/40 hover:bg-amber-500/[0.01] rounded-2xl p-6 transition-all duration-300 text-center flex flex-col items-center justify-center cursor-pointer">
                <FaCloudUploadAlt className="text-3xl text-slate-400 group-hover:text-amber-500 transition-colors duration-300 mb-2" />
                <p className="text-xs font-medium text-slate-600">Drag your showcase digital frame asset here, or click to browse</p>
                <p className="text-[10px] text-slate-400 mt-1">PNG, JPG or WEBP formats accepted</p>
                
                <input 
                  {...register("image", { required: true })} 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
              </div>
            </div>

            {/* Action Executive Submit Activation Button */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-xl shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] disabled:shadow-none transition-all duration-300 transform active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Cataloging Product Asset...</span>
                  </>
                ) : (
                  <>
                    <span>Add Item</span>
                    <FaUtensils className="text-xs" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
