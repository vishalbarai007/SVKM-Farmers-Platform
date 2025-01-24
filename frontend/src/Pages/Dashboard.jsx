import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const cropData = location.state?.cropData; // Get form data passed from CropForm

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 h-screen flex">
      {/* Left Section - User Information */}
      <div className="w-1/4 p-8 bg-gray-900 rounded-lg shadow-lg text-white">
        {/* User Information */}
        <h2 className="text-3xl font-semibold text-gray-100">John Doe</h2>
        {/* Additional User Information */}
      </div>

      {/* Middle Section - Crop Form Data */}
      <div className="w-2/4 p-8 bg-gray-900 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4">Crop Details</h2>
        {cropData ? (
          <div>
            <p><strong>Crop Name:</strong> {cropData.cropName}</p>
            <p><strong>Crop Type:</strong> {cropData.cropType}</p>
            <p><strong>Price Per Unit:</strong> {cropData.pricePerUnit}</p>
            <p><strong>Quantity Available:</strong> {cropData.quantityAvailable}</p>
            <p><strong>Harvest Date:</strong> {cropData.harvestDate}</p>
            <p><strong>Location:</strong> {cropData.location}</p>
            <p><strong>Description:</strong> {cropData.description}</p>
            <p><strong>Supplier Name:</strong> {cropData.supplierName}</p>
            <p><strong>Supplier Contact:</strong> {cropData.supplierContact}</p>
            <p><strong>Availability Status:</strong> {cropData.availabilityStatus}</p>
          </div>
        ) : (
          <p>No crop data available.</p>
        )}
      </div>

      {/* Right Section - Display other details */}
    </div>
  );
};

export default Dashboard;
