import React from 'react'
import manImage from "../assets/images/manImage.png";

const SliderSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white w-full min-h-screen">
      {/* Left Section with Image */}
      <div className="md:w-1/2 h-full flex items-center justify-center">
        <img
          src={manImage}
          alt="Winter Jacket"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Text */}
      <div className="md:w-1/2 flex flex-col items-start justify-center p-8 text-center md:text-left">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Bring the warmth.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Everyone needs a good winter jacket. Find yours with our collection
          and more.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default SliderSection