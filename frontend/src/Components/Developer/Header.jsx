import React, { useState, useEffect } from "react";
import { LogIn, CircleUserRound, Moon, Sun } from "lucide-react";

const Navbar = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to track dropdown menu visibility
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isGovtSchemesOpen, setIsGovtSchemesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Toggle the dark mode class on body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle login/logout toggle
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo
            alt="Logo"
            className="h-10 w-10 object-cover"
          />
          <span className="text-xl font-bold ml-2 text-gray-800 dark:text-white">AgriAssist</span>
        </div>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {/* Home Dropdown */}
          <li
            className="cursor-pointer relative group"
            onMouseEnter={() => setIsHomeOpen(true)}
            onMouseLeave={() => setIsHomeOpen(false)}
          >
            <a
              href="#home"
              className="text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-colors duration-300"
            >
              Home
            </a>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white shadow-md rounded-md transition-opacity duration-300 ease-in-out ${
                isHomeOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <a href="#home" className="block px-4 py-2">Home Subitem 1</a>
              <a href="#home" className="block px-4 py-2">Home Subitem 2</a>
            </div>
          </li>

          {/* Pricing Dropdown */}
          <li
            className="cursor-pointer relative group"
            onMouseEnter={() => setIsPricingOpen(true)}
            onMouseLeave={() => setIsPricingOpen(false)}
          >
            <a
              href="#pricing"
              className="text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-colors duration-300"
            >
              Pricing
            </a>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white shadow-md rounded-md transition-opacity duration-300 ease-in-out ${
                isPricingOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <a href="#pricing" className="block px-4 py-2">Basic Plan</a>
              <a href="#pricing" className="block px-4 py-2">Premium Plan</a>
            </div>
          </li>

          {/* Govt Schemes Dropdown */}
          <li
            className="cursor-pointer relative group"
            onMouseEnter={() => setIsGovtSchemesOpen(true)}
            onMouseLeave={() => setIsGovtSchemesOpen(false)}
          >
            <a
              href="#govt-schemes"
              className="text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-colors duration-300"
            >
              Govt Schemes
            </a>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white shadow-md rounded-md transition-opacity duration-300 ease-in-out ${
                isGovtSchemesOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <a href="#scheme1" className="block px-4 py-2">Scheme 1</a>
              <a href="#scheme2" className="block px-4 py-2">Scheme 2</a>
            </div>
          </li>
        </ul>

        {/* Right: Theme Switcher and Login Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <div
            className="cursor-pointer text-gray-600 dark:text-white"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </div>

          {/* Login Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsLoginOpen(true)}
            onMouseLeave={() => setIsLoginOpen(false)}
          >
            {isLoggedIn ? (
              <CircleUserRound
                className="text-gray-600 hover:text-orange-600 cursor-pointer w-6 h-6 transition duration-300"
                onClick={toggleLogin} // Optional: logout action on click
              />
            ) : (
              <LogIn
                className="text-gray-600 hover:text-orange-600 cursor-pointer w-6 h-6 transition duration-300"
                onClick={toggleLogin} // Optional: login action on click
              />
            )}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-black dark:text-white shadow-md rounded-md transition-opacity duration-300 ease-in-out ${
                isLoginOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <a href="#login" className="block px-4 py-2">Login</a>
              <a href="#signup" className="block px-4 py-2">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
