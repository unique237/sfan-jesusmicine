import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const newsData = [
  {
    img: assets.img_1,
    title: 'News Title 1',
    description: 'Small description for news 1',
    date: '2025-01-01',
    link: '/actualités/article'
  },
  {
    img: assets.img_2,
    title: 'News Title 2',
    description: 'Small description for news 2',
    date: '2025-01-02',
    link: '/actualités/article'
  },{
    img: assets.img_3,
    title: 'News Title 1',
    description: 'Small description for news 1',
    date: '2025-01-01',
    link: '/actualités/article'
  },
  {
    img: assets.img_4,
    title: 'News Title 2',
    description: 'Small description for news 2',
    date: '2025-01-02',
    link: '/actualités/article'
  },
  {
    img: assets.img_5,
    title: 'News Title 1',
    description: 'Small description for news 1',
    date: '2025-01-01',
    link: '/actualités/article'
  },
  {
    img: assets.img_6,
    title: 'News Title 2',
    description: 'Small description for news 2',
    date: '2025-01-02',
    link: '/actualités/article'
  },
  {
    img: assets.img_7,
    title: 'News Title 1',
    description: 'Small description for news 1',
    date: '2025-01-01',
    link: '/actualités/article'
  },
  {
    img: assets.img_8,
    title: 'News Title 2',
    description: 'Small description for news 2',
    date: '2025-01-02',
    link: '/actualités/article'
  },
];

const News = () => {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-500">Actualités</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((news, index) => (
          <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={news.img} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <NavLink to={`${news.link}`} className="text-xl font-bold hover:underline">
                {news.title}
              </NavLink>
              <p className="text-gray-700 mb-1">{news.description}</p>
              <div className="flex items-center text-gray-600 text-sm">
                <FaRegCalendarAlt className="mr-1" />
                <span>{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
      </div>
    </div>
  );
};

export default News;
