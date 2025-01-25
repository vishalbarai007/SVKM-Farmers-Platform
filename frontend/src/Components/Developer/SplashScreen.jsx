import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Leaf, Info, User } from "lucide-react";

const SplashScreen = () => {
  const [isFading, setIsFading] = useState(false); // State to handle fading effect
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); // Trigger the fade-out effect
      setTimeout(() => {
        navigate("/home"); // Redirect after the fade-out animation
      }, 3000); // Duration of the fade-out animation (1 second)
    }, 4000); // Wait for 4 seconds before starting the fade-out

    return () => clearTimeout(timer); // Clean up timers
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-green-900 text-white transition-opacity duration-1000 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo Section */}
      <div className="text-center mb-10">
        <img
          src="/assets/farming_logo_transparent.png" // Replace with your logo path
          alt="Agri-Connect Logo"
          className="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold mb-2">Agri-Connect</h1>
        <p className="text-lg font-medium text-gray-200">
          Bridging Farmers and Consumers
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center bg-green-700 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <ShoppingCart className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Sell Crops Directly</h3>
          <p className="text-sm text-gray-300 text-center">
            Eliminate middlemen and get fair prices for your produce.
          </p>
        </div>
        <div className="flex flex-col items-center bg-green-700 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Leaf className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Government Schemes</h3>
          <p className="text-sm text-gray-300 text-center">
            Stay updated with the latest agricultural schemes and subsidies.
          </p>
        </div>
        <div className="flex flex-col items-center bg-green-700 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <Info className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Easy to Use</h3>
          <p className="text-sm text-gray-300 text-center">
            A user-friendly platform for farmers and consumers alike.
          </p>
        </div>
        <div className="flex flex-col items-center bg-green-700 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <User className="text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Personalized Accounts</h3>
          <p className="text-sm text-gray-300 text-center">
            Create your profile to track sales, purchases, and benefits.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 py-3 px-6 rounded-lg font-semibold text-lg shadow-lg transition-transform duration-300 transform hover:scale-110">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
