import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <motion.div
            className="transform transition-all hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-400 font-bold text-2xl tracking-wide hover:text-blue-600">
              M-CORE
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Building a cleaner future with smart waste management solutions. ♻
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gray-800 font-semibold text-lg mb-3 hover:text-blue-600">
              Quick Links
            </h3>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transform hover:scale-105 transition duration-300">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transform hover:scale-105 transition duration-300">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transform hover:scale-105 transition duration-300">
              Our Work
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transform hover:scale-105 transition duration-300">
              Contact Us
            </a>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-gray-800 font-semibold text-lg mb-3 hover:text-blue-600">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for updates and eco-friendly tips.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md text-gray-700 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transform transition-all hover:scale-105"
              />
              <button className="px-4 py-2 bg-blue-400 text-white rounded-r-md hover:bg-blue-600 transform transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            © 2025 M-CORE. All rights reserved.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center mt-4 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a href="#" className="text-gray-500 hover:text-blue-600 text-lg transform transition-all hover:scale-125">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-lg transform transition-all hover:scale-125">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-lg transform transition-all hover:scale-125">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-lg transform transition-all hover:scale-125">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
