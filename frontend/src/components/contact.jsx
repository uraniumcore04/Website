import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Top decorative line */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 mb-8"></div>

      {/* 3D Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text drop-shadow-lg mb-8"
      >
        Contact Us
      </motion.h1>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative">
        {/* Left Info Box */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 w-full md:w-1/3 flex flex-col justify-center items-start space-y-6 border-r"
        >
          <h2 className="text-xl font-semibold flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-500" /> Location
          </h2>
          <p className="text-gray-600">Hyderabad, Telangana, India </p>

          <h2 className="text-xl font-semibold flex items-center">
            <FaPhoneAlt className="mr-2 text-green-500" /> Phone
          </h2>
          <p className="text-gray-600">+91 9677247528</p>

          <h2 className="text-xl font-semibold flex items-center">
            <FaClock className="mr-2 text-yellow-500" /> Hours
          </h2>
          <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-10 w-full md:w-2/3"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600">Comment or Message</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
