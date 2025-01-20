import React, { useState } from 'react';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Churches = () => {
  const [category, setCategory] = useState('National'); // 'National' or 'International'

  const churchesData = [
    // Add your church data here
    { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présentes sur le territoire national camerounais.', phone: '123-456-789', email: 'example@domain.com', whatsapp: '+237-678-123-456', location: 'Location 1', image: assets.img_1 },
    { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présentes à l’international.', phone: '987-654-321', email: 'example2@domain.com', whatsapp: '+237-678-456-789', location: 'Location 2', image: assets.img_2 },
    { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
    { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 1', image: assets.img_1 },
    { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
    { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 1', image: assets.img_1 },
    { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
    // Add more data as needed...
  ];

  const filteredChurches = churchesData.filter((church) => church.category === category);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setCategory('National')}
          className={`mx-2 p-2 rounded ${category === 'National' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          National
        </button>
        <button
          onClick={() => setCategory('International')}
          className={`mx-2 p-2 rounded ${category === 'International' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          International
        </button>
      </div>

      {/* Section Title */}
      <div className="text-center font-semibold text-4xl mb-6 text-red-600">Sur le plan {category}</div>

      {/* Church List */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredChurches.map((church, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={church.image}
              alt={church.name}
              className="w-full md:w-2/5 object-fill"
            />

            {/* Text Content */}
            <div className="p-4 flex-1">
              <h2 className="text-2xl font-bold mb-2">{church.name}</h2>
              <p className="flex items-center mb-2 text-gray-700">
                <FaCalendarAlt className="mr-2 text-blue-500" /> {church.date}
              </p>
              <p className="mb-4 text-gray-600">{church.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {church.phone && (
                  <p className="flex items-center text-gray-700">
                    <FaPhone className="mr-2 text-green-500" /> {church.phone}
                  </p>
                )}
                {church.email && (
                  <p className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-2 text-red-500" /> {church.email}
                  </p>
                )}
                {church.whatsapp && (
                  <p className="flex items-center text-gray-700">
                    <FaWhatsapp className="mr-2 text-green-500" /> {church.whatsapp}
                  </p>
                )}
              </div>
              <p className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="mr-2 text-purple-500" /> {church.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Churches;
