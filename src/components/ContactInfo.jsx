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
    <div className="flex flex-col md:flex-row bg-gray-100 p-4 rounded-lg shadow-lg transition-all hover:shadow-xl hover:bg-gray-200 pt-10 mt-7">
      {/* Left Side - Contact Information */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">
          Contactez nous via :
        </h2>
        <div className="mb-2">
          <BsFillTelephoneFill className="inline-block mr-2 text-blue-500 size-5" />
          <FaWhatsapp className="inline-block mr-2 text-green-500 size-6" />{" "}
          Appels et WhatsApp Cameroun : (+237) 698 941 583
        </div>
        <div className="mb-2">
          <BsFillTelephoneFill className="inline-block mr-2 text-blue-500 size-5" />
          <FaWhatsapp className="inline-block mr-2 text-green-500 size-6" />{" "}
          Appels et WhatsApp Afrique : (+237) 698 734 170
        </div>
        <div className="mb-2">
          <BsFillTelephoneFill className="inline-block mr-2 text-blue-500 size-5" />
          <FaWhatsapp className="inline-block mr-2 text-green-500 size-6" />{" "}
          Appels Europe, Amérique et Asie : (+237) 690 299 282
        </div>
        <div className="mb-2">
          <FaSms className="inline-block mr-2 text-purple-500 size-6" />
          <FaWhatsapp className="inline-block mr-2 text-green-500 size-6" /> SMS et
          WhatsApp Europe, Amérique et Asie : (+237) 656 911 817
        </div>
        <div className="mb-2">
          <BsFillTelephoneFill className="inline-block mr-2 text-blue-500 size-5" />
          <FaWhatsapp className="inline-block mr-2 text-green-500 size-6" />{" "}
          Appels et WHatsapp France : (+237) 699 063 541
        </div>
        <br />
        <div className="email mb-2">
          <MdOutlineEmail className="inline-block mr-2 text-red-500 size-8" />{" "}
          contact@sfanjesusmicine.org
        </div>
        <div className="mb-2">
          <FaMapMarkerAlt className="inline-block mr-2 text-green-500 size-8" />
          Lieu : Cité des Miracles, Nkolo I, Nkoabang, Yaoundé-Cameroun
        </div>
      </div>

      {/* Right Side - Map */}
      <div className="md:w-1/2 h-64 p-0 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">
          Localisation
        </h2>
        <iframe
          className="w-full h-full rounded-lg shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8379145841536!2d11.591348374471107!3d3.84494864848262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc523ada92995%3A0xd21f5d3d9f3ccb89!2sCit%C3%A9%20des%20miracles%20nkoabang!5e0!3m2!1sen!2scm!4v1737255274255!5m2!1sen!2scm"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
