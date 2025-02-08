import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import LatestEvents from "../components/LatestEvents";
import LatestNews from "../components/LatestNews";

const Event = () => {
  const { id } = useParams(); // Get the event_id from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/events/${id}`);
        if (!response.ok) throw new Error("Failed to fetch event details");
        const data = await response.json();
        setEvent(data[0]); // Assuming the API returns an array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event?.title || "Event Title",
          text: "Check out this event!",
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  if (loading) return <div className="text-center py-8">Chargement en cours...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Erreur: {error}</div>;
  if (!event) return <div className="text-center py-8">Aucune donnée disponible.</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Event Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={event.image_url || "https://via.placeholder.com/800x400"} // Fallback image
              alt={event.title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              {event.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-center lg:text-left">
              {event.description}
            </p>

            {/* Date Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 mb-6">
              <div className="flex items-center text-gray-700">
                <FaRegCalendarAlt className="text-blue-500 mr-2" />
                <span>
                  Du{" "}
                  {new Date(event.start_time).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center text-gray-700">
                <FaRegCalendarAlt className="text-blue-500 mr-2" />
                <span>
                  Au{" "}
                  {new Date(event.end_time).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Participation Button */}
            <div className="text-center lg:text-left mb-6">
              <p className="text-gray-600 mb-4">
                Participez à l'événement en cliquant sur le bouton ci-dessous :
              </p>
              <a
                href={event.form_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Participer
              </a>
            </div>

            {/* Share Button */}
            <div className="text-center lg:text-left">
              <button
                onClick={handleShare}
                className="flex items-center justify-center lg:justify-start text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300"
              >
                <IoMdShareAlt className="mr-2 size-6" />
                Partager sur les réseaux sociaux
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mt-12">
        <LatestNews />
      </div>
    </div>
  );
};

export default Event;