import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaSms,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:bg-gray-200 mt-7">
      {/* Left Side - Contact Information */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Contactez-nous via :
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <BsFillTelephoneFill className="text-blue-500 text-xl mr-3" />
            <FaWhatsapp className="text-green-500 text-xl mr-3" />
            <span className="text-gray-700">Cameroun : (+237) 698 941 583</span>
          </div>
          <div className="flex items-center">
            <BsFillTelephoneFill className="text-blue-500 text-xl mr-3" />
            <FaWhatsapp className="text-green-500 text-xl mr-3" />
            <span className="text-gray-700">Afrique : (+237) 698 734 170</span>
          </div>
          <div className="flex items-center">
            <BsFillTelephoneFill className="text-blue-500 text-xl mr-3" />
            <FaWhatsapp className="text-green-500 text-xl mr-3" />
            <span className="text-gray-700">
              Europe, Amérique et Asie : (+237) 690 299 282
            </span>
          </div>
          <div className="flex items-center">
            <FaSms className="text-purple-500 text-xl mr-3" />
            <FaWhatsapp className="text-green-500 text-xl mr-3" />
            <span className="text-gray-700">
              Europe, Amérique et Asie : (+237) 656 911 817
            </span>
          </div>
          <div className="flex items-center">
            <BsFillTelephoneFill className="text-blue-500 text-xl mr-3" />
            <FaWhatsapp className="text-green-500 text-xl mr-3" />
            <span className="text-gray-700">France : (+237) 699 063 541</span>
          </div>
          <div className="flex items-center">
            <MdOutlineEmail className="text-red-500 text-2xl mr-3" />
            <span className="text-gray-700">contact@sfanjesusmicine.org</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-green-500 text-2xl mr-3" />
            <span className="text-gray-700">
              Cité des Miracles, Nkolo I, Nkoabang, Yaoundé-Cameroun
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Map */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">
          Localisation
        </h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8379145841536!2d11.591348374471107!3d3.84494864848262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc523ada92995%3A0xd21f5d3d9f3ccb89!2sCit%C3%A9%20des%20miracles%20nkoabang!5e0!3m2!1sen!2scm!4v1737255274255!5m2!1sen!2scm"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;