import React, { useState } from 'react';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Churches = () => {
    const [category, setCategory] = useState('National'); // 'National' or 'International'
    
    const churchesData = [
        // Add your church data here
        { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 1', image: assets.img_1 },
        { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
        { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 1', image: assets.img_1 },
        { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
        { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 1', image: assets.img_1 },
        { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
        { category: 'National', name: 'Church 1', date: '01 Jan 2020', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 1', image: assets.img_1 },
        { category: 'International', name: 'Church 2', date: '02 Feb 2021', description: 'Cette section inclues toutes les églises présente sur le territoire national camerounais, chaque église sera représentée par une image, la localisation de cette église et les contacts.', phone: '', email: '', whatsapp: '', location: 'Location 2', image: assets.img_2 },
        // More church data...
    ];

    const filteredChurches = churchesData.filter((church) => church.category === category);

    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="flex justify-center mb-6">
                <button 
                    onClick={() => setCategory('National')}
                    className={`mx-2 p-2 rounded ${category === 'National' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    National
                </button>
                <button 
                    onClick={() => setCategory('International')}
                    className={`mx-2 p-2 rounded ${category === 'International' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    International
                </button>
            </div>
            <div className="text-center font-semibold text-5xl mb-6 text-red-600">Sur le plan {category}</div>
            <div className="grid md:grid-cols-2 gap-6">
                {filteredChurches.map((church, index) => (
                    <div key={index} className="flex bg-white rounded-xl shadow-lg overflow-hidden">
                        <img src={church.image} alt={church.name} className="w-2/5 object-cover" />
                        <div className="p-4 flex-1">
                            <h2 className="text-2xl font-bold mb-2">{church.name}</h2>
                            <p className="flex items-center mb-2"><FaCalendarAlt className="mr-2" /> {church.date}</p>
                            <p className="mb-4">{church.description}</p>
                            <div className="flex space-x-4 mb-2">
                                <p className="flex items-center"><FaPhone className="mr-2" /> {church.phone}</p>
                                <p className="flex items-center"><FaEnvelope className="mr-2" /> {church.email}</p>
                                <p className="flex items-center"><FaWhatsapp className="mr-2" /> {church.whatsapp}</p>
                            </div>
                            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> {church.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Churches;
