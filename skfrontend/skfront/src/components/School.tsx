import React from 'react';
import CollaborationProcess from './CollaborationProcess';

const SchoolInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="mb-6 md:mb-0 md:mr-6 w-full md:w-1/2">
          <img src="/api/placeholder/400/300" alt="School event" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">India's No.<span className="text-purple-600">1</span> Skill Programs</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">173+</p>
              <p className="text-gray-600">Schools</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">1.2 Lac+</p>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">94+</p>
              <p className="text-gray-600">Cities</p>
            </div>
          </div>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
            Book a Meeting
          </button>
        </div>
      </div>
      <CollaborationProcess />
    </div>
  );
};

export default SchoolInfo;