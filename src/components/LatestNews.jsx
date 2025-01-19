import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { assets } from '../assets/assets';

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Default to 3 cards per view for large screens

  // Adjust cardsPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize(); // Initialize on component mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Array of card data
  const cards = [
    {
      image: assets.img_9,
      heading: 'Exciting News 1',
      text: 'Discover the latest happenings in our community.',
      link: '/actualités/article',
    },
    {
      image: assets.img_2,
      heading: 'Exciting News 2',
      text: 'Stay updated with what’s going on.',
      link: '/actualités/article',
    },
    {
      image: assets.img_3,
      heading: 'Exciting News 3',
      text: 'Find out more about our recent events.',
      link: '/actualités/article',
    },
    {
      image: assets.img_4,
      heading: 'Exciting News 4',
      text: 'Explore the latest stories and updates.',
      link: '/actualités/article',
    },
    {
      image: assets.img_5,
      heading: 'Exciting News 5',
      text: 'Get insights into our latest projects.',
      link: '/actualités/article',
    },
    {
      image: assets.img_6,
      heading: 'Exciting News 6',
      text: 'Read all about our recent accomplishments.',
      link: '/actualités/article',
    },
  ];

  const maxIndex = cards.length - cardsPerView;

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-9xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-500">ACTUALITES</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-[calc(100%/${cardsPerView})] flex-shrink-0 p-4`} // Dynamically adjust card width
            >
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-full h-52 relative object-fill">
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
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={moveLeft}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition z-10"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={moveRight}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition z-10"
        >
          <FaArrowRight />
        </button>
      </div>

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

export default LatestNews;
