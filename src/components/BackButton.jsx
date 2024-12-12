import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleBack}
        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 animate-slide-in"
      >
        <IoArrowBackSharp className="mr-2 text-xl" />
        Back
      </button>
    </div>
  );
};

export default BackButton;
