import React from "react";
import { assets } from "../assets/assets";
import { HiChevronRight } from "react-icons/hi";


const About = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-white py-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-10xl mx-auto flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <img
              src={assets.img_7}
              alt="Jesusmicine"
              className="w-full object-cover h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
              SANCTUARY FOR ALL NATIONS
            </h2>
            <p className="text-gray-700 mb-4">
              Jesusmicine is an inspiring individual dedicated to spreading the
              message of hope and love. With a passion for community service and
              a heart full of compassion, Jesusmicine has touched the lives of
              many. Join us in celebrating the contributions and achievements of
              Jesusmicine. Together, we can make a difference and create a
              brighter future for all.
            </p>
            <h4 className="text-blue-500 font-semibold text-1xl text-center">
              Histoire du SFAN
            </h4>
            <p className="text-gray-700">
              Join us in celebrating the contributions and achievements of
              Jesusmicine. Together, we can make a difference and create a
              brighter future for all. Join us in celebrating the contributions
              and achievements of Jesusmicine. Together, we can make a
              difference and create a brighter future for all.
            </p>
            <h4 className="text-blue-500 font-semibold text-1xl text-center">
              Grandes dates pour le SFAN
            </h4>
            <p className="text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <HiChevronRight className="text-gray-500 mr-2" />
                  2010 : Contexte
                </li>
                <li className="flex items-start">
                  <HiChevronRight className="text-gray-500 mr-2 items-center" />
                  2010 : Contexte
                </li>
                <li className="flex items-start">
                  <HiChevronRight className="text-gray-500 mr-2" />
                  2011 : Contexte
                </li>
                <li className="flex items-start">
                  <HiChevronRight className="text-gray-500 mr-2" />
                  2012 : Contexte
                </li>
                <li className="flex items-start">
                  <HiChevronRight className="text-gray-500 mr-2" />
                  2013 : Contexte
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
