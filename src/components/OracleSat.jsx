import React from "react";

const OracleSat = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 px-4 py-10">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-3xl">
        {/* Image Section */}
        <div className="w-full relative">
          <img
            src="https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489460/IMG_0063_zehu7n.jpg"
            alt="Oracle Sat"
            className="object-cover w-full h-64 sm:h-[696px] rounded-t-3xl"
          />
          {/* Overlay for Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Text Section */}
        <div className="p-8 w-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-red-600 text-center mb-6 animate-fade-in">
            Oracle Sat
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4 animate-fade-in delay-100">
            Oracle SAT est le bras médiatique et communicationnel de Sanctuary
            for All Nations, dédié à la diffusion de la Parole, à l’édification
            des croyants et à l’expansion du message du Royaume. Enraciné dans
            une vision divine, Oracle SAT se veut un canal d’impact spirituel et
            social, utilisant les outils modernes des médias pour toucher les
            cœurs et transformer les vies.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4 animate-fade-in delay-200">
            À travers une présence dynamique sur diverses plateformes –
            télévision, radio, réseaux sociaux et productions audiovisuelles –
            Oracle SAT s’engage à proclamer la vérité avec excellence, innovation
            et intégrité. De la retransmission des cultes aux enseignements
            inspirés, en passant par la production de contenus multimédias de
            qualité, chaque action menée vise à fortifier la foi et à élargir
            l’influence de l’église.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4 animate-fade-in delay-300">
            Plus qu’un simple média, Oracle SAT est un instrument prophétique au
            service de la mission divine, portant la lumière de l’Évangile aux
            nations. Avec passion et professionnalisme, nous mettons en avant
            l’actualité du ministère, les témoignages de transformation et les
            œuvres d’amour qui incarnent la vision du Sanctuary for All Nations.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg animate-fade-in delay-400">
            Rejoignez-nous dans cette aventure spirituelle et médiatique, où
            chaque parole transmise devient une semence d’espoir et de révélation
            pour le monde !
          </p>
        </div>
      </div>
    </div>
  );
};

export default OracleSat;