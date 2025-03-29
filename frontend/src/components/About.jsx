import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="bg-blue-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-24">
        
        {/* Left Image Section */}
        <motion.div
          className="relative w-full max-w-md lg:max-w-lg flex justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About Waste Management"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="max-w-lg text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About <span className="text-green-600">Our Mission</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At <span className="font-semibold">Waste Scape</span>, we aim to redefine waste management through technology and innovation. Our goal is to reduce pollution, promote recycling, and build a cleaner future.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            By using smart waste disposal techniques and AI-driven insights, we ensure an efficient and eco-friendly waste management system.
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
