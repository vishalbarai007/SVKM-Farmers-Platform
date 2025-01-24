import React, { useContext } from 'react';
import { SquarePlus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../Contexts/user/UserContext';

const Dashboard = () => {
  const location = useLocation();
  const cropData = location.state?.cropData || {}; // Get crop data from the state or use an empty object if none
  const userContext = useContext(UserContext);
  const user = userContext?.user; // Ensure userContext is defined before accessing `user`

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      {/* Left Section - User Information */}
      <div className="lg:w-1/4 p-6 bg-gray-900 rounded-lg shadow-lg text-white flex flex-col items-center lg:items-start">
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
          <img
            src={user?.photoURL || '/assets/farming_logo_transparent.png'}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4 lg:mb-0 lg:mr-4 shadow-xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-100">
              {user?.displayName || 'Manish'}
            </h2>
            <p className="text-sm text-gray-400">{user ? 'Admin' : 'Farmer'}</p>
          </div>
        </div>

        <div className="space-y-2 text-center lg:text-left mb-4">
          <p>
            <strong>Email:</strong> {user?.email || 'vishalbaraiofficial01@gmail.com'}
          </p>
          <p>
            <strong>Phone:</strong> {user?.phone || '987654321'}
          </p>
          <p>
            <strong>Location:</strong> {user?.location || 'Maharashtra, India'}
          </p>
        </div>

        {user && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
            Edit Profile
          </button>
        )}
      </div>

      {/* Middle Section - SquarePlus Logo and Text */}
      <div className="lg:w-1/4 h-[100vh] flex flex-col justify-center items-center bg-gray-900 border-2 border-white rounded-lg shadow-lg text-white">
        <Link to="/add-crop">
          <SquarePlus className="text-7xl mb-4 transform hover:scale-125 transition-transform duration-300 ease-in-out" />
        </Link>
        <p className="text-2xl font-semibold text-center text-gray-100">
          Add Details of Crop
        </p>
      </div>

      {/* Right Section - Display Details */}
      <div className="lg:w-2/4 p-6 bg-gray-900 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Details</h2>
        {/* Display crop details */}
        {Object.keys(cropData).length > 0 ? (
          <div className="space-y-2 p-5 h-fit w-[400px] bg-gray-800 rounded-3xl hover:bg-gray-700 transition-all">
            <p>
              <strong>Crop Name:</strong> {cropData.cropName}
            </p>
            <p>
              <strong>Crop Type:</strong> {cropData.cropType}
            </p>
            <p>
              <strong>Price Per Unit:</strong> ${cropData.pricePerUnit}
            </p>
            <p>
              <strong>Quantity Available:</strong> {cropData.quantityAvailable} units
            </p>
            <p>
              <strong>Harvest Date:</strong> {cropData.harvestDate}
            </p>
            <p>
              <strong>Location:</strong> {cropData.location}
            </p>
            <p>
              <strong>Description:</strong> {cropData.description}
            </p>
            <p>
              <strong>Supplier Name:</strong> {cropData.supplierName}
            </p>
            <p>
              <strong>Supplier Contact:</strong> {cropData.supplierContact}
            </p>
            <p>
              <strong>Availability Status:</strong> {cropData.availabilityStatus}
            </p>
          </div>
        ) : (
          <p>No crop details available. Please add crop details.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
