import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLink,
  FaCloudUploadAlt,
  FaSave,
  FaAsterisk,
} from "react-icons/fa";
import TitleBox from "../components/TitleBox";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const hosting_image_key = import.meta.env.VITE_HOSTING_IMAGE_KEY;
const image_hosting_api = `https://imgbb.com{hosting_image_key}`;

const UpdateProfile = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
      photoURL: user?.photoURL || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      let finalPhotoURL = data.photoURL;

      // যদি ইউজার নতুন কোনো ফাইল আপলোড করে থাকে, তবে সেটা IMGBB তে আপলোড হবে
      if (data.image && data.image[0]) {
        const imgData = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          finalPhotoURL = res.data.data.display_url;
        }
      }

      // Auth Context এবং Firebase-এ প্রোফাইল ডাটা আপডেট করা
      await updateUser({
        displayName: data.name,
        photoURL: finalPhotoURL,
      });

      toast.success("Profile credentials updated successfully!");
      navigate("/dashboard/view-profile");
    } catch (error) {
      toast.error(error.message || "Failed to update profile parameters.");
    }
  };

  // Required Field Indicator
  const FormLabel = ({ children, required }) => (
    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1 mb-2">
      {children}{" "}
      {required && (
        <FaAsterisk className="text-[6px] text-red-400 transform -translate-y-0.5" />
      )}
    </label>
  );

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-4 antialiased animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Title Section */}
      <TitleBox title={"---Modify Credentials---"} heading={"UPDATE PROFILE"} />

      <div className="mt-8 bg-white border border-slate-100 shadow-sm rounded-2xl p-6 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT SIDE: CURRENT AVATAR PREVIEW TRACK (4 Columns) */}
        <div className="lg:col-span-4 bg-slate-50/50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center group">
          <FormLabel>Current Picture</FormLabel>
          <div className="w-24 h-24 p-1 rounded-full border-2 border-slate-200 bg-white shadow-sm mt-2 transition-transform duration-500 group-hover:scale-105">
            <img
              src={user?.photoURL || "https://unsplash.com"}
              alt="User current avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <p className="text-[11px] text-slate-400 font-medium mt-4 max-w-[150px] leading-relaxed">
            This asset token represents your identity across the enterprise
            grid.
          </p>
        </div>

        {/* RIGHT SIDE: INTERACTIVE FORM INPUT CHANNELS (8 Columns) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-8 space-y-5 m-0 p-0"
        >
          {/* Full Name Input Track */}
          <div className="space-y-1.5">
            <FormLabel required>Full Name</FormLabel>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                <FaUser className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="Change account name"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-slate-50/40 text-xs font-semibold outline-none transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-amber-500/5 ${errors.name ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-amber-500"}`}
                {...register("name", { required: true })}
              />
            </div>
            {errors.name && (
              <span className="text-xs font-semibold text-red-500 mt-1 block">
                Full name cannot be empty
              </span>
            )}
          </div>

          {/* Manual Image URL Track */}
          <div className="space-y-1.5">
            <FormLabel>Avatar Image URL</FormLabel>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                <FaLink className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="Paste clean direct image hosting endpoint URL link"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/40 text-xs font-semibold outline-none transition-all duration-300 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/5 text-slate-700 placeholder-slate-400"
                {...register("photoURL")}
              />
            </div>
          </div>

          {/* Premium File Upload Interface Drop Zone Mask */}
          <div className="space-y-1.5">
            <FormLabel>Or Upload New Profile Photo</FormLabel>
            <div className="relative group w-full border border-dashed border-slate-200 hover:border-amber-500 bg-slate-50/50 hover:bg-amber-500/[0.01] rounded-xl p-4 transition-all text-center flex flex-col items-center justify-center cursor-pointer">
              <FaCloudUploadAlt className="text-2xl text-slate-400 group-hover:text-amber-500 transition-colors mb-1" />
              <p className="text-[11px] font-medium text-slate-500">
                Click inside this zone tracks to locate computer assets files
              </p>
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                {...register("image")}
              />
            </div>
          </div>

          {/* Submission Button with Lock Guards */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-slate-100 disabled:to-slate-100 disabled:text-slate-400 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl shadow-sm hover:shadow active:scale-95 disabled:transform-none disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Syncing Meta Fields...</span>
                </>
              ) : (
                <>
                  <FaSave className="text-xs" />
                  <span>Save Profile Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
