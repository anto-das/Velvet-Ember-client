import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthContext";
import signInImg from "../assets/others/authentication2.png";
import bgImg from "../assets/others/authentication.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin";

const SignUp = () => {
  const { signUp, updateUser } = useContext(AuthContext);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    signUp(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
              role: "user",
              image: photo,
              password: password,
            };
            axiosPublic.post("/user", userInfo).then((res) => {
              if (res.data.insertedId) {
                toast.success("Sign up successfully!");
                navigate(location.state || "/");
              }
            });
          });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div 
      style={{ backgroundImage: `url(${bgImg})` }} 
      className="hero min-h-screen bg-cover bg-center flex items-center justify-center p-4 relative"
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden p-6 md:p-12 gap-8">
        
        {/* Left Side: Illustration Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={signInImg} 
            alt="Sign Up Illustration" 
            className="w-full max-w-md object-contain animate-pulse-slow"
          />
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-2">Create Account</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Join us today! Please enter your details.</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                {...register("name", { required: true })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" 
                placeholder="John Doe" 
              />
              {errors.name && (
                <span className="text-xs text-red-500 mt-1 block">Name is required</span>
              )}
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Photo URL</label>
              <input 
                type="text" 
                {...register("photo", { required: true })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" 
                placeholder="https://example.com" 
              />
              {errors.photo && (
                <span className="text-xs text-red-500 mt-1 block">Photo URL is required</span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                {...register("email", { required: true })} 
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition" 
                placeholder="name@company.com" 
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 block">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={isShowPassword ? "text" : "password"} 
                  {...register("password", { 
                    required: true, 
                    minLength: 6, 
                    maxLength: 20, 
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/, 
                  })} 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition pr-10" 
                  placeholder="••••••••" 
                />
                <button
                  type="button"
                  onClick={() => setIsShowPassword(!isShowPassword)} 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-amber-600 transition"
                >
                  {isShowPassword ? <FaEye className="text-lg" /> : <FaEyeSlash className="text-lg" />}
                </button>
              </div>
              
              {/* Password Errors Wrapper */}
              <div className="mt-1 space-y-0.5">
                {errors.password?.type === "required" && (
                  <span className="text-xs text-red-500 block">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-xs text-red-500 block">Password must be at least 6 characters</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-xs text-red-500 block">Password cannot exceed 20 characters</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-xs text-red-500 block leading-tight">
                    Must include uppercase, lowercase, number, and special character.
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform active:scale-[0.98]"
              >
                Sign Up
              </button>
            </div>

            {/* Redirect link */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Already Registered?{" "}
              <Link to="/sign-in" className="text-amber-600 font-bold hover:underline ml-1">
                Go to sign in
              </Link>
            </p>
          </form>

          {/* Social Divider */}
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">Or sign up with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Logins */}
          <div className="flex justify-center">
            <SocialLogin />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
