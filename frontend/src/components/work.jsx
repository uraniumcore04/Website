import React from "react";
import smart_image from "../assets/smart_image.png";
import recycle_image from "../assets/recycle.jpg";
import community_image from "../assets/community.png";
import energy_image from "../assets/wasteToEnergy.jpg"; // New Image
import smart_bin_image from "../assets/smart_bin.jpg"; // New Image
import ewaste_image from "../assets/ewaste.jpg"; // New Image

const OurWork = () => {
  const workItems = [
    {
      title: "Smart Waste Collection",
      description: "Using AI-powered sensors, we optimize waste collection routes to reduce fuel consumption and pollution.",
      image: smart_image,
    },
    {
      title: "Recycling Initiatives",
      description: "We promote and facilitate waste segregation, recycling, and upcycling programs to minimize landfill waste.",
      image: recycle_image,
    },
    {
      title: "Community Engagement",
      description: "Educating communities and organizing eco-friendly campaigns to spread awareness about sustainable practices.",
      image: community_image,
    },
    {
      title: "Waste-to-Energy Solutions",
      description: "Transforming waste into renewable energy sources like biogas and electricity.",
      image: energy_image,
    },
    {
      title: "Smart Bin Technology",
      description: "Implementing IoT-based bins that notify collection teams when full, optimizing efficiency.",
      image: smart_bin_image,
    },
    {
      title: "E-Waste Management",
      description: "Safe disposal and recycling of electronic waste to reduce environmental hazards.",
      image: ewaste_image,
    },
  ];

  return (
    <section id="our-work" className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our <span className="text-green-600">Work</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We strive to make waste management smarter, greener, and more efficient.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {workItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <div className="w-full h-60 flex items-center justify-center bg-gray-100">
              <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
