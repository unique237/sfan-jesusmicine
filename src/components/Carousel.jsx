import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const carouselData = [
  {
    id: 1,
    image: assets.carousel_1,
    title: "Grand Festival de la JESUSMICINE",
    text: "Le grand festival international de la JESUSMICINE est la grande retraite de puissance et d’impartition qui se tiendra au Sanctuaire pour toutes les nations du 18 au 22 Décembre 2024.",
    link: "/jésusmicine",
  },
  {
    id: 2,
    image: assets.carousel_2,
    title: "JESUSMICINE ",
    text: "La médecine parfaite de Dieu au travers de son fils JESUS CHRIST.",
    link: "/jésusmicine",
  },
  {
    id: 3,
    image: assets.carousel_3,
    title: "Père KING JOSHUA LOVE",
    text: "Prophète, visionnaire, Père Supérieur et Fondateur de la Méga Eglise Sanctuaire Pour Toutes les Nations (SFAN).",
    link: "/à-propos/bio/père-king-joshua",
  },
  {
    id: 4,
    image: assets.carousel_4,
    title: "Sanctuaire Pour Toute les Nations (SFAN)",
    text: "Méga Eglise, Terre Sainte, lieu de pèlerinage, Auditorium de plus de 12 000 (douze mille) places.",
    link: "/églises",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden bg-gray-900">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselData.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full h-[60vh] relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-4 px-8">{slide.text}</p>
              <NavLink
                to={slide.link}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
              >
                Voir Plus...
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none z-20"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none z-20"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
