import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <span className="text-green-600 font-bold text-3xl">Waste Scape</span>
          </div>

          {/* Desktop Navigation Links & Login Button */}
          <div className="hidden sm:flex sm:items-center sm:space-x-10 ml-auto">
            <a href="#" className="text-lg font-medium text-gray-900 border-b-2 border-green-500 px-2 pt-1">
              Home
            </a>
            <a href="#" className="text-lg font-medium text-gray-600 border-b-2 border-transparent px-2 pt-1 hover:text-gray-800 hover:border-gray-300">
              About Us
            </a>
            <a href="#" className="text-lg font-medium text-gray-600 border-b-2 border-transparent px-2 pt-1 hover:text-gray-800 hover:border-gray-300">
              Our Work
            </a>
            <a href="#" className="text-lg font-medium text-gray-600 border-b-2 border-transparent px-2 pt-1 hover:text-gray-800 hover:border-gray-300">
              Contact Us
            </a>
            <button className="ml-6 px-5 py-3 text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Login / Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-3 pb-4 space-y-2">
            <a href="#" className="block pl-4 pr-6 py-3 text-lg font-medium text-green-700 bg-green-50 border-l-4 border-green-500">
              Home
            </a>
            <a href="#" className="block pl-4 pr-6 py-3 text-lg font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300">
              About Us
            </a>
            <a href="#" className="block pl-4 pr-6 py-3 text-lg font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300">
              Our Work
            </a>
            <a href="#" className="block pl-4 pr-6 py-3 text-lg font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300">
              Contact Us
            </a>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="w-full px-5 py-3 text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
