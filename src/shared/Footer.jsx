import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f0303] text-slate-400 font-sans overflow-hidden border-t border-white/5 antialiased">
      
      {/* Decorative ambient background glows tailored for Velvet Ember */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <h1 className="text-xl font-black tracking-widest text-white uppercase flex items-center transition-all duration-300">
                <span className="italic px-2.5 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 uppercase text-sm">
                  Velvet
                </span>
                <span className="ml-1.5 text-white tracking-widest uppercase text-sm group-hover:text-amber-400 transition-colors">
                  Ember
                </span>
              </h1>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 font-medium max-w-sm">
              A refined digital culinary destination blending timeless elegance with cutting-edge gastronomy flavors.
            </p>
            
            {/* Opening Hours Badge (Glassmorphic) */}
            <div className="flex flex-col p-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md max-w-xs shadow-inner">
              <div className="flex items-center gap-2 text-amber-500 text-[11px] font-bold uppercase tracking-widest mb-2">
                <FaClock className="text-xs" />
                <span>Dining Hours</span>
              </div>
              <span className="text-xs font-semibold text-slate-200">Mon - Fri: 08:00 - 22:00</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Sat - Sun: 10:00 - 23:00</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Navigation
            </h2>
            <ul className="space-y-3 pt-3 text-xs list-none p-0 m-0">
              {["Home", "Our Menu", "Our Shop", "Sign In"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
                return (
                  <li key={item}>
                    <Link 
                      to={path} 
                      className="inline-block text-slate-400 hover:text-amber-500 font-bold uppercase tracking-wider transition-all duration-300 hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Address & Contact
            </h2>
            <div className="space-y-4 pt-3 text-xs font-medium text-slate-400">
              <div className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="text-amber-500 text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-slate-300 leading-relaxed">Sonargoan, Narayanganj,<br />Dhaka-1100</p>
              </div>
              <div className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-amber-500 text-sm group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+8801800000040" className="text-slate-300 hover:text-amber-400 transition-colors tracking-wide">+88018******40</a>
              </div>
              <div className="flex items-center gap-3 group">
                <FaEnvelope className="text-amber-500 text-sm group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@velvetember.com" className="text-slate-300 hover:text-amber-400 transition-colors">info@velvetember.com</a>
              </div>
            </div>
          </div>

          {/* Column 4: Social Connection */}
          <div className="space-y-4">
            <h2 className="text-[10px] font-bold text-white uppercase tracking-[0.25em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-6 after:h-[2px] after:bg-amber-500">
              Connect With Us
            </h2>
            <p className="text-xs font-medium text-slate-400 pt-2 leading-relaxed">
              Join us on social media for exclusive dining rewards and limited seasonal updates.
            </p>
            
            {/* Elegant Social Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com" },
                { icon: <FaYoutube />, label: "YouTube", url: "https://youtube.com" },
                { icon: <FaFacebookF />, label: "Facebook", url: "https://facebook.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.01] border border-white/5 text-slate-400 hover:text-slate-900 hover:bg-amber-500 hover:border-amber-500 shadow-md transition-all duration-300 transform active:scale-95"
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Clean Minimal Separator Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-10" />

        {/* Bottom Bar Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
          <p className="text-center sm:text-left">
            Copyright © {currentYear} - All rights reserved by{" "}
            <Link to="/" className="text-slate-400 font-bold hover:text-amber-500 transition-colors normal-case">
              Velvet Ember Restaurant Ltd.
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors transition-all duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors transition-all duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
