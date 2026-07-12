import React from "react";

const Slide = ({ img }) => {
  return (
    <div className="w-full h-[80vh]">
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

export default Slide;
