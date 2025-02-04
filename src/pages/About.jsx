import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dmwo3fwvu/image/upload/v1738489688/IMG_0051_p4am70.jpg"
            alt="Jesusmicine"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6 text-center lg:text-left">
            SANCTUARY FOR ALL NATIONS
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Sanctuary for All Nations est bien plus qu’une église ; c’est un
            mouvement dédié à la transformation des vies et des communautés par
            la puissance de l’Évangile. Grâce à son leadership inspiré, ses
            ministères dynamiques et son engagement envers l’excellence, SFAN
            demeure un phare d’espoir et d’inspiration au Cameroun et dans le
            monde entier. Si vous recherchez une église qui allie enseignement
            spirituel profond et impact social concret, SFAN est un modèle
            remarquable.
          </p>

          {/* Subheading: Histoire du SFAN */}
          <h4 className="text-blue-600 font-semibold text-xl mb-4 text-center lg:text-left">
            Mission et Vision
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Sanctuary for All Nations (SFAN) est dédié à l’édification d’un
            sanctuaire spirituel où des personnes de toutes nations peuvent
            rencontrer Dieu, vivre une transformation profonde et accomplir leur
            destinée divine.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            L’église met l’accent sur la foi, l’amour et l’unité en Christ, avec
            pour objectif d’impacter les vies tant sur le plan spirituel que
            social.
          </p>

          <h4 className="text-blue-600 font-semibold text-xl mb-4 text-center lg:text-left">
            Leadership
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            SFAN est dirigée par{" "}
            <NavLink
              to="/à-propos/bio/père-king-joshua"
              className="text-blue-600 font-bold italic hover:text-yellow-400 transition-colors"
            >
              Père King Joshua
            </NavLink>
            , un leader dynamique et visionnaire, reconnu pour son ministère
            prophétique, ses enseignements inspirés et son engagement envers le
            développement communautaire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
