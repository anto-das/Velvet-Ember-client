import { useState } from "react";
import TitleBox from "../components/TitleBox";
import StarRating from "./StarRating";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { FaUtensils, FaLightbulb, FaCommentAlt, FaStar } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { recipe, suggestion, express } = data;

    // Guard clause to ensure an active star count is committed before form entry passes
    if (rating === 0) {
      toast.error("Please pick a star rating level before submitting!");
      return;
    }

    const review = {
      RecipeLiked: recipe,
      suggestion: suggestion,
      details: express,
      rating: rating,
      name: user?.displayName || "Anonymous Client",
    };

    try {
      const res = await axiosSecure.post("/review", review);
      if (res?.data.insertedId) {
        toast.success("Thank you for sharing your experience with us!");
        navigate("/dashboard/user-home");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16 antialiased selection:bg-amber-500 selection:text-white">
      {/* Title Block Banner */}
      <div className="pt-6">
        <TitleBox
          title={"---Sharing is Caring!!!---"}
          heading={"GIVE A REVIEW..."}
        />
      </div>

      {/* Main Interactive Form Body Canvas */}
      <div className="max-w-3xl mx-auto mt-6 px-4 animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_15px_45px_-15px_rgba(0,0,0,0.05)] overflow-hidden p-6 md:p-10 lg:p-12 space-y-8">
          {/* Architectural Dynamic Star Evaluation Segment */}
          <div className="flex flex-col items-center justify-center text-center pb-6 border-b border-slate-100">
            <span className="text-[10px] font-black tracking-widest text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md uppercase">
              Experience Rating
            </span>
            <h1 className="uppercase text-xl font-black text-slate-800 mt-3 tracking-tight font-[Cinzel]">
              Rate Your Experience
            </h1>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Tap the star gauges to map your sensory dining assessment level.
            </p>

            {/* Custom Embedded Star Component Frame wrapper */}
            <div className="transform scale-110 md:scale-125 transition-transform duration-300">
              <StarRating value={rating} onchange={setRating} />
            </div>
          </div>

          {/* Review Form Track Input Grid Mapping */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Recipe Liked input group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <FaUtensils className="text-amber-500 text-xs" /> Which recipe
                did you enjoy the most?
              </label>
              <input
                type="text"
                {...register("recipe", { required: true })}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-amber-500/5 ${errors.recipe ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                placeholder="e.g., Smoked Obsidian Ribeye Steak"
              />
              {errors.recipe && (
                <span className="text-xs font-semibold text-red-500 mt-1 block">
                  Recipe tracking context name is required
                </span>
              )}
            </div>

            {/* Suggestion input group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <FaLightbulb className="text-amber-500 text-xs" /> Do you have
                any suggestions for improvement?
              </label>
              <input
                type="text"
                {...register("suggestion", { required: true })}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-4 focus:ring-amber-500/5 ${errors.suggestion ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                placeholder="e.g., Slightly faster ambient drink serving timelines..."
              />
              {errors.suggestion && (
                <span className="text-xs font-semibold text-red-500 mt-1 block">
                  Feedback improvement data metrics are required
                </span>
              )}
            </div>

            {/* Express Care Textarea input group */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <FaCommentAlt className="text-amber-500 text-[10px]" /> Express
                your overall evaluation comments
              </label>
              <textarea
                rows="4"
                {...register("express", { required: true, minLength: 5 })}
                className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 text-sm transition-all duration-300 outline-none text-slate-800 placeholder-slate-400 resize-none focus:bg-white focus:ring-4 focus:ring-amber-500/5 ${errors.express ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                placeholder="Share your dining story or details here..."
              />
              {errors.express && (
                <span className="text-xs font-semibold text-red-500 mt-1 block">
                  Review description cannot be empty
                </span>
              )}
            </div>

            {/* Velvet Amber Custom CTA Action Submit Button Trigger */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-xl shadow-[0_4px_15px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.35)] disabled:shadow-none transition-all duration-300 transform active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Publishing Feedback...</span>
                  </>
                ) : (
                  <>
                    <span>Send Review</span>
                    <IoIosSend className="text-sm transform group-hover:translate-x-1 transition-transform" />
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

export default AddReview;
