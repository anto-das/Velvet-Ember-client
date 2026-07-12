import React, { useState } from "react";
import { BiChevronLeft, BiShoppingBag, BiHeart } from "react-icons/bi";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";

const FoodItemDetails = () => {
  // Your provided mock data object
  const item = useLoaderData();
  const user = useAuth().user; // Assuming you have a useAuth hook to get the user

  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = (e) => {
    const cartDoc = {
      menuId: item._id,
      email: user.email,
      name: item.name,
      image: item.image,
      price: item.price,
      category: item.category,
      quantity,
    };
    if (user && user.email) {
      axiosSecure
        .post("/carts", cartDoc)
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success(`${name} added to your cart`);
            refetch();
          }
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast((t) => {
        return (
          <div className="space-y-2">
            <p className="text-lg">Sorry, you're not signed in!</p>
            <p className="text-sm text-center">Do you want to sign in?</p>
            <div className="flex justify-around items-center">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  navigate("/sign-in");
                }}
                className="btn btn-xs bg-blue-400 text-white"
              >
                Yes
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="btn btn-xs bg-red-500"
              >
                No
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-neutral-800 antialiased font-sans px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Navigation / Action Bar */}
        <header className="flex items-center justify-between mb-8 md:mb-12">
          <button className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors group">
            <BiChevronLeft className="text-xl transition-transform group-hover:-translate-x-1" />
            Back to Menu
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2.5 rounded-full border border-neutral-200 bg-white shadow-sm hover:bg-neutral-50 transition-colors"
            >
              <BiHeart
                className={`text-xl ${isFavorite ? "fill-red-500 text-red-500" : "text-neutral-600"}`}
              />
            </button>
          </div>
        </header>

        {/* Core Product Section */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Image Canvas Layout */}
          <section className="lg:col-span-7 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 rounded-2xl md:rounded-[2.5rem] shadow-xl border border-neutral-200/40">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Luxury category element */}
              <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#D99904] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm border border-[#D99904]/10">
                {item.category}
              </span>
            </div>
          </section>

          {/* Right Column: Culinary Details & Booking Info */}
          <section className="lg:col-span-5 flex flex-col h-full justify-between">
            <div className="space-y-6">
              {/* Product Heading & Premium Price Tag */}
              <div className="border-b border-neutral-200/60 pb-6 space-y-3">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
                  {item.name}
                </h1>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-mono font-semibold text-[#D99904]">
                    ${(item.price * quantity).toFixed(2)}
                  </span>
                  {quantity > 1 && (
                    <span className="text-sm text-neutral-400 font-light">
                      (${item.price.toFixed(2)} each)
                    </span>
                  )}
                </div>
              </div>

              {/* Chef's Recipe Description Box */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-400">
                  Chef's Recipe & Ingredients
                </h3>
                <p className="text-neutral-600 text-base leading-relaxed font-light">
                  {item.recipe}
                </p>
              </div>

              {/* Culinary Metas (Add value to fine dining user experience) */}
              <div className="grid grid-cols-3 gap-4 border-y border-neutral-200/60 py-5 my-2">
                <div className="text-center border-r border-neutral-100">
                  <p className="text-xs text-neutral-400">Prep Time</p>
                  <p className="font-medium text-sm text-neutral-700">
                    15-20 Mins
                  </p>
                </div>
                <div className="text-center border-r border-neutral-100">
                  <p className="text-xs text-neutral-400">Serving</p>
                  <p className="font-medium text-sm text-neutral-700">
                    Standard (1P)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-neutral-400">Dietary</p>
                  <p className="font-medium text-sm text-neutral-700">
                    Fresh Seafood
                  </p>
                </div>
              </div>
            </div>

            {/* Interaction Box (Quantity controller & Add to Cart Action) */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center justify-between border border-neutral-300 rounded-xl bg-white p-1 sm:w-36 shadow-sm">
                  <button
                    onClick={decrementQty}
                    className="p-3 rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="font-mono font-medium text-lg w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQty}
                    className="p-3 rounded-lg text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>

                {/* Main Action Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#D99904] hover:bg-[#c28803] active:scale-[0.99] text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg shadow-[#D99904]/10"
                >
                  <BiShoppingBag className="text-xl" />
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FoodItemDetails;
