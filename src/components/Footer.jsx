import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 pt-9">
      <div className="max-w-7xl mx-auto px-4">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-700 italic">SANCTUARY FOR ALL NATIONS</h3>
            <h4 className="text-md font-semibold mb-2 text-gray-700">Contactez nous!</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/contact" className="hover:underline">
                  Contact
                </NavLink>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <a href="mailto:info@sfan.com" className="hover:underline">
                  Email : contact@sfanjesusmicine.com
                </a>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <a href="tel:+123456789" className="hover:underline">
                  Tel : (+237) 698 941 583 
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Pages</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/" className="hover:underline">
                  SFAN
                </NavLink>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/jésusmicine" className="hover:underline">
                  JESUSMICINE
                </NavLink>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/à-propos/bio/père-king-joshua" className="hover:underline">
                  LE PERE SUPERIEUR
                </NavLink>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/églises" className="hover:underline">
                  EGLISES SFAN
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Random Stuffs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Liens Utiles</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/contact" className="hover:underline">
                  Contact
                </NavLink>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/événements" className="hover:underline">
                  Evénements
                </NavLink>
              </li>
              <li className="flex items-center">
                <HiChevronRight className="text-gray-500 mr-2" />
                <NavLink to="/connexion" className="hover:underline">
                  Connexion
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Souscrire</h3>
            <p className="mb-4 text-gray-600">Recevez les messages de prières et prédications du Père KNING Joshua par mail.</p>
            <form className="flex">
              <input
                type="email"
                required
                placeholder="Votre mail."
                className="w-full px-4 py-2 text-gray-800 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-gray-800"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-gray-800"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-gray-800"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-gray-800"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} SFAN. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
