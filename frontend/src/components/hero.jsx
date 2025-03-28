import React from "react";

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center py-20 px-4 bg-[url('/path-to-hero-image.jpg')] bg-cover bg-center">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Revolutionizing Waste Management 🌍
          </h1>
          <p className="text-gray-200 mt-4 max-w-3xl text-lg drop-shadow-md">
            Empowering communities with smart, sustainable, and technology-driven waste solutions to create a cleaner and greener future.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-green-600">Recycling Solutions</h3>
            <p className="text-gray-600 mt-2">
              Efficient recycling methods to reduce waste and promote sustainability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-green-600">Smart Collection</h3>
            <p className="text-gray-600 mt-2">
              Advanced tracking and AI-powered waste collection systems.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-green-600">Community Engagement</h3>
            <p className="text-gray-600 mt-2">
              Educating and involving communities in eco-friendly waste management.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Take Action Today</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Start your journey towards a cleaner environment. Join our platform and be part of the change.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-green-700 font-medium rounded-lg hover:bg-gray-200">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default Home;
