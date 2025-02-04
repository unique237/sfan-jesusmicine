import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaCalendarAlt, FaChurch } from "react-icons/fa";
import axios from "axios";

export default function LatestPredication() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/prayers/short");
        setSermons(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
          Dernières Prédications
        </h1>
        <p className="text-gray-600 text-lg italic max-w-3xl mx-auto leading-relaxed">
          <strong className="not-italic bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Plongez dans la Parole de Dieu et élevez vos prières !
          </strong>
          <br className="hidden sm:block" />
          Retrouvez nos prédications inspirantes et nos moments de prière dédiés à la croissance spirituelle.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {sermons.map((sermon, index) => (
          <Card
            key={index}
            isPressable
            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-96" // Increased height
            onPress={() => window.open(sermon.link || "https://facebook.com", "_blank")}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

            {/* Image Section */}
            <div className="relative h-60 w-full"> {/* Adjusted image height */}
              <img
                alt={sermon.title}
                src={sermon.image_url}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: "brightness(60%)" }} // Darken image
              />
            </div>

            {/* Content Section */}
            <CardBody className="absolute bottom-0 left-0 right-0 z-20 text-white p-4 space-y-4"> {/* Changed text color to white */}
              {/* Category Badge */}
              <div className="flex items-center space-x-2">
                <FaChurch className="text-yellow-400" />
                <span className="font-semibold text-sm bg-yellow-500/20 px-3 py-1 rounded-full">
                  {sermon.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold line-clamp-2">{sermon.title}</h2>

              {/* Metadata */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-yellow-400" />
                  <span className="text-sm font-medium">
                    {new Date(sermon.post_date).toLocaleDateString("fr-FR", {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-justify">
                  <p>
                    {sermon.content}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
                    📖 {sermon.speaker}
                  </span>
                </div>
              </div>

              {/* Hover Button */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="mt-4 inline-flex items-center px-6 py-2.5 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Voir la prédication
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
