import React from "react";
import { assets } from "../assets/assets";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import LatestEvents from "../components/LatestEvents";

const Event = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Event Title",
          text: "Check out this event!",
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported on this browser");
    }
  };

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
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Titre
            </h2>
            <p className="text-gray-700 mb-4">
              Jesusmicine is an inspiring individual dedicated to spreading the
              message of hope and love. With a passion for community service and
              a heart full of compassion, Jesusmicine has touched the lives of
              many. Join us in celebrating the contributions and achievements of
              Jesusmicine. Together, we can make a difference and create a
              brighter future for all. Join us in celebrating the contributions
              and achievements of Jesusmicine. Together, we can make a
              difference and create a brighter future for all. Join us in
              celebrating the contributions and achievements of Jesusmicine.
              Together, we can make a difference and create a brighter future
              for all.
            </p>
            <span className="flex items-center mb-4">
              <p className="flex items-center">
                Du <FaRegCalendarAlt className="text-gray-500 mx-2" />{" "}
                21/09/2021 .
              </p>
              <p className="flex items-center">
                {" "}
                Au <FaRegCalendarAlt className="text-gray-500 mx-2" />
              </p>
              <p className="flex items-center">21/09/2021</p>
            </span>
            <p className="text-gray-700 mb-4">
              Participez à l'événement cliquant sur le bouton ci-dessous :
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-1/4 mx-auto mb-4">
              <a href="#">Participer</a>
            </button>

            <p className="text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <button
                    onClick={handleShare}
                    className="flex items-center text-blue-500 hover:text-blue-600"
                  >
                    <IoMdShareAlt className="text-gray-500 mr-2 size-6 cursor-pointer" />
                    Partager sur les réseaux sociaux
                  </button>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <LatestEvents />
    </div>
  );
};

export default Event;
