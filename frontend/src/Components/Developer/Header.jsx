import React, { useState, useContext } from "react"
import { LogIn, CircleUserRound, Moon, Sun } from "lucide-react"
import ThemeContext from "../../Contexts/theme/ThemeContext"

const Navbar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isGovtSchemesOpen, setIsGovtSchemesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { theme, changeTheme } = useContext(ThemeContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const themeColors = {
    nav: theme === "dark" ? "bg-gray-900" : "bg-white",
    text: theme === "dark" ? "text-white" : "text-gray-800",
    textHover: theme === "dark" ? "hover:text-orange-400" : "hover:text-orange-600",
    dropdown: theme === "dark" ? "bg-gray-800" : "bg-white",
    dropdownText: theme === "dark" ? "text-white" : "text-gray-800",
    iconColor: theme === "dark" ? "text-white" : "text-gray-600"
  };

  const NavDropdown = ({ isOpen, items, onMouseEnter, onMouseLeave }) => (
    <div
      className={`absolute left-0 mt-0 w-48 ${themeColors.dropdown} ${themeColors.dropdownText} 
        shadow-lg rounded-md z-50 transition-all duration-300 ease-in-out 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ top: '100%' }}  // Ensure the dropdown is positioned correctly
    >
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
  

  return (
    <nav className={`shadow-md ${themeColors.nav} relative`}>
      <div className="container mx-auto w-full flex items-center justify-between h-[100px] px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/farming_logo_transparent.png"
            alt="Logo"
            className="h-10 w-10 object-cover"
          />
          <span className={`text-xl font-bold ml-2 ${themeColors.text}`}>
            FarmAssist
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {/* Home Dropdown */}
          <li 
            className="relative group"
            onMouseEnter={() => setIsHomeOpen(true)}
            onMouseLeave={() => setIsHomeOpen(false)}
          >
            <a
              href="#home"
              className={`${themeColors.text} ${themeColors.textHover} transition-colors duration-300`}
            >
              Home
            </a>
            <NavDropdown 
              isOpen={isHomeOpen} 
              items={[
                { label: 'Home Subitem 1', link: '#home1' },
                { label: 'Home Subitem 2', link: '#home2' }
              ]}
              onMouseEnter={() => setIsHomeOpen(true)}
              onMouseLeave={() => setIsHomeOpen(false)}
            />
          </li>

          {/* Pricing Dropdown */}
          <li 
            className="relative group"
            onMouseEnter={() => setIsPricingOpen(true)}
            onMouseLeave={() => setIsPricingOpen(false)}
          >
            <a
              href="#pricing"
              className={`${themeColors.text} ${themeColors.textHover} transition-colors duration-300`}
            >
              Pricing
            </a>
            <NavDropdown 
              isOpen={isPricingOpen} 
              items={[
                { label: 'Basic Plan', link: '#basic' },
                { label: 'Premium Plan', link: '#premium' }
              ]}
              onMouseEnter={() => setIsPricingOpen(true)}
              onMouseLeave={() => setIsPricingOpen(false)}
            />
          </li>

          {/* Government Schemes Dropdown */}
          <li 
            className="relative group"
            onMouseEnter={() => setIsGovtSchemesOpen(true)}
            onMouseLeave={() => setIsGovtSchemesOpen(false)}
          >
            <a
              href="#govt-schemes"
              className={`${themeColors.text} ${themeColors.textHover} transition-colors duration-300`}
            >
              Govt Schemes
            </a>
            <NavDropdown 
              isOpen={isGovtSchemesOpen} 
              items={[
                { label: 'Scheme 1', link: '#scheme1' },
                { label: 'Scheme 2', link: '#scheme2' }
              ]}
              onMouseEnter={() => setIsGovtSchemesOpen(true)}
              onMouseLeave={() => setIsGovtSchemesOpen(false)}
            />
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <button
            className={`cursor-pointer ${themeColors.iconColor}`}
            onClick={changeTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>

          {/* Login Button */}
          <button
            onClick={toggleLogin}
            className={`${themeColors.text} ${themeColors.textHover} cursor-pointer flex transition duration-300`}
            aria-label={isLoggedIn ? "User profile" : "Log in"}
          >
            <p className="mr-2">Login</p>
            {isLoggedIn ? <CircleUserRound className="w-6 h-6" /> : <LogIn className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar