import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative border border-gray-400">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-[60vh] object-cover"
          src={assets.carousel_1}
          alt="Hero Background"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
          <h2 className="prata-regular text-2xl sm:py-2 lg:text-4xl leading-relaxed">
            New Title Here
          </h2>
          <p className="text-sm md:text-base py-4">
            This is an example paragraph text to describe the content shown in 
            the image. You can provide more details here to engage the readers.
          </p>
          <NavLink
            to="/jésusmicine"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
