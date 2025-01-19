import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import Testimonies from "../components/Testimonies";

const eventsData = [
  {
    img: assets.img_1,
    title: "events Title 1",
    description: "Small description for events 1",
    start_date: "2025-01-01",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_2,
    title: "events Title 2",
    description: "Small description for events 2",
    start_date: "2025-01-02",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_3,
    title: "events Title 1",
    description: "Small description for events 1",
    start_date: "2025-01-01",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_4,
    title: "events Title 2",
    description: "Small description for events 2",
    start_date: "2025-01-02",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_5,
    title: "events Title 1",
    description: "Small description for events 1",
    start_date: "2025-01-01",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_6,
    title: "events Title 2",
    description: "Small description for events 2",
    start_date: "2025-01-02",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_7,
    title: "events Title 1",
    description: "Small description for events 1",
    start_date: "2025-01-01",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
  {
    img: assets.img_8,
    title: "events Title 2",
    description: "Small description for events 2",
    start_date: "2025-01-02",
    end_date: "2025-01-02",
    link: "/événements/événement",
    situation: "en cours",
  },
];

const Events = () => {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-6 text-yellow-400">
        EVENEMENTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventsData.map((events, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={events.img}
              alt={events.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <NavLink
                to={`${events.link}`}
                className="text-xl font-bold hover:underline"
              >
                {events.title}
              </NavLink>
              <p className="text-gray-700 mb-1">{events.description}</p>
              <div className="flex items-center text-gray-600 text-sm">
                <FaRegCalendarAlt className="mr-1" />
                <span>
                  Du : {events.start_date} au {events.end_date}
                </span>
              </div>
              <p className="text-gray-700 mb-1">{events.situation}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Testimonies />
      </div>
    </div>
  );
};

export default Events;
