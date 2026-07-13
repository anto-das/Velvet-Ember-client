import signInImg from "../assets/others/authentication2.png";
import bgImg from "../assets/others/authentication.png";
import logo from "../assets/icon/logo.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState, useRef } from "react";
import { FaEye, FaEyeSlash, FaUserShield } from "react-icons/fa";
import { AuthContext } from "../providers/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../components/SocialLogin";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Refs to dynamically control input fields for the Demo Credentials filler
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const captchaInputRef = useRef(null);

  useEffect(() => {
    // Initializing 6-character captcha on mount
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    /* 
      SECURITY NOTE (Senior Engineer Review):
      Do NOT use bcrypt here in React. Passwords must be transmitted in plain text 
      over secure HTTPS. Your backend server handles the bcrypt.compare() logic safely.
    */
    signIn(email, password)
      .then(() => {
        toast.success("Welcome back to Velvet Ember!");
        navigate(location.state || "/");
      })
      .catch((err) => console.log(err));
  };

  const handleCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
      toast.success("Captcha verified successfully");
    } else {
      setDisabled(true);
    }
  };

  // Feature: One-Click Autofill Demo Credentials for testing and presentation
  const fillDemoCredentials = (role) => {
    if (!emailInputRef.current || !passwordInputRef.current) return;

    if (role === "user") {
      emailInputRef.current.value = "demo.user@velvetember.com";
      passwordInputRef.current.value = "VelvetEmber2026!";
    } else {
      emailInputRef.current.value = "admin@velvetember.com";
      passwordInputRef.current.value = "Admin@2026!";
    }

    setDisabled(false);

    if (captchaInputRef.current) {
      captchaInputRef.current.value = "DEMO69";
      captchaInputRef.current.placeholder = "Bypassed via Demo Mode";
    }

    setShowDemoModal(false);

    toast.success(
      `${role === "user" ? "User" : "Admin"} demo loaded successfully!`,
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 antialiased text-neutral-800"
    >
      {/* Premium Frosted Glass Layout Container */}
      <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Branding Column (Hidden on small viewports) */}
        <div className="hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-amber-50/50 to-orange-50/30 h-full border-r border-neutral-100">
          <img
            src={signInImg}
            alt="Velvet Ember Fine Dining Authentication Visual"
            className="w-full max-w-sm drop-shadow-xl animate-pulse [animation-duration:8s]"
          />
          <div className="text-center mt-6 space-y-2">
            <Link to={"/"}>
              <div className="flex gap-1 items-center justify-center">
                <img src={logo} className="w-8 mb-3" alt="" />
                <p className=" capitalize shadow-none border-none text-lg font-bold text-white">
                  <span className="italic py-0 rounded-2xl bg-amber-500 font-extrabold tracking-widest text-white uppercase ">
                    Velvet
                  </span>

                  <span className="ml-1 text-amber-500 font-extrabold tracking-widest  uppercase">
                    Ember
                  </span>
                </p>
              </div>
            </Link>
            <p className="text-sm text-neutral-500 font-light max-w-xs">
              Experience culinary artistry and luxury at your fingertips.
            </p>
          </div>
        </div>

        {/* Right Form Input Column */}
        <div className="p-8 lg:p-12 w-full">
          <div className="max-w-md mx-auto space-y-6">
            {/* Header Identity */}
            <div className="space-y-1 text-center md:text-left">
              <h1 className="text-3xl font-serif font-bold text-neutral-900 tracking-tight">
                Sign In
              </h1>
              <p className="text-sm text-neutral-500">
                Welcome back! Please enter your details below.
              </p>
            </div>

            {/* Quick Demo Login Action Badge */}
            <button
              type="button"
              onClick={() => setShowDemoModal(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/60 rounded-xl text-xs font-semibold text-[#cc7d05] transition-all duration-200 active:scale-[0.99] group shadow-sm"
            >
              <FaUserShield className="text-sm group-hover:scale-110 transition-transform" />
              <span>Click for Instant Demo</span>
            </button>

            {/* Main Interactive Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Element */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-500">
                  Email Address
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d1a054] focus:bg-white transition-all shadow-inner"
                  placeholder="name@example.com"
                />
              </div>

              {/* Password Element with absolute micro-interactions */}
              <div className="space-y-1.5 relative">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-500">
                  Password
                </label>
                <div className="relative">
                  <input
                    ref={passwordInputRef}
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d1a054] focus:bg-white transition-all shadow-inner pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    className="absolute inset-y-0 right-4 flex items-center text-neutral-400 hover:text-neutral-600 transition-colors text-base"
                  >
                    {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              {/* Secure Captcha Validation Matrix */}
              <div className="space-y-2 bg-neutral-50/60 p-3.5 rounded-xl border border-neutral-200/50">
                <div className="overflow-hidden rounded-lg bg-white border border-neutral-200 p-1 shadow-sm">
                  <LoadCanvasTemplate />
                </div>
                <input
                  ref={captchaInputRef}
                  type="text"
                  onBlur={handleCaptcha}
                  name="captcha"
                  className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d1a054] transition-all shadow-inner text-center tracking-widest font-mono"
                  placeholder="Type code above & click away"
                />
              </div>

              {/* Core Submit Button */}
              <div className="pt-2">
                <input
                  disabled={disabled}
                  type="submit"
                  value="Sign In to Account"
                  className="w-full bg-[#d1a054] hover:bg-[#b88c45] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg shadow-amber-700/10 active:scale-[0.99]"
                />
              </div>

              {/* Navigation Link to Sign Up */}
              <p className="text-center text-sm text-neutral-500 pt-2">
                New to Velvet Ember?{" "}
                <Link
                  to="/sign-up"
                  className="text-[#cc7d05] font-semibold hover:underline underline-offset-4 transition-all"
                >
                  Create a luxury account
                </Link>
              </p>
            </form>

            {/* Social Authentication Node */}
            <div className="space-y-4 pt-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <span className="relative px-3 text-xs uppercase tracking-widest bg-white text-neutral-400 font-medium">
                  Or connect with
                </span>
              </div>
              <SocialLogin />
            </div>
            {showDemoModal && (
              <div
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setShowDemoModal(false)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-[92%] max-w-md overflow-hidden rounded-3xl border border-white/30 bg-white shadow-2xl animate-in zoom-in-95 duration-200"
                >
                  {/* Top Gradient */}
                  <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500"></div>

                  <div className="p-7">
                    {/* Header */}
                    <div className="text-center space-y-2">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                        <FaUserShield className="text-3xl text-amber-600" />
                      </div>

                      <h2 className="text-2xl font-bold text-neutral-800">
                        Select Demo Account
                      </h2>

                      <p className="text-sm text-neutral-500">
                        Choose how you'd like to explore Velvet Ember.
                      </p>
                    </div>

                    {/* Options */}
                    <div className="mt-7 space-y-4">
                      {/* USER */}

                      <button
                        onClick={() => fillDemoCredentials("user")}
                        className="group w-full rounded-2xl border border-neutral-200 p-5 transition-all duration-300 hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                            👤
                          </div>

                          <div className="flex-1 text-left">
                            <h3 className="font-semibold text-lg text-neutral-800">
                              Customer Demo
                            </h3>

                            <p className="text-sm text-neutral-500">
                              Browse food, place orders and enjoy the customer
                              experience.
                            </p>
                          </div>

                          <span className="text-xl transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </button>

                      {/* ADMIN */}

                      <button
                        onClick={() => fillDemoCredentials("admin")}
                        className="group w-full rounded-2xl border border-neutral-200 p-5 transition-all duration-300 hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                            🛡️
                          </div>

                          <div className="flex-1 text-left">
                            <h3 className="font-semibold text-lg text-neutral-800">
                              Admin Demo
                            </h3>

                            <p className="text-sm text-neutral-500">
                              Access dashboard, manage menu, orders and
                              restaurant analytics.
                            </p>
                          </div>

                          <span className="text-xl transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </button>
                    </div>

                    {/* Footer */}

                    <button
                      onClick={() => setShowDemoModal(false)}
                      className="mt-6 w-full rounded-xl border border-neutral-200 py-3 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
