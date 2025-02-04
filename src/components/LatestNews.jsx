import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/news/short");
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(newsData.length - cardsPerView, 0);

  const moveLeft = () => setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  const moveRight = () => setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Dernières Actualités
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Découvrez les actualités récentes de notre communauté. Restez informés des 
          derniers événements, projets, et moments forts.
        </p>
      </div>

      <div className="relative group">
        <div className="overflow-hidden relative px-12">
          {newsData.length > 0 ? (
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {newsData.map((news) => (
                <div
                  key={news.news_id}
                  className="flex-shrink-0 p-4"
                  style={{ width: `calc(100% / ${cardsPerView})` }}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px] flex flex-col overflow-hidden transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={news.image_url}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <NavLink
                        to={`/actualités/article/${news.news_id}`}
                        className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors mb-3 line-clamp-2"
                      >
                        {news.title}
                      </NavLink>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {news.short_content}
                      </p>
                      <NavLink
                        to={`/actualités/article/${news.news_id}`}
                        className="mt-auto inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Lire la suite
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="animate-pulse flex space-x-4">
              {[...Array(cardsPerView)].map((_, i) => (
                <div key={i} className="flex-1 p-4">
                  <div className="h-[400px] bg-gray-100 rounded-xl" />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={moveLeft}
          className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-x-1 opacity-0 group-hover:opacity-100"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={moveRight}
          className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:translate-x-1 opacity-0 group-hover:opacity-100"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {newsData.slice(0, maxIndex + 1).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;