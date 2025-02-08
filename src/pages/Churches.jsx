import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Churches = () => {
  const [category, setCategory] = useState('National');
  const [churches, setChurches] = useState([]);
  const API_URL = 'http://localhost:3001/api';

  useEffect(() => {
    const fetchChurches = async () => {
      try {
        const response = await fetch(`${API_URL}/church/${category.toLowerCase()}`);
        const data = await response.json();
        setChurches(data);
      } catch (error) {
        console.error('Error fetching churches:', error);
      }
    };

    fetchChurches();
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setCategory('National')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            category === 'National' 
              ? 'bg-purple-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          National
        </button>
        <button
          onClick={() => setCategory('International')}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            category === 'International' 
              ? 'bg-purple-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          International
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-800 relative">
        Sur le plan {category}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-600 rounded-full"></div>
      </h2>

      {/* Church List */}
      <div className="grid md:grid-cols-2 gap-8">
        {churches.map((church, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-5/12 relative overflow-hidden">
                <img
                  src={church.image_url}
                  alt={church.church_name}
                  className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 md:w-7/12">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{church.church_name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{church.description}</p>

                <div className="flex items-center text-gray-700 mt-4">
                  <FaMapMarkerAlt className="mr-2 text-purple-600 flex-shrink-0" />
                  <span className="font-medium">{church.location}, {church.country}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Churches;
