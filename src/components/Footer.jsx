import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://server.sfanjesusmicine.org/api/subscription/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Votre souscription a réussie !");
        setFormData({ email: "" });
      } else {
        toast.error("Erreur !");
      }
    } catch (error) {
      toast.error("Erreur Serveur !");
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SANCTUARY FOR ALL NATIONS
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="flex-shrink-0 text-blue-600 mt-1" />
                <address className="not-italic">
                  <NavLink to="/contact" className="hover:text-blue-600 transition-colors">
                    Adresse: Yaoundé, Cameroun
                  </NavLink>
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600" />
                <a href="mailto:contact@sfanjesusmicine.com" className="hover:text-blue-600 transition-colors">
                  contact@sfanjesusmicine.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600" />
                <a href="tel:+237698941583" className="hover:text-blue-600 transition-colors">
                  (+237) 698 941 583
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
            <nav className="space-y-2">
              {[
                ["SFAN", "/"],
                ["JESUSMICINE", "/jésusmicine"],
                ["Le Père Supérieur", "/à-propos/bio/père-king-joshua"],
                ["Églises SFAN", "/églises"],
              ].map(([title, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-600">•</span>
                  <span>{title}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Liens Utiles</h3>
            <nav className="space-y-2">
              {[
                ["Événements", "/événements"],
                ["Médiathèque", "/médiathèque"],
                ["Connexion", "/connexion"],
              ].map(([title, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-600">•</span>
                  <span>{title}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Restez Connecté</h3>
            <p className="text-gray-600">
              Recevez les messages de prières et prédications du Père KING Joshua directement par mail.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex rounded-lg shadow-sm">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre adresse e-mail"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-r-lg hover:opacity-90 transition-opacity"
                >
                  Souscrire
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              {[
                { icon: <FaFacebookF />, color: "text-blue-600", href: "https://facebook.com" },
                { icon: <FaWhatsapp />, color: "text-green-600", href: "https://whatsapp.com" },
                { icon: <FaTwitter />, color: "text-blue-400", href: "https://twitter.com" },
                { icon: <FaInstagram />, color: "text-pink-600", href: "https://instagram.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:opacity-75 transition-opacity text-2xl`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center text-gray-600">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Sanctuary For All Nations. Tous droits réservés.
              </p>
              <nav className="mt-2 space-x-4">
                <NavLink to="/mentions-legales" className="text-sm hover:text-blue-600">
                  Mentions Légales
                </NavLink>
                <NavLink to="/confidentialite" className="text-sm hover:text-blue-600">
                  Politique de Confidentialité
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;