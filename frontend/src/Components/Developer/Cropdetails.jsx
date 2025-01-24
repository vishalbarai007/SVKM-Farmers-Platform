import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CropForm = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    cropType: '',
    pricePerUnit: '',
    quantityAvailable: '',
    harvestDate: '',
    location: '',
    description: '',
    supplierName: '',
    supplierContact: '',
    cropImage: null,
    availabilityStatus: 'Available',
  });

  const navigate = useNavigate(); // Hook to navigate to a different page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      cropImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Dashboard with the form data
    navigate('/dashboard', { state: { cropData: formData } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-full sm:w-[650px]"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Add Crop Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block mb-4">
            <span className="text-gray-400">Crop Name</span>
            <input
              type="text"
              name="cropName"
              value={formData.cropName}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-400">Crop Type</span>
            <input
              type="text"
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block mb-4">
            <span className="text-gray-400">Price Per Unit</span>
            <input
              type="number"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-400">Quantity Available</span>
            <input
              type="number"
              name="quantityAvailable"
              value={formData.quantityAvailable}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </label>
        </div>

        <label className="block mb-4">
          <span className="text-gray-400">Harvest Date</span>
          <input
            type="date"
            name="harvestDate"
            value={formData.harvestDate}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-400">Location</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-400">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block mb-4">
            <span className="text-gray-400">Supplier Name</span>
            <input
              type="text"
              name="supplierName"
              value={formData.supplierName}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-400">Supplier Contact</span>
            <input
              type="text"
              name="supplierContact"
              value={formData.supplierContact}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
            />
          </label>
        </div>

        <label className="block mb-4">
          <span className="text-gray-400">Crop Image</span>
          <input
            type="file"
            name="cropImage"
            onChange={handleFileChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-400">Availability Status</span>
          <select
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 w-full rounded-lg transition duration-200 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Add Crop
        </button>
      </form>
    </div>
  );
};

export default CropForm;
