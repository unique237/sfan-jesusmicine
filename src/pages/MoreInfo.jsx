import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import LatestNews from "../components/LatestNews";

const MoreInfo = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/news/${id}`);
        if (!response.ok) throw new Error("Failed to fetch news details");
        const data = await response.json();
        // Ensure data is an object and not an array
        setNews(Array.isArray(data) ? data[0] : data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetails();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime())
      ? date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })
      : "Date invalide";
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: news.title,
          text: "Découvrez cet article intéressant !",
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Le partage n'est pas pris en charge sur ce navigateur.");
    }
  };

  if (loading) {
    return <div className="text-center py-8">Chargement en cours...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Erreur: {error}</div>;
  }

  if (!news) {
    return <div className="text-center py-8">Aucune donnée disponible.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-96">
          <img
            src={news.image_url || "https://via.placeholder.com/800x400"} // Fallback image
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{news.title}</h2>

          {/* Category Badge */}
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {news.category}
          </span>

          {/* Date */}
          <div className="flex items-center text-gray-600 mb-4">
            <FaRegCalendarAlt className="mr-2 text-blue-500" />
            <span>{formatDate(news.publish_date)}</span>
          </div>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            {news.content}
          </p>

          {/* External Link Button (if available) */}
          {news.external_link && (
            <a
              href={news.external_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300 mb-4"
            >
              {news.external_link_description || "Voir plus"}{" "}
              <FaExternalLinkAlt className="ml-2" />
            </a>
          )}

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
          >
            <IoMdShareAlt className="mr-2 size-6" />
            Partager sur les réseaux sociaux
          </button>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mt-10">
        <LatestNews />
      </div>
    </div>
  );
};

export default MoreInfo;