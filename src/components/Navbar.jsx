import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [actualityDropdownVisible, setActualityDropdownVisible] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 font-medium z-10">
      <NavLink to="/">
        <img src={assets.sfan_logo} className="w-36" alt="" />
      </NavLink>

      <ul className="hidden sm:flex gap-5 text-md text-blue-500">
        <NavLink to="/jésusmicine" className="flex flex-col items-center gap-1">
          <p>JESUSMICINE</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <NavLink to="/programmes" className="flex flex-col items-center gap-1">
          <p>PROGRAMMES</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <div className="relative group">
          <NavLink
            to="/actualités"
            className="flex flex-col items-center gap-1"
            onMouseEnter={() => setActualityDropdownVisible(true)}
            onMouseLeave={() => setActualityDropdownVisible(false)}
          >
            <p>
              ACTUALITE{" "}
              <img
                src={assets.dropdown_icon}
                className="inline w-3 rotate-90 mx-2"
                alt=""
              />
            </p>
            <hr className="w-2/4 border-none h-[2px] bg-red-700 hidden" />
          </NavLink>
          {actualityDropdownVisible && (
            <div
              className="absolute top-8 left-0 bg-white shadow-lg py-2 flex flex-col gap-1 w-[250px] text-center"
              onMouseEnter={() => setActualityDropdownVisible(true)}
              onMouseLeave={() => setActualityDropdownVisible(false)}
            >
              <NavLink to="/actualités" className="px-4 py-2">
                Actualités
              </NavLink>
              <NavLink to="/événements" className="px-4 py-2">
                Evménements
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/médiathèque" className="flex flex-col items-center gap-1">
          <p>MEDIATHEQUE</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <NavLink to="/églises" className="flex flex-col items-center gap-1">
          <p>EGLISES SFAN</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
        <div className="relative group">
          <NavLink
            to="/à-propos"
            className="flex flex-col items-center gap-1"
            onMouseEnter={() => setAboutDropdownVisible(true)}
            onMouseLeave={() => setAboutDropdownVisible(false)}
          >
            <p>
              A PROPOS{" "}
              <img
                src={assets.dropdown_icon}
                className="inline w-3 rotate-90 mx-2"
                alt=""
              />
            </p>
            <hr className="w-2/4 border-none h-[2px] bg-red-700 hidden" />
          </NavLink>
          {aboutDropdownVisible && (
            <div
              className="absolute top-8 left-0 bg-white shadow-lg py-2 flex flex-col gap-1 w-[250px] text-center"
              onMouseEnter={() => setAboutDropdownVisible(true)}
              onMouseLeave={() => setAboutDropdownVisible(false)}
            >
              <NavLink to="/à-propos" className="px-4 py-2">
                A PROPOS
              </NavLink>
              <NavLink to="/à-propos/bio/père-king-joshua" className="px-4 py-2">
                PERE KING JOSHUA
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-8 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="absolte flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer bg-blue-600"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p className="text-white">Retour</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            SFAN
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/jésusmicine">
            JESUSMICINE
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/programmes">
            PROGRAMMES
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/actualités">
            ACTUALITES
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/événements">
            EVENEMENTS
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/médiathèque">
            MEDIATHEQUE
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/églises">
            EGLISES SFAN
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/à-propos">
            A PROPOS
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/à-propos/bio/père-king-joshua">
            LE PERE KING JOSHUA
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
