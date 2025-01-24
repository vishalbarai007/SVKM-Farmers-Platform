import React, { useState, useEffect } from "react";
import { LogIn, CircleUserRound, Moon, Sun } from "lucide-react";

const Navbar = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <span className="text-xl font-bold ml-2 text-gray-800 dark:text-white">FarmAssist</span>
        </div>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="cursor-pointer relative group">
            <a
              href="#home"
              className="text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-colors duration-300"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li className="cursor-pointer relative group">
            <a
              href="#pricing"
              className="text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-colors duration-300"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
            </a>
          </li>
          <li className="cursor-pointer relative group">
            <a
              href="#govt-schemes"
              className="text-black hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-colors duration-300"
            >
              Govt Schemes
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
            </a>
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

          {/* Conditionally render based on login status */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
