import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { assets } from '../assets/assets';

const LatestEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of card data
  const cards = [
    {
      image: assets.carousel_1,
      heading: 'Exciting Events 1',
      text: 'Discover the latest happenings in our community.',
      link: '/événements/événement',
    },
    {
      image: assets.carousel_2,
      heading: 'Exciting Events 2',
      text: 'Stay updated with what’s going on.',
      link: '/événements/événement',
    },
    {
      image: assets.carousel_3,
      heading: 'Exciting Events 3',
      text: 'Find out more about our recent events.',
      link: '/événements/événement',
    },
    {
      image: assets.carousel_4,
      heading: 'Exciting Events 4',
      text: 'Explore the latest stories and updates.',
      link: '/événements/événement',
    },
    {
      image: assets.carousel_3,
      heading: 'Exciting Events 5',
      text: 'Get insights into our latest projects.',
      link: '/événements/événement',
    },
    {
      image: assets.carousel_4,
      heading: 'Exciting Events 6',
      text: 'Read all about our recent accomplishments.',
      link: '/événements/événement',
    },
  ];

  // Determine number of visible cards based on screen size
  const cardsPerView = window.innerWidth >= 1024 ? 3 : 1; // 3 cards on large screens, 1 on small screens

  // Maximum index based on cardsPerView
  const maxIndex = cards.length - cardsPerView;

  // Handler for moving left
  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  // Handler for moving right
  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      <h2 className=" text-4xl font-bold text-center mb-6 text-[#C0392B]">EVENEMENTS</h2>
      <div className="relative overflow-hidden">
        {/* Card Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`min-w-[${100 / cardsPerView}%] flex-shrink-0 p-4`}
            >
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* Image wrapper with consistent aspect ratio */}
                <div className="w-full h-52 relative">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <NavLink to={card.link} className="text-lg font-bold text-blue-600 hover:underline">
                    {card.heading}
                  </NavLink>
                  <p className="text-gray-600 mt-2">{card.text}</p>
                  <NavLink
                    to={card.link}
                    className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Voir
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={moveLeft}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={moveRight}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition z-10"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
