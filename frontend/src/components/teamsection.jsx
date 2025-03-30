import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anurag from "../assets/anurag.jpg";
import vipul from "../assets/vipul.jpg";

const teamMembers = [
  {
    name: "Anurah Khanna",
    role: "Founder & CEO",
    description:
      "Committed to revolutionizing waste management with innovative recycling and sustainability solutions.",
    image: anurag,
    socialLinks: [
      {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/anuragkhannaiiitm/",
      },
      { icon: "twitter", url: "#" },
    ],
    skills: ["Strategy", "Innovation", "Leadership"],
  },
  {
    name: "Vipul Kumar",
    role: "Team Member",
    description:
      "Leading operations with a vision for efficiency, waste reduction, and eco-friendly disposal methods.",
    image: vipul,
    socialLinks: [
      { icon: "linkedin", url: "https://www.linkedin.com/in/vip-coder/" },
      { icon: "twitter", url: "https://twitter.com/VIP_coder" },
    ],
    skills: ["Deligent", "Curious", "Analytics"],
  },
];

const TeamSection = () => {
  // Track hover state for each individual card
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-xl"></div>
      <div className="absolute top-1/3 left-0 w-48 h-48 bg-gray-100 rounded-full opacity-30 blur-md"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-50 rounded-full opacity-30 blur-lg"></div>

      {/* SVG decorative elements */}
      <svg
        className="absolute top-20 left-10 w-20 h-20 text-blue-200 opacity-20 transform rotate-15"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20ZM10,14.2L7.2,11.4L5.8,12.8L10,17L18.2,8.8L16.8,7.4L10,14.2Z" />
      </svg>

      <svg
        className="absolute bottom-20 right-10 w-24 h-24 text-blue-200 opacity-20 transform -rotate-15"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-14 -left-14 w-28 h-28 bg-blue-50 rounded-full opacity-60 blur-lg"></div>
          <div className="absolute -top-10 right-1/4 w-20 h-20 bg-green-50 rounded-full opacity-50 blur-lg"></div>

          {/* Enhanced subtitle with gradient and icon */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-semibold tracking-wider uppercase text-sm">
              The Team Behind Our Mission
            </span>
            <div className="h-px w-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </div>

          {/* Enhanced heading with 3D effect */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2 mb-8 relative inline-block">
            <span className="inline-block transform transition-transform duration-300 hover:translate-y-0.5 hover:text-blue-700">
              Our
            </span>{" "}
            <span className="inline-block transform transition-transform duration-300 hover:translate-y-0.5 hover:text-green-700">
              Leadership
            </span>{" "}
            <span className="inline-block transform transition-transform duration-300 hover:translate-y-0.5 hover:text-blue-700">
              Team
            </span>
            {/* Enhanced underline with dual-color gradient */}
            <div
              className="absolute -bottom-3 left-0 right-0 h-1.5 w-full mx-auto"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-full"></div>
            </div>
          </h2>

          {/* Enhanced description with highlighted text */}
          <div className="relative">
            <svg
              className="absolute opacity-5 text-green-600 -left-14 -top-10 w-36 h-36 transform rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M7.5 21L3 16.5M3 16.5L7.5 12M3 16.5H16.5M16.5 3L21 7.5M21 7.5L16.5 12M21 7.5H7.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed relative z-10">
              With{" "}
              <span className="text-blue-700 font-medium">
                decades of experience
              </span>{" "}
              in sustainable waste management and environmental solutions, our
              leadership team is dedicated to creating a{" "}
              <span className="text-green-700 font-medium">
                cleaner and greener future
              </span>{" "}
              for generations to come.
            </p>

            {/* Added decorative leaf pattern */}
            <svg
              className="absolute opacity-5 text-blue-600 -right-10 -bottom-10 w-28 h-28 transform -rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Added decorative line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-blue-300 via-green-300 to-blue-300 rounded-full"></div>
          </div>
        </motion.div>

        {/* Modern Team Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 border border-gray-100 flex flex-col ${
                  hoveredCard === index ? "shadow-2xl -translate-y-2" : ""
                }`}
              >
                {/* Glass-like header with image */}
                <div className="relative h-72 overflow-hidden">
                  {/* Glowing bg accent */}
                  <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/30 via-transparent to-green-500/20 opacity-50 blur-3xl transform -rotate-12"></div>

                  {/* Frosted glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm"></div>

                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${
                        index % 2 ? "#3B82F6" : "#10B981"
                      } 1px, transparent 1px)`,
                      backgroundSize: "16px 16px",
                    }}
                  ></div>

                  {/* Diagonal stripe accent */}
                  <div
                    className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-${
                      index % 2 ? "green" : "blue"
                    }-600 opacity-20 rotate-12 transform skew-x-12`}
                  ></div>

                  {/* Image container - animate only current card */}
                  <div
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 ${
                      hoveredCard === index ? "scale-105" : "scale-100"
                    }`}
                  >
                    <div className="relative">
                      {/* Image glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-70 blur-md"></div>

                      {/* Actual image */}
                      <div className="relative rounded-full overflow-hidden h-40 w-40 border-4 border-white shadow-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            hoveredCard === index ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating role tag */}
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-lg z-10">
                    <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 flex-grow flex flex-col relative">
                  {/* Card accent */}
                  <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

                  {/* Name */}
                  <h3
                    className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                      hoveredCard === index ? "text-blue-700" : "text-gray-800"
                    }`}
                  >
                    {member.name}
                  </h3>

                  {/* Bio */}
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills section - only visible on hover for specific card */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4"
                      >
                        <div className="flex flex-wrap gap-2 justify-center my-3">
                          {member.skills.map((skill, i) => (
                            <span
                              key={i}
                              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                index % 2 === 0
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-green-50 text-green-700"
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Social links */}
                  <div className="mt-auto pt-4">
                    <div className="flex justify-center gap-3">
                      {member.socialLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 ${
                            link.icon === "linkedin"
                              ? "text-blue-700"
                              : link.icon === "twitter"
                              ? "text-blue-500"
                              : "text-gray-500"
                          } hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110 ${
                            link.icon === "linkedin"
                              ? "hover:bg-blue-700"
                              : link.icon === "twitter"
                              ? "hover:bg-blue-500"
                              : "hover:bg-gray-700"
                          }`}
                          aria-label={`${link.icon} profile of ${member.name}`}
                        >
                          {link.icon === "linkedin" ? (
                            <svg
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-15 -translate-x-full hover:animate-shine"></span>

            <span className="relative z-10">Meet Our Entire Team</span>
            <svg
              className="w-5 h-5 transform hover:translate-x-1 transition-transform duration-300 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Add keyframes for button shine effect */}
      <style jsx>{`
        @keyframes shine {
          100% {
            transform: translateX(100%) skew(-15deg);
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
