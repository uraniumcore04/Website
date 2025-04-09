import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Mission", href: "#mission" },
    { name: "Our Work", href: "#work" },
    { name: "About Team", href: "#team" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(signOutSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-md py-2"
        : "bg-white/90 backdrop-blur-sm py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <a href="#" className="flex items-center">
              <span className="text-blue-500 font-bold text-2xl sm:text-3xl tracking-tight">
                M-CORE
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative px-3 py-2 text-base font-medium rounded-md transition-all duration-300 group ${activeLink === link.name
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${activeLink === link.name
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-75"
                    }`}
                ></span>
              </a>
            ))}

            {currentUser ? (
              <div className="flex items-center ml-6">
                <div className="relative group">
                  <button className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-blue-500 focus:outline-none">
                    <img
                      src={currentUser.photoURL || "https://via.placeholder.com/40"}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover mr-2 border-2 border-blue-500"
                    />
                    <span>{currentUser.displayName || currentUser.email?.split('@')[0]}</span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link to="/sign-in" className="ml-6 px-5 py-2.5 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5">
                  Login
                </Link>

                <Link to="/sign-up" className="ml-6 px-5 py-2.5 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5">
                  SignUp
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-blue-500 hover:bg-gray-100/60 focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close main menu" : "Open main menu"}
              </span>
              <div className="relative w-6 h-5">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 top-2.5" : "top-0"
                    }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "top-2"
                    }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 top-2.5" : "top-4"
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.05 }}
              className="px-3 pt-3 pb-6 space-y-1"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${activeLink === link.name
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-4 pb-3">
                {currentUser ? (
                  <div className="space-y-3">
                    <div className="flex items-center px-4 py-2">
                      <img
                        src={currentUser.photoURL || "https://via.placeholder.com/40"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-blue-500"
                      />
                      <div>
                        <p className="text-base font-medium text-gray-800">
                          {currentUser.displayName || currentUser.email?.split('@')[0]}
                        </p>
                        <p className="text-sm text-gray-500">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-3 text-base font-medium rounded-lg text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Profile
                    </Link>
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={handleSignOut}
                      className="w-full px-5 py-3 text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-sm"
                    >
                      Sign Out
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => {
                      navigate('/sign-in');
                      setIsOpen(false);
                    }}
                    className="w-full px-5 py-3 text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-sm"
                  >
                    Login / Sign Up
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
