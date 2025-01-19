import { Card, CardBody, Image, Button } from '@nextui-org/react';
import { FaCalendar } from "react-icons/fa";
import { assets } from '../assets/assets';

export default function LatestPredication() {
  const list = [
    {
      title: 'Prédiction 1',
      img: assets.img_1,
      date: '01/01/2025',
      category: 'Prédiction',
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: 'https://facebook.com',
    },
    {
      title: 'Prédiction 2',
      img: assets.img_2,
      date: '02/01/2025',
      category: 'Prédiction',
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: 'https://facebook.com',
    },
    {
      title: 'Prédiction 3',
      img: assets.img_3,
      date: '03/01/2025',
      category: 'Prédiction',
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: 'https://facebook.com',
    },
    {
      title: 'Prédiction 4',
      img: assets.img_4,
      date: '04/01/2025',
      category: 'Prédiction',
      text: "Résumé bref de la prédiction et ses moments clés.",
      link: 'https://facebook.com',
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {list.map((item, index) => (
        <Card
          key={index}
          className="overflow-hidden shadow-xl rounded-lg transition-transform duration-300 hover:scale-105"
          isPressable
          onPress={() => window.open(item.link, '_blank')}
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
  );
}
