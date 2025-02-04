import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [actualityDropdownVisible, setActualityDropdownVisible] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img src={assets.sfan_logo} className="h-16 hover:scale-105 transition-transform" alt="SFAN Logo" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <NavLink 
                to="/jésusmicine" 
                className="text-blue-900 hover:text-red-600 transition-colors relative group font-semibold"
              >
                JESUSMICINE
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full"></span>
              </NavLink>

              <NavLink 
                to="/programmes" 
                className="text-blue-900 hover:text-red-600 transition-colors relative group font-semibold"
              >
                PROGRAMMES
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full"></span>
              </NavLink>

              {/* Actuality Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActualityDropdownVisible(true)}
                onMouseLeave={() => setActualityDropdownVisible(false)}
              >
                <NavLink 
                  to="/actualités" 
                  className="flex items-center text-blue-900 hover:text-red-600 transition-colors font-semibold"
                >
                  ACTUALITÉ
                  <img src={assets.dropdown_icon} className="ml-2 w-3 transform transition-transform rotate-90" alt="" />
                </NavLink>
                
                {actualityDropdownVisible && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 animate-fadeIn"
                    onMouseEnter={() => setActualityDropdownVisible(true)}
                    onMouseLeave={() => setActualityDropdownVisible(false)}
                  >
                    <NavLink 
                      to="/actualités" 
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Actualités
                    </NavLink>
                    <NavLink 
                      to="/événements" 
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Événements
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink 
                to="/médiathèque" 
                className="text-blue-900 hover:text-red-600 transition-colors relative group font-semibold"
              >
                MÉDIATHÈQUE
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full"></span>
              </NavLink>

              <NavLink 
                to="/églises" 
                className="text-blue-900 hover:text-red-600 transition-colors relative group font-semibold"
              >
                ÉGLISES SFAN
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full"></span>
              </NavLink>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownVisible(true)}
                onMouseLeave={() => setAboutDropdownVisible(false)}
              >
                <NavLink 
                  to="/à-propos" 
                  className="flex items-center text-blue-900 hover:text-red-600 transition-colors font-semibold"
                >
                  À PROPOS
                  <img src={assets.dropdown_icon} className="ml-2 w-3 transform transition-transform rotate-90" alt="" />
                </NavLink>
                
                {aboutDropdownVisible && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 animate-fadeIn"
                    onMouseEnter={() => setAboutDropdownVisible(true)}
                    onMouseLeave={() => setAboutDropdownVisible(false)}
                  >
                    <NavLink 
                      to="/à-propos" 
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      À Propos
                    </NavLink>
                    <NavLink 
                      to="/à-propos/bio/père-king-joshua" 
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                    >
                      Père King Joshua
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink 
                to="/contact" 
                className="text-blue-900 hover:text-red-600 transition-colors relative group font-semibold"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all group-hover:w-full"></span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setVisible(true)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img src={assets.menu_icon} className="w-8 h-8" alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute right-0 top-0 h-full bg-white w-80 transform transition-transform ${visible ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6">
            <button 
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 mb-8"
            >
              <img src={assets.dropdown_icon} className="h-5 rotate-180" alt="" />
              <span className="font-semibold">Fermer</span>
            </button>
            
            <nav className="flex flex-col space-y-4">
              {[
                ["SFAN", "/"],
                ["JESUSMICINE", "/jésusmicine"],
                ["PROGRAMMES", "/programmes"],
                ["ACTUALITÉS", "/actualités"],
                ["ÉVÉNEMENTS", "/événements"],
                ["MÉDIATHÈQUE", "/médiathèque"],
                ["ÉGLISES SFAN", "/églises"],
                ["À PROPOS", "/à-propos"],
                ["PÈRE KING JOSHUA", "/à-propos/bio/père-king-joshua"],
                ["CONTACT", "/contact"],
              ].map(([text, href]) => (
                <NavLink
                  key={href}
                  to={href}
                  onClick={() => setVisible(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2 border-b border-gray-100"
                >
                  {text}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;