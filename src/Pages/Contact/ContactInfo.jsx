import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfoCard = () => {
  return (
    <div className="w-full p-6 rounded-xl bg-white dark:bg-[#1a1a1a] shadow-xl transition-all duration-500 flex flex-col lg:flex lg:flex-row gap-8">

      {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[250px] lg:h-auto rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.190071845496!2d55.36736257444519!3d25.297817327619544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60dba84eb310e30b%3A0x81d79a995efb96e0!2sMonopoly%20Prime%20Properties!5e0!3m2!1sen!2seg!4v1742576699031!5m2!1sen!2seg"          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="w-full lg:w-1/2 space-y-5 text-black dark:text-white flex flex-col justify-center">
        <div className="flex items-center gap-3">
          <FaPhone className="text-[#FFD700]" />
          <span>+20 100 000 0000</span>
        </div>
        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-[#25D366]" />
          <span>+20 100 000 0000</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-[#D44638]" />
          <span>info@monopolyprime.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebookF className="text-[#1877F2]" />
          <span>/MonopolyPrime</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#FF5722]" />
          <span>Cairo, Egypt</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;