import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Constants for responsive breakpoints and animation
const BREAKPOINTS = { desktop: 1024 };
const ANIMATION = { duration: 500, easing: "ease-in-out" };

const Testimonies = () => {
  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data fetching
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://server.sfanjesusmicine.org/api/testimonies");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Responsive layout handling
  const updateCardsPerView = useCallback(() => {
    setCardsPerView(window.innerWidth >= BREAKPOINTS.desktop ? 3 : 1);
  }, []);

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [updateCardsPerView]);

  // Carousel navigation
  const maxIndex = Math.max(testimonials.length - cardsPerView, 0);

  const navigate = useCallback(
    (direction) => {
      setCurrentIndex((prev) => {
        if (direction === "prev") return prev === 0 ? maxIndex : prev - 1;
        return prev === maxIndex ? 0 : prev + 1;
      });
    },
    [maxIndex]
  );

  const moveLeft = () => navigate("prev");
  const moveRight = () => navigate("next");

  // Video handling
  const handleVideoToggle = (index) => {
    setExpandedVideo((prev) => (prev === index ? null : index));
  };

  // Loading and error states
  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return (
    <SectionContainer>
      <SectionHeading>TÉMOIGNAGES VIDÉOS</SectionHeading>

      <CarouselWrapper>
        <CarouselTrack currentIndex={currentIndex} cardsPerView={cardsPerView}>
          {testimonials.map((testimony, index) => (
            <TestimonyCard
              key={testimony.testimony_id}
              testimony={testimony}
              index={index}
              onToggle={handleVideoToggle}
            />
          ))}
        </CarouselTrack>

        <NavigationArrows onLeft={moveLeft} onRight={moveRight} />
        <PaginationDots count={maxIndex + 1} currentIndex={currentIndex} />
      </CarouselWrapper>

      <VideoModal
        isOpen={expandedVideo !== null}
        videoUrl={testimonials[expandedVideo]?.video_url}
        onClose={() => setExpandedVideo(null)}
      />
    </SectionContainer>
  );
};

// Sub-components for better organization
const SectionContainer = ({ children }) => (
  <div className="relative w-full max-w-9xl mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
    {children}
  </div>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    {children}
  </h2>
);

const CarouselWrapper = ({ children }) => (
  <div className="relative overflow-hidden group">{children}</div>
);

const CarouselTrack = ({ children, currentIndex, cardsPerView }) => (
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
    }}
  >
    {children}
  </div>
);

const TestimonyCard = ({ testimony, index, onToggle }) => (
  <div className={`w-[calc(100%/${3})] flex-shrink-0 p-4 transition-transform duration-300 hover:scale-105`}>
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      <VideoThumbnail
        url={testimony.video_url}
        title={testimony.title}
        onClick={() => onToggle(index)}
      />
      <CardContent title={testimony.title} content={testimony.content} />
    </div>
  </div>
);

const VideoThumbnail = ({ url, title, onClick }) => (
  <div className="w-full aspect-video relative rounded-t-xl overflow-hidden">
    {url ? (
      <iframe
        width="100%"
        height="100%"
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className="hover:opacity-90 transition-opacity cursor-pointer"
        onClick={onClick}
      />
    ) : (
      <div className="bg-gray-200 flex items-center justify-center h-[200px] text-gray-500">
        Video Indisponible
      </div>
    )}
  </div>
);

const CardContent = ({ title, content }) => (
  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-base mb-4 flex-grow">{content}</p>
  </div>
);

const NavigationArrows = ({ onLeft, onRight }) => (
  <>
    <NavigationButton direction="left" onClick={onLeft}>
      <FaArrowLeft className="w-6 h-6" />
    </NavigationButton>
    <NavigationButton direction="right" onClick={onRight}>
      <FaArrowRight className="w-6 h-6" />
    </NavigationButton>
  </>
);

const NavigationButton = ({ direction, onClick, children }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 ${
      direction === "left" ? "left-6" : "right-6"
    } -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-4 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl opacity-0 group-hover:opacity-100`}
    aria-label={`${direction} navigation`}
  >
    {children}
  </button>
);

const PaginationDots = ({ count, currentIndex }) => (
  <div className="flex justify-center mt-8 space-x-2">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-4 h-4 rounded-full transition-all duration-300 ${
          currentIndex === index
            ? "bg-blue-600 scale-125"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ))}
  </div>
);

const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          allowFullScreen
          className="rounded-xl"
          title="Expanded testimonial video"
        />
      </div>
      <CloseButton onClick={onClose} />
    </div>
  );
};

const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-4 right-4 text-white text-4xl hover:text-gray-200 transition-colors"
    aria-label="Close video modal"
  >
    &times;
  </button>
);

const LoadingState = () => (
  <div className="text-center py-12">Chargement en cours...</div>
);

const ErrorState = ({ message }) => (
  <div className="text-center py-12 text-red-500">Erreur: {message}</div>
);

export default Testimonies;