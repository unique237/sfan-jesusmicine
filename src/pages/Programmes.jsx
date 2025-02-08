import React, { useState, useEffect } from "react";
import Testimonies from "../components/Testimonies";
import { FaCalendarAlt } from "react-icons/fa";

const Programmes = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Cultes Prophétique");
  const [programmes, setProgrammes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryEndpoints = {
    "Cultes Prophétique": "/weekly/1",
    "Nuits de Prodiges": "/weekly/2",
    "Prières de miséricordes": "/weekly/3",
    "Programmes spéciaux": "/weekly/4",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3001/api${categoryEndpoints[selectedCategory]}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProgrammes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR");
  };

  if (error)
    return <div className="text-center text-red-500 p-8">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-yellow-400 font-bold text-center mb-8">
        Programmes Hebdomadaires
      </h1>
      <p className="text-gray-600 text-justify sm:text-center max-w-2xl mx-auto mb-12">
        Résumé du programme Cette section sera dédicacée aux programmes spéciaux
        comme les festivale, les retraites et les pèlerinages...
      </p>

      {/* Category Filter */}
      <div className="w-full overflow-x-auto px-4 pb-2 mb-8">
        <div className="flex gap-2 w-max mx-auto">
          {Object.keys(categoryEndpoints).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black border-2 border-yellow-500"
                  : "bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-600 p-8">
          Chargement en cours...
        </div>
      )}

      {/* Programme List */}
      <div className="mb-12">
        <h2 className="text-3xl text-center font-semibold text-red-600 mb-8">
          {selectedCategory}
        </h2>

        {programmes.length > 0
          ? programmes.map((programme) => (
              <div
                key={programme.weekly_id}
                className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <img
                    src={programme.image_url}
                    alt={programme.title}
                    className="w-full h-64 md:w-64 md:h-auto object-cover md:object-center flex-none"
                  />
                  <div className="p-6 flex-grow">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {programme.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-2 flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {formatDate(programme.date)}
                        </p>
                        <p className="text-gray-600 text-justify mb-4">
                          {programme.content}
                        </p>
                      </div>
                      <div className="mt-4">
                        <a
                          href={programme.external_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
                        >
                          Voir plus
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : !loading && (
              <div className="text-center text-gray-600 p-8">
                Aucun programme disponible
              </div>
            )}
      </div>

      <Testimonies />
    </div>
  );
};

export default Programmes;
