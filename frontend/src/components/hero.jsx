import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-blue-50 min-h-screen flex items-center px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content with Animations */}
        <motion.div 
          className="text-center lg:text-left max-w-lg flex-1"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Building a  <span className="text-green-600">Tomorrow Cleaner</span>
          </h1>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Smart, sustainable solutions for a cleaner future. Join us in making a difference by promoting recycling and waste reduction!
          </motion.p>
          <motion.div 
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a 
              href="#services" 
              className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Get Started
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 border border-green-600 text-green-600 text-lg font-medium rounded-lg hover:bg-green-50 transition"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Floating Effect & Soft Blur Edges */}
        <motion.div 
          className="relative flex-1 flex justify-center lg:justify-end w-full"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Soft Blurred Background Glow */}
          <motion.div 
            className="absolute inset-0 flex justify-center lg:justify-end"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="w-[90%] h-full bg-white rounded-full blur-3xl opacity-40"></div>
          </motion.div>

          {/* Main Image Floating Effect */}
          <motion.img
            src={hero}
            alt="Waste Management Illustration"
            className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
