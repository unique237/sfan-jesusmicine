import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://server.sfanjesusmicine.org/api/news");
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Chargement en cours...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Erreur: {error}</div>;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-4 relative inline-block">
            Actualités
            <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-blue-500 transform -translate-x-1/2 translate-y-2"></span>
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Restez informé de nos dernières actualités
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
              <div className="flex items-center text-sm text-gray-400 mb-2">
                  <FaRegCalendarAlt className="mr-2 text-blue-500" />
                  <span>{new Date(news.publish_date).toLocaleDateString('fr-FR')}</span>
                </div>

                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>

                <NavLink
                  to={`/actualités/article/${news.news_id}`}
                  className="block text-xl font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-200 mb-3"
                >
                  {news.title}
                </NavLink>

                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {news.short_content}
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <NavLink
                    to={`/actualités/article/${news.news_id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors duration-200"
                  >
                    Lire plus...
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105">
            Charger plus...
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
