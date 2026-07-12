import { useState, useMemo } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import TitleBox from "../components/TitleBox";
import useMenu from "../hooks/useMenu";
import { FaEdit, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const queryClient = useQueryClient();
    const [items = []] = useMenu();
    const axiosSecure = useAxiosSecure();

    // --- Search, Filter & Sort States ---
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("default");

    // --- Filter & Sort Engine ---
    const filteredAndSortedItems = useMemo(() => {
        let result = [...items];

        // 1. Search Filter
        if (searchTerm.trim() !== "") {
            result = result.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 2. Category Filter
        if (selectedCategory !== "all") {
            result = result.filter(item => item.category === selectedCategory);
        }

        // 3. Sort Logic (Price and Rating/Reviews)
        if (sortBy === "priceLow") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "priceHigh") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === "topReviewed") {
            result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        return result;
    }, [items, searchTerm, selectedCategory, sortBy]);

    const handleItemDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: `Remove "${item.name}" from inventory?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d97706", 
            cancelButtonColor: "#ef4444",   
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            queryClient.invalidateQueries(["menu"]);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item removed successfully.",
                                icon: "success",
                                confirmButtonColor: "#d97706"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-6 px-4 antialiased animate-[fadeIn_0.3s_ease-out]">
            <TitleBox title={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'} />

            {/* Simple Minimal Top Toolbar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-white border border-slate-100 p-4 rounded-xl">
                
                {/* Search Bar */}
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                        <FaSearch className="text-xs" />
                    </span>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search recipe..."
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:bg-white focus:border-amber-500 transition-all"
                    />
                </div>

                {/* Category Selector */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider outline-none text-slate-600 focus:bg-white focus:border-amber-500 cursor-pointer"
                >
                    <option value="all">All Categories</option>
                    <option value="salad">Salad</option>
                    <option value="soup">Soup</option>
                    <option value="pizza">Pizza</option>
                    <option value="dessert">Dessert</option>
                    <option value="drink">Drink</option>
                    <option value="offered">Offered</option>
                </select>

                {/* Sort Selector */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider outline-none text-slate-600 focus:bg-white focus:border-amber-500 cursor-pointer"
                >
                    <option value="default">Default Sort</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="topReviewed">Top Reviewed</option>
                </select>
            </div>

            {/* Simple Table Card */}
            <div className="mt-4 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                                <th className="py-4 px-6 w-16 text-center">#</th>
                                <th className="py-4 px-4 w-24">Preview</th>
                                <th className="py-4 px-6">Item Name</th>
                                <th className="py-4 px-6 w-32">Price</th>
                                <th className="py-4 px-6 w-36 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-slate-600 divide-y divide-slate-100 bg-white">
                            {filteredAndSortedItems.map((item, index) => (
                                <tr key={item._id} className="hover:bg-slate-50/50 transition-colors duration-150">
                                    
                                    {/* Index */}
                                    <td className="py-3.5 px-6 text-slate-400 text-center font-semibold text-xs">{index + 1}</td>
                                    
                                    {/* Image Preview */}
                                    <td className="py-3.5 px-4">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                    </td>

                                    {/* Name & Category */}
                                    <td className="py-3.5 px-6">
                                        <p className="font-semibold text-slate-800 tracking-tight">{item.name}</p>
                                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{item.category}</span>
                                    </td>
                                    
                                    {/* Price */}
                                    <td className="py-3.5 px-6 text-slate-900 font-bold">${Number(item.price || 0).toFixed(2)}</td>
                                    
                                    {/* Actions */}
                                    <td className="py-3.5 px-6">
                                        <div className="flex items-center justify-center gap-1">
                                            <Link to={`/dashboard/update-item/${item._id}`}>
                                                <button className="p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-all" title="Edit Item">
                                                    <FaEdit className="text-base" />
                                                </button>
                                            </Link>
                                            <button onClick={() => handleItemDelete(item)} className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all" title="Delete Item">
                                                <RiDeleteBin6Line className="text-base" />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            ))}

                            {/* Empty Fallback */}
                            {filteredAndSortedItems.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-16 text-slate-400 font-medium text-xs tracking-wide">
                                        No items match the current filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;