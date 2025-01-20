import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { FaCalendar } from "react-icons/fa";
import { assets } from "../assets/assets";

export default function LatestPredication() {
  const list = [
    {
      title: "Prédiction 1",
      img: assets.img_1,
      date: "01/01/2025",
      category: "Prédiction",
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: "https://facebook.com",
    },
    {
      title: "Prédiction 2",
      img: assets.img_2,
      date: "02/01/2025",
      category: "Prédiction",
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: "https://facebook.com",
    },
    {
      title: "Prédiction 3",
      img: assets.img_3,
      date: "03/01/2025",
      category: "Prédiction",
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: "https://facebook.com",
    },
    {
      title: "Prédiction 4",
      img: assets.img_4,
      date: "04/01/2025",
      category: "Prédiction",
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: "https://facebook.com",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
        Dernières Prédications
      </h1>
      <p className="text-gray-800 text-center italic px-6 mb-8">
        <strong>
          Plongez dans la Parole de Dieu et élevez vos prières ! Restez
          connectés pour recevoir les dernières prédications du Père KNING
          Joshua.
        </strong>
        <br />
        Retrouvez nos prédications inspirantes et nos moments de prière dédiés à
        la croissance spirituelle. Que ce soit pour approfondir votre foi ou
        chercher la paix intérieure, nos messages et temps de prière vous
        guideront dans votre marche avec le Seigneur. Laissez-vous toucher par
        la puissance de la Parole et l’efficacité de la prière fervente.
      </p>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {list.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-xl rounded-lg transition-transform duration-300 hover:scale-105"
            isPressable
            onPress={() => window.open(item.link, "_blank")}
          >
            <div className="flex">
              {/* Image Section */}
              <div className="w-1/2">
                <img
                  alt={item.title}
                  className="object-cover w-full h-full"
                  radius="none"
                  height="200px"
                  src={item.img}
                />
              </div>

              {/* Text Section */}
              <CardBody className="flex flex-col p-4 w-1/2 space-y-2">
                <b className="text-lg text-red-500 italic">{item.title}</b>
                <div className="flex items-center text-gray-500 space-x-2">
                  <FaCalendar />
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-justify leading-relaxed">
                  {item.text}
                </p>
              </CardBody>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
