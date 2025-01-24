import React, { useState, useContext } from "react"
import { LogIn, CircleUserRound, Moon, Sun } from "lucide-react"
import ThemeContext from "../../Contexts/theme/ThemeContext"

const Navbar = () => {
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
          <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10 object-cover" />
          <span className={`text-xl font-bold ml-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            FarmAssist
          </span>
        </div>

        {/* Middle: Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
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

