import React, { useState, useContext } from "react"
import { LogIn, CircleUserRound, Moon, Sun } from "lucide-react"
import ThemeContext from "../../Contexts/theme/ThemeContext"

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
  const { theme, changeTheme } = useContext(ThemeContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <nav className={`shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo
            alt="Logo"
            className="h-10 w-10 object-cover"
          />
          <span className="text-xl font-bold ml-2 text-gray-800 dark:text-white">AgriAssist</span>
          <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10 object-cover" />
          <span className={`text-xl font-bold ml-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            FarmAssist
          </span>
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
          {["Home", "Pricing", "Govt Schemes"].map((item) => (
            <li key={item} className="cursor-pointer relative group">
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`${
                  theme === "dark" ? "text-white hover:text-orange-400" : "text-black hover:text-orange-600"
                } transition-colors duration-300`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Theme Switcher and Login Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <button
            className={`cursor-pointer ${theme === "dark" ? "text-white" : "text-gray-600"}`}
            onClick={changeTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>

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
          {/* Conditionally render based on login status */}
          <button
            onClick={toggleLogin}
            className={`${
              theme === "dark" ? "text-white hover:text-orange-400" : "text-gray-600 hover:text-orange-600"
            } cursor-pointer transition duration-300`}
            aria-label={isLoggedIn ? "User profile" : "Log in"}
          >
            {isLoggedIn ? <CircleUserRound className="w-6 h-6" /> : <LogIn className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

