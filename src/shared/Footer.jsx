import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111827] text-gray-400 font-sans overflow-hidden border-t border-gray-800/50">
      {/* Decorative ambient background glows for a premium feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <h1 className="text-2xl font-extrabold tracking-widest text-white uppercase transition-colors group-hover:text-amber-500">
                Velvet <span className="text-amber-500 transition-colors group-hover:text-white">Ember</span>
              </h1>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 font-light">
              A refined digital culinary destination blending timeless elegance with cutting-edge gastronomy flavors.
            </p>
            {/* Opening Hours Badge */}
            <div className="inline-flex flex-col p-3 bg-gray-900/60 border border-gray-800 rounded-xl backdrop-blur-sm">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">⏱️ Dining Hours</span>
              <span className="text-xs text-gray-300">Mon - Fri: 08:00 - 22:00</span>
              <span className="text-xs text-gray-400">Sat - Sun: 10:00 - 23:00</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-white uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-amber-500">
              Navigation
            </h2>
            <ul className="space-y-3 pt-2 text-sm">
              {["Home", "Our Menu", "Our Shop", "Sign In"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`;
                return (
                  <li key={item}>
                    <Link 
                      to={path} 
                      className="inline-block hover:text-amber-500 transition-all duration-300 hover:translate-x-1 font-medium text-gray-400"
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
            <h2 className="text-xs font-bold text-white uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-amber-500">
              Address & Contact
            </h2>
            <div className="space-y-3 pt-2 text-sm font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-500 mt-0.5">📍</span>
                <p className="text-gray-300">Sonargoan, Narayanganj,<br />Dhaka-1100</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-500">📞</span>
                <a href="tel:+8801800000040" className="text-gray-300 hover:text-amber-500 transition-colors tracking-wide">+88018******40</a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-amber-500">✉️</span>
                <a href="mailto:info@velvetember.com" className="text-gray-300 hover:text-amber-500 transition-colors">info@velvetember.com</a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / Social Connection */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-white uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-amber-500">
              Connect With Us
            </h2>
            <p className="text-sm font-light text-gray-400 pt-2">
              Join us on social media for exclusive dining rewards and limited seasonal updates.
            </p>
            
            {/* Elegant Social Action Icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { name: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                { name: "YouTube", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
                { name: "Facebook", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={`https://${social.name.toLowerCase()}.om`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                    <path d={social.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10" />

        {/* Bottom Bar Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light tracking-wide text-gray-500">
          <p>
            Copyright © {currentYear} - All rights reserved by{" "}
            <span className="text-gray-400 font-medium hover:text-amber-500 transition-colors">
              Velvet Ember Restaurant Ltd.
            </span>
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
