import React from 'react';
import { assets } from '../assets/assets';

const OracleSat = () => {
  return (
    <div className="pt-10 p-4 flex justify-center items-center min-h-full bg-yellow-100">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden  hover:shadow-xl">
        <div className="flex flex-col sm:flex-row">
          {/* Image Section */}
          <div className="sm:w-2/5 w-full">
            <img
              src={assets.oracle_sat}
              alt="Oracle Sat"
              className="object-cover h-full w-full"
            />
          </div>
          {/* Text Section */}
          <div className="p-6 sm:w-3/5 w-full">
            <h2 className="text-2xl font-bold mb-4 text-red-500 text-center">
              Oracle Sat
            </h2>
            <p className="text-gray-600 mb-2">
              Oracle Sat is an innovative solution aimed at revolutionizing how we approach satellite technology and its applications. It leverages cutting-edge tools to provide seamless communication and data services.
            </p>
            <p className="text-gray-600 mb-2">
              The project is a cornerstone for advancing our understanding of satellite infrastructure, with significant implications for both commercial and scientific sectors.
            </p>
            <p className="text-gray-600">
              Join us in exploring the future of connectivity and the boundless possibilities that Oracle Sat brings to the table.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleSat;
