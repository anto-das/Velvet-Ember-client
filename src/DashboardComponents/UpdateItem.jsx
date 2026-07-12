import { useLoaderData, useNavigate } from 'react-router-dom';
import TitleBox from '../components/TitleBox';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { FaCloudUploadAlt } from 'react-icons/fa';

const hosting_image_key = import.meta.env.VITE_HOSTING_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${hosting_image_key}`;

const UpdateItem = () => {
    const { name, category, price, recipe, _id } = useLoaderData();
    const { handleSubmit, register, reset, formState: { isSubmitting } } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imgData = { image: data.image[0] };
        try {
            const res = await axiosPublic.post(image_hosting_api, imgData, {
                headers: {
                    "content-type": "multipart/form-data",
                }
            });
            
            if (res.data.success) {
                const updatedItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                };
                
                const menuRes = await axiosSecure.patch(`/menu/${_id}`, updatedItem);
                if (menuRes.data.modifiedCount > 0) {
                    reset();
                    navigate('/dashboard/manage-items');
                    toast.success(`${data.name} updated successfully!`);
                }
            }
        } catch (error) {
            toast.error(error.message || "Failed to update item.");
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-6 px-4 antialiased animate-[fadeIn_0.3s_ease-out]">
            {/* Title Section */}
            <TitleBox title={"---Refining Flavor---"} heading={'Update Item'} />

            {/* Clean White Modern Form Card */}
            <div className="mt-8 bg-white border border-slate-100 shadow-sm rounded-2xl p-6 md:p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    
                    {/* Item Name Input */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Recipe Name *</label>
                        <input 
                            type="text" 
                            defaultValue={name}
                            placeholder="Recipe Name" 
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:bg-white focus:border-amber-500 transition-all text-slate-800" 
                            {...register("name", { required: true })}
                        />
                    </div>

                    {/* Grid Section for Category and Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Category *</label>
                            <select 
                                {...register("category", { required: true })} 
                                defaultValue={category}
                                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 outline-none focus:bg-white focus:border-amber-500 cursor-pointer"
                            >
                                <option disabled value="">Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                                <option value="offered">Offered</option>
                            </select>
                        </div>

                        {/* Price Input */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Price ($) *</label>
                            <input 
                                type="number" 
                                step="0.01"
                                placeholder="Price" 
                                defaultValue={price}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:bg-white focus:border-amber-500 transition-all text-slate-800" 
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>

                    {/* Description Textarea */}
                    <div>
                        <label htmlFor="recipe" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Recipe Details *</label>
                        <textarea 
                            {...register("recipe", { required: true })}
                            id="recipe"
                            placeholder="Write comprehensive recipe descriptors here..."
                            defaultValue={recipe}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:bg-white focus:border-amber-500 transition-all text-slate-800 h-32 resize-none"
                        />
                    </div>

                    {/* Modern Clean File Upload Field */}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Replace Menu Image *</label>
                        <div className="relative group w-full border border-dashed border-slate-200 hover:border-amber-500 bg-slate-50 rounded-xl p-4 transition-all text-center flex flex-col items-center justify-center cursor-pointer">
                            <FaCloudUploadAlt className="text-2xl text-slate-400 group-hover:text-amber-500 transition-colors mb-1" />
                            <p className="text-[11px] font-medium text-slate-500">Click to choose a new display photo file</p>
                            <input 
                                {...register("image", { required: true })} 
                                type="file" 
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow active:scale-95 disabled:bg-slate-100 disabled:text-slate-400 disabled:transform-none disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    <span>Updating...</span>
                                </div>
                            ) : (
                                "Update Item"
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
