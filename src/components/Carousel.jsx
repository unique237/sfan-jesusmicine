import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const carouselData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489285/IMG_0053_bepozn.jpg",
    title: "Grand Festival de la JESUSMICINE",
    text: "Le grand festival international de la JESUSMICINE est la grande retraite de puissance et d’impartition qui se tiend annuellement au Sanctuaire pour toutes les nations.",
    link: "/jésusmicine",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489335/IMG_0050_zubp5w.jpg",
    title: "JESUSMICINE ",
    text: "La Jésusmicine se définit comme la médecine parfaite de Dieu au travers de son fils Jésus. Elle est née, il y a plus de 2000 ans, sur la croix à Golgotha. Elle a pour fondement l’Amour de Dieu pour l’Homme (Jean 3, 16).",
    link: "/jésusmicine",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489226/IMG_0055_ebotxg.jpg",
    title: "Père KING JOSHUA LOVE",
    text: "Père King G. Joshua Love, est le pasteur principal et fondateur de la Méga église SFAN, Terre sainte et lieu de pèlerinage, auditorium de plus de 12 000 (douze mille) place située à Nkoabang (banlieue Est de Yaoundé).",
    link: "/à-propos/bio/père-king-joshua",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489478/IMG_0062_kdwz0d.jpg",
    title: "Sanctuaire Pour Toute les Nations (SFAN)",
    text: "Méga Eglise, Terre Sainte, lieu de pèlerinage, Auditorium de plus de 12 000 (douze mille) places.",
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
    <div className="relative w-full h-[70vh] overflow-hidden bg-gray-900">
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
            className="flex-shrink-0 w-full h-[70vh] relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-8">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 sm:text-4xl">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
                {slide.text}
              </p>
              <NavLink
                to={slide.link}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
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
        className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-800/80 text-white rounded-full hover:bg-gray-700/90 focus:outline-none z-20 transition-all duration-300 transform hover:scale-110"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-800/80 text-white rounded-full hover:bg-gray-700/90 focus:outline-none z-20 transition-all duration-300 transform hover:scale-110"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 scale-125"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;