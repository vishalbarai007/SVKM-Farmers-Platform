import React, { useState } from 'react';
import { 
  ShoppingCart, 
  CloudSun, 
  Leaf, 
  FileText, 
  GraduationCap, 
  Building2,
  PlusCircle 
} from 'lucide-react';
import Dashboard from '../../Pages/Dashboard'

const DashboardMain = () => {
  const [activeSection, setActiveSection] = useState('marketPrice');

  const sidebarOptions = [
    { 
      id: 'marketPrice', 
      label: 'Market Prices', 
      icon: <ShoppingCart className="w-5 h-5" /> 
    },
    { 
      id: 'weatherUpdates', 
      label: 'Weather Updates', 
      icon: <CloudSun className="w-5 h-5" /> 
    },
    { 
      id: 'fertilizersPesticides', 
      label: 'Fertilizers & Pesticides', 
      icon: <Leaf className="w-5 h-5" /> 
    },
    { 
      id: 'governmentSchemes', 
      label: 'Government Schemes', 
      icon: <Building2 className="w-5 h-5" /> 
    },
    { 
      id: 'trainingEducation', 
      label: 'Training & Education', 
      icon: <GraduationCap className="w-5 h-5" /> 
    },
    { 
      id: 'cropReports', 
      label: 'Crop Reports', 
      icon: <FileText className="w-5 h-5" /> 
    },
    { 
      id: 'addCrops', 
      label: 'Add Crops', 
      icon: <PlusCircle className="w-5 h-5" /> 
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'marketPrice':
        return <MarketPriceContent />;
      case 'weatherUpdates':
        return <WeatherUpdatesContent />;
      case 'fertilizersPesticides':
        return <FertilizersPesticidesContent />;
      case 'governmentSchemes':
        return <GovernmentSchemesContent />;
      case 'trainingEducation':
        return <TrainingEducationContent />;
      case 'cropReports':
        return <CropReportsContent />;
      case 'addCrops':
        return <Dashboard />;
      default:
        return <MarketPriceContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-zinc-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-zinc-800 shadow-md">
        <div className="p-5 border-b dark:border-zinc-700">
          <h2 className="text-xl font-bold dark:text-white">Agri Dashboard</h2>
        </div>
        <nav className="p-4">
          {sidebarOptions.map(option => (
            <button
              key={option.id}
              onClick={() => setActiveSection(option.id)}
              className={`
                flex text-white items-center w-full p-3 rounded-lg mb-2 transition-colors 
                ${activeSection === option.id 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-100 dark:hover:bg-zinc-700'}
              `}
            >
              {option.icon}
              <span className="ml-3 text-sm text-white">{option.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

// Placeholder content components
const MarketPriceContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Market Prices</h3>
    {/* Add market price table or graph */}
  </div>
);

const WeatherUpdatesContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Weather Updates</h3>
    {/* Add weather forecast details */}
  </div>
);

const FertilizersPesticidesContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Fertilizers & Pesticides</h3>
    {/* Add product recommendations and details */}
  </div>
);

const GovernmentSchemesContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Government Schemes</h3>
    {/* Add scheme listings */}
  </div>
);

const TrainingEducationContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Training & Education</h3>
    {/* Add course and training program details */}
  </div>
);

const CropReportsContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Crop Reports</h3>
    {/* Add crop health and yield reports */}
  </div>
);

const AddCropsContent = () => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
    <h3 className="text-xl font-semibold mb-4 dark:text-white">Add Crops</h3>
    {/* Add form or details to add crops */}
  </div>
);

export default DashboardMain;
