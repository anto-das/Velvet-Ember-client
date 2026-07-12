import React from "react";

export const HowItWorksLight = () => {
  const steps = [
    {
      id: "01",
      icon: "✨",
      title: "Discover & Select",
      desc: "Explore our curated seasonal menu crafted by world-class culinary masters.",
    },
    {
      id: "02",
      icon: "🍳",
      title: "Custom Chef Prep",
      desc: "Our kitchen begins preparing your order with fresh, locally sourced ingredients.",
    },
    {
      id: "03",
      icon: "🚲",
      title: "Express Velvet Delivery",
      desc: "Your hot, premium meal is securely packaged and delivered to your doorstep.",
    },
  ];

  return (
    <section className=" py-20 px-6 relative overflow-hidden font-sans">
      {/* Premium Ambient Background Accents */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full " />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-0">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.25em] block mb-2">
            Seamless Journey
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How{" "}
            <span className="italic py-0 rounded-2xl bg-amber-500 font-extrabold tracking-widest text-white uppercase ">
              Velvet
            </span>
            <span className="ml-2 text-amber-500 font-extrabold tracking-widest  uppercase">
              Ember
            </span>
            Works
          </h2>
          <div className="w-12 h-[3px] bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group p-8 rounded-2xl bg-white border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.12)] hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Step Number Background Badge */}
              <span className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-amber-500/10 transition-colors duration-500 select-none">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] group-hover:scale-110 group-hover:border-amber-500/30 group-hover:bg-amber-50 transition-all duration-500 mb-6">
                {step.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 font-normal leading-relaxed">
                {step.desc}
              </p>

              {/* Modern Card Accent Footer Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-amber-500 rounded-full group-hover:w-1/3 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
