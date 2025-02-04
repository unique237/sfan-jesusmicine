import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdPlayCircleFilled } from "react-icons/md";

const categories = [
  "Média",
  "Productions musicales",
  "Prières Miraculeuses du Père KING",
  "Prier avec Père King",
];

const MediaContent = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [mediaData, setMediaData] = useState([]);
  const [productionVideos, setProductionVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      setError(null);

      let endpoint = "";
      if (selectedCategory === "Média") {
        endpoint = "https://server.sfanjesusmicine.org/api/media";
      } else if (selectedCategory === "Prières Miraculeuses du Père KING") {
        endpoint = "https://server.sfanjesusmicine.org/api/media/miracle";
      } else if (selectedCategory === "Prier avec Père King") {
        endpoint = "https://server.sfanjesusmicine.org/api/media/pray";
      }

      if (endpoint) {
        try {
          const response = await axios.get(endpoint);
          setMediaData(response.data);
        } catch (err) {
          setError("Failed to fetch media.");
        }
      }
      setLoading(false);
    };

    const fetchProductions = async () => {
      if (selectedCategory === "Productions musicales") {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://server.sfanjesusmicine.org/api/productions"
          );
          setProductionVideos(response.data);
        } catch (err) {
          setError("Failed to fetch production videos.");
        }
        setLoading(false);
      }
    };

    if (selectedCategory !== "Productions musicales") {
      fetchMedia();
    } else {
      fetchProductions();
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Médiathèque
      </h1>

      {/* Category Selector */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Display */}
      {loading && (
        <div className="text-center text-gray-500 animate-pulse">
          Chargement en cours...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 bg-red-50 p-4 rounded-xl">
          ⚠️ {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedCategory === "Productions musicales"
          ? productionVideos.map((video, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-video bg-gray-100">
                  <iframe
                    className="w-full h-full object-cover"
                    src={video.video_url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <MdPlayCircleFilled className="text-white text-5xl" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {video.context}
                  </p>
                  {video.date && (
                    <p className="text-sm text-gray-400 mt-3">
                      {new Date(video.date).toLocaleDateString("fr-FR")}
                    </p>
                  )}
                </div>
              </div>
            ))
          : mediaData.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="relative aspect-square bg-gray-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image_url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h2 className="text-xl font-bold mb-2">{item.context}</h2>
                      <button
                        className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                        onClick={() => window.open(item.link, "_blank")}
                      >
                        Voir plus →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={fullscreenVideo}
              allowFullScreen
              className="rounded-xl"
            />
          </div>
          <button
            onClick={() => setFullscreenVideo(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-200 transition-colors"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default MediaContent;
