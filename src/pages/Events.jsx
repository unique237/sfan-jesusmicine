import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Testimonies from "../components/Testimonies";
import LatestNews from "../components/LatestNews";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://server.sfanjesusmicine.org/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 relative pb-8">
            ÉVÉNEMENTS
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos prochains événements
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Event Content */}
              <div className="p-6">
                <NavLink
                  to={`/événements/événement/${event.event_id}`} // Use event.event_id for dynamic routing
                  className="text-xl font-bold text-gray-900 hover:text-yellow-600 transition-colors duration-300"
                >
                  {event.title}
                </NavLink>
                <p className="text-sm text-gray-500 mt-1">{event.category}</p>
                <p className="text-gray-600 mt-2 mb-4 line-clamp-2">
                  {event.description?.slice(0, 50)}...
                </p>

                {/* Date Info */}
                <div className="flex items-center text-gray-500">
                  <FaRegCalendarAlt className="mr-2 text-yellow-500 size-6" />
                  <span className="text-sm">
                    Du{" "}
                    {new Date(event.start_time).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}{" "}
                    au{" "}
                    {new Date(event.end_time).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonies Section */}
        <div className="mt-20">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default Events;