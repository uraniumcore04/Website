import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-green-600 font-bold text-2xl">Waste Scape</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Building a cleaner future with smart waste management solutions. ♻
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-gray-800 font-semibold text-lg mb-3">Quick Links</h3>
            <a href="#" className="text-gray-600 hover:text-green-600 text-sm">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 text-sm">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 text-sm">
              Our Work
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 text-sm">
              Contact Us
            </a>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-3">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for updates and eco-friendly tips.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md text-gray-700 border border-gray-300 focus:ring-green-500 focus:border-green-500"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Waste Scape. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-green-600 text-lg">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 text-lg">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;