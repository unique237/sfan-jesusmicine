import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function LatestMedia() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/media/short");
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="bg-white py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600 pt-5">
        Médiathèque du SFAN
      </h2>
      <p className="text-gray-700 italic text-justify sm:text-center mb-10 max-w-4xl mx-auto px-4">
        <strong>
          Restez connectés pour recevoir les dernières actualités médias de
          l'Eglise SFAN. Découvrez nos derniers événements, nos projets, nos
          moments forts et nos actualités récentes.
        </strong>
        <br />
        Revivez les moments forts de nos cultes, événements et célébrations à
        travers une collection d'images inspirantes. Plongez dans ces souvenirs
        précieux qui témoignent de la grâce de Dieu et de la vie active de notre
        église. N'hésitez pas à explorer et partager ces instants qui glorifient
        le Seigneur !
      </p>
      <div className="max-w-[1600px] gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 mx-auto">
        {media.map((mediaItem) => (
          <Card
            key={mediaItem.media_id}
            isPressable
            className="h-[350px] relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
              <p className="text-tiny text-white/80 uppercase font-bold">
                {mediaItem.context}
              </p>
              <a href={mediaItem.link} target="_blank" rel="noopener noreferrer">
                <h4 className="text-white font-medium text-xl mt-1 hover:underline">
                  Voir les détails
                </h4>
              </a>
            </CardHeader>
            
            <div className="relative h-full w-full"> {/* Ensuring the image fits the card */}
              <img
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={mediaItem.image_url}
                style={{ filter: "brightness(60%)" }} // Darken image
              />
            </div>
            
            <CardFooter className="absolute bg-gradient-to-t from-black/80 to-transparent bottom-0 z-10 w-full">
              <a
                href={mediaItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 transition-colors inline-block p-2 rounded"
              >
                Voir plus
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
