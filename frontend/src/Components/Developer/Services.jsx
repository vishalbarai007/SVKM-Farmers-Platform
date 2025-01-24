import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Services Provided by Us</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[22%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service 1</h3>
            <p className="text-gray-600">Description of the first service offered. Provide brief details about what it includes.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[22%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service 2</h3>
            <p className="text-gray-600">Description of the second service offered. Provide brief details about what it includes.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[22%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service 3</h3>
            <p className="text-gray-600">Description of the third service offered. Provide brief details about what it includes.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[22%]">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service 4</h3>
            <p className="text-gray-600">Description of the fourth service offered. Provide brief details about what it includes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
