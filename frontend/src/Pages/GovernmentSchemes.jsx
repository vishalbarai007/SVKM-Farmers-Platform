import React, { useEffect, useState } from 'react';

const GovernmentSchemes = () => {
  const [schemes, setSchemes] = useState([]);

  // Fetch data from API or mock data
  useEffect(() => {
    // Mock fetch function (replace with your API)
    const fetchSchemes = async () => {
      const data = [
        {
          id: 1,
          name: 'Pradhan Mantri Awas Yojana',
          description: 'Affordable housing scheme for all.',
          benefits: 'Financial assistance for home construction.',
        },
        {
          id: 2,
          name: 'Atal Pension Yojana',
          description: 'Pension scheme for unorganized sector workers.',
          benefits: 'Provides a fixed pension after retirement.',
        },
        {
          id: 3,
          name: 'Swachh Bharat Abhiyan',
          description: 'Clean India campaign for a better future.',
          benefits: 'Grants for sanitation and public awareness.',
        },
      ];
      setSchemes(data); // Update state with fetched data
    };

    fetchSchemes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Government Schemes</h1>

      {/* Horizontal Scrollable Section */}
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="flex-shrink-0 w-80 bg-white shadow-lg rounded-lg p-6 text-gray-800 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600">{scheme.name}</h2>
            <p className="text-sm mt-2 text-gray-600">{scheme.description}</p>
            <h3 className="mt-4 font-bold text-gray-800">Benefits:</h3>
            <p className="text-sm text-gray-600">{scheme.benefits}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentSchemes;
