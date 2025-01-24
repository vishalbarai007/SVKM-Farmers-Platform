import React from 'react';
import { SquarePlus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DashboardMain = () => {
  const location = useLocation();
  const cropData = location.state?.cropData || {}; // Get crop data from the state or use an empty object if none

  return (
    <div className=" min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - User Information */}
      {/* Middle Section - SquarePlus Logo and Text */}
      <div className="lg:w-1/4 p-6 flex flex-col justify-center items-center bg-gray-700 shadow-lg text-white">
        <Link to="/add-crop">
          <SquarePlus className="text-7xl mb-4 transform hover:scale-125 transition-transform duration-300 ease-in-out" />
        </Link>
        <p className="text-2xl font-semibold text-center text-gray-100">Add Details of Crop</p>
      </div>

      {/* Right Section - Display Details */}
      <div className="lg:w-2/4 p-6 bg-gray-900 shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Details</h2>
        {/* Display crop details */}
        {Object.keys(cropData).length > 0 ? (
          <div className="space-y-2">
            <p><strong>Crop Name:</strong> {cropData.cropName}</p>
            <p><strong>Crop Type:</strong> {cropData.cropType}</p>
            <p><strong>Price Per Unit:</strong> ${cropData.pricePerUnit}</p>
            <p><strong>Quantity Available:</strong> {cropData.quantityAvailable} units</p>
            <p><strong>Harvest Date:</strong> {cropData.harvestDate}</p>
            <p><strong>Location:</strong> {cropData.location}</p>
            <p><strong>Description:</strong> {cropData.description}</p>
            <p><strong>Supplier Name:</strong> {cropData.supplierName}</p>
            <p><strong>Supplier Contact:</strong> {cropData.supplierContact}</p>
            <p><strong>Availability Status:</strong> {cropData.availabilityStatus}</p>
          </div>
        ) : (
          <p>No crop details available. Please add crop details.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardMain;
