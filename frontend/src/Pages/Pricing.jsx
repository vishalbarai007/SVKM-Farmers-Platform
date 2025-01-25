import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [buyerName, setBuyerName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCrop, setSelectedCrop] = useState(null); // New state to hold selected crop details

  const navigate = useNavigate(); // Hook to navigate to different pages

  // Simulating API call
  const mockFetch = async (userMin, userMax) => {
    const cropDetails = [
      { id: 1, name: "Wheat", price: 3000 },
      { id: 2, name: "Rice", price: 2500 },
      { id: 3, name: "Corn", price: 2000 },
    ];

    // Simulating a delay for fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        const matchingCrop = cropDetails.find(
          (crop) => userMin <= crop.price && userMax >= crop.price
        );
        resolve(matchingCrop);
      }, 1000); // 1-second delay to simulate fetching
    });
  };

  const handleCheckPrice = async (e) => {
    e.preventDefault();

    const userMin = parseFloat(minPrice);
    const userMax = parseFloat(maxPrice);

    try {
      // Call the mock API
      const matchingCrop = await mockFetch(userMin, userMax);

      if (matchingCrop) {
        setSelectedCrop(matchingCrop); // Store the crop details
        setMessage(`Crop found: ${matchingCrop.name} priced at ₹${matchingCrop.price}`);
        // Redirect to the order confirmation page
        setTimeout(() => {
          navigate("/order-confirm", { state: { buyerName, crop: matchingCrop } });
        }, 2000); // Redirect after 2 seconds
      } else {
        setMessage(`Sorry, ${buyerName}. No crops match your price range.`);
        // Redirect to the "no orders available" page
        setTimeout(() => {
          navigate("/no-order", { state: { buyerName } });
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      console.error("Error occurred while checking price:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r bg-gray-800 min-h-screen flex flex-col lg:flex-row justify-between items-center px-28">
      
      {/* Left Section - Available Crops */}
      <div className="lg:w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg text-white flex flex-col mb-6 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4 text-center">Available Crops</h2>
        <div className="space-y-4">
          {[{ id: 1, name: "Wheat", price: 3000 }, { id: 2, name: "Rice", price: 2500 }, { id: 3, name: "Corn", price: 2000 }].map((crop) => (
            <div
              key={crop.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <p className="text-lg font-medium">{crop.name}</p>
              <p className="text-lg">₹{crop.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section - Add Details */}
      <div className="lg:w-1/3 p-6 flex flex-col justify-center items-center bg-gray-700 shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Enter Your Details</h2>
        <form onSubmit={handleCheckPrice} className="space-y-4 w-[90%] max-w-md">
          <div>
            <label htmlFor="buyerName" className="block mb-2 text-gray-300">
              Your Name:
            </label>
            <input
              type="text"
              id="buyerName"
              name="buyerName"
              placeholder="Enter your name"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="minPrice" className="block mb-2 text-gray-300">
              Minimum Price:
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Enter minimum price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="block mb-2 text-gray-300">
              Maximum Price:
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Enter maximum price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 w-full py-3 rounded-lg font-semibold text-white transition-transform transform hover:scale-105"
          >
            Check Price
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pricing;
