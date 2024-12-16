import React from "react";
import logo01 from "../assets/images/logo01.png";
import logo02 from "../assets/images/logo02.png";
import logo03 from "../assets/images/logo03.png";
import logo04 from "../assets/images/logo04.png";
import logo05 from "../assets/images/logo05.png";
import logo06 from "../assets/images/logo06.png";

const Brands = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      {/* Header Section */}
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Trending Brands
      </h2>

      {/* Brands Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <img
          src={logo01}
          alt="Logo 1"
          className="w-32 h-32 object-contain hover:scale-105 transition-transform"
        />
        <img
          src={logo02}
          alt="Logo 2"
          className="w-32 h-32 object-contain hover:scale-105 transition-transform"
        />
        <img
          src={logo03}
          alt="Logo 3"
          className="w-32 h-32 object-contain hover:scale-105 transition-transform"
        />
        <img
          src={logo04}
          alt="Logo 4"
          className="w-32 h-32 object-contain hover:scale-105 transition-transform"
        />
        <img
          src={logo05}
          alt="Logo 5"
          className="w-32 h-32 object-contain hover:scale-105 transition-transform"
        />
        <img
          src={logo06}
          alt="Logo 6"
          className="w-32 h-32 object-contain hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default Brands;
