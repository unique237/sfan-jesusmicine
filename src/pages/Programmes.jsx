import React from "react";
import { assets } from "../assets/assets";
import Testimonies from "../components/Testimonies";

const Programmes = () => {
  const programmes = {
    "Cultes Prophétique": [
      {
        date: "Dimanche, 19 Janvier 2025",
        image: assets.img_1,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 1",
        videoLink: "link-to-facebook-video1",
      },
      {
        date: "Dimanche, 26 Janvier 2025",
        image: assets.img_2,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 2",
        videoLink: "link-to-facebook-video2",
      },
    ],
    "Nuits de Prodiges": [
      {
        date: "Vendredi, 17 Janvier 2025",
        image: assets.img_3,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 1",
        videoLink: "link-to-facebook-video1",
      },
      {
        date: "Vendredi, 24 Janvier 2025",
        image: assets.img_4,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 2",
        videoLink: "link-to-facebook-video2",
      },
    ],
    "Prières de miséricordes": [
      {
        date: "Mercredi, 15 Janvier 2025",
        image: assets.img_5,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 1",
        videoLink: "link-to-facebook-video1",
      },
      {
        date: "Mercredi, 22 Janvier 2025",
        image: assets.img_6,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 2",
        videoLink: "link-to-facebook-video2",
      },
    ],
    "Programmes spéciaux": [
      {
        date: "Samedi, 18 Janvier 2025",
        image: assets.img_7,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 1",
        videoLink: "link-to-facebook-video1",
      },
      {
        date: "Samedi, 25 Janvier 2025",
        image: assets.img_1,
        summary:
          "Résumé du programme Cette section sera dédicacée aux programmes spéciaux comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une image de ce programme, d’un résumé du programme et un lien qui mène vers la vidéo de ce programme qui se trouve sur la page Facebook de l’église 2",
        videoLink: "link-to-facebook-video2",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-yellow-400 font-bold text-center mb-8">
        Programmes Hebdomadaires
      </h1>
      <p className="text-gray-600 text-justify sm:text-center">Résumé du programme Cette section sera dédicacée aux programmes spéciaux
         comme les festivale, les retraites et les pèlerinages, chaque programme sera composé de la date, d’une 
         image de ce programme, d’un résumé du programme etun lien qui mène vers la vidéo de ce programme qui se 
         trouve sur la page Facebook de l’église 2
      </p>
      {Object.keys(programmes).map((section) => (
        <div key={section} className="mb-8 pt-10">
          <h2 className="text-2xl text-center font-semibold text-red-600 mb-4">
            {section}
          </h2>
          {programmes[section].map((programme, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg mb-6 p-4">
              <div className="md:flex items-center">
                <img
                  src={programme.image}
                  alt={programme.summary}
                  className="w-full h-auto object-cover mb-4 md:w-[200px] md:h-[200px] md:mr-4 md:mb-0 rounded-lg flex-none"
                />
                <div className="flex-grow">
                  <p className="text-lg font-bold">{programme.date}</p>
                  <p className="text-gray-600 text-justify">{programme.summary}</p>
                  <a
                    href={programme.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-2 inline-block"
                  >
                    Voir la vidéo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <Testimonies />
    </div>
  );
};

export default Programmes;
