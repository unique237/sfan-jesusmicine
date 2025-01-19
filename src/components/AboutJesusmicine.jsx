import React from 'react';
import { assets } from '../assets/assets';

const AboutJesusmicine = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl mx-auto flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <img
            src={assets.jesusmicne}
            alt="Jesusmicine"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">About Jesusmicine</h2>
          <p className="text-gray-700 mb-4">
            Jesusmicine is an inspiring individual dedicated to spreading the message of hope and love. With a passion for community service and a heart full of compassion, Jesusmicine has touched the lives of many.
          </p>
          <p className="text-gray-700">
            Join us in celebrating the contributions and achievements of Jesusmicine. Together, we can make a difference and create a brighter future for all.
          </p>
          <p className="text-gray-700">
            Join us in celebrating the contributions and achievements of Jesusmicine. Together, we can make a difference and create a brighter future for all.
          </p>
          <p className="text-gray-700">
            Join us in celebrating the contributions and achievements of Jesusmicine. Together, we can make a difference and create a brighter future for all.
          </p>
          <p className="text-gray-700">
            Join us in celebrating the contributions and achievements of Jesusmicine. Together, we can make a difference and create a brighter future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutJesusmicine;
