import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const EduForm1 = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');

  return (
    <div className="min-h-screen eduform-page  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <form className="bg-white shadow-xl shadow-black rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Basic Info</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <label htmlFor="educatorName" className="block text-lg font-medium text-gray-700 mb-2">Educator Name *</label>
              <input type="text" id="educatorName" name="educatorName" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="Raja" />
            </div>
            <div>
              <label htmlFor="expertise" className="block text-lg font-medium text-gray-700 mb-2">Your area of expertise *</label>
              <select id="expertise" name="expertise" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg">
                <option value="">Select an option</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full h-12 rounded-md border-gray-300 bg-gray-100 text-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg cursor-not-allowed" 
                placeholder="kagoka6377@exweme.com" 
                value="kagoka6377@exweme.com"
                readOnly
              />
              <p className="mt-1 text-sm text-gray-500">Email cannot be edited</p>
            </div>
            <div>
              <label htmlFor="resume" className="block text-lg font-medium text-gray-700 mb-2">Upload Resume *</label>
              <input type="file" id="resume" name="resume" className="mt-1 block w-full h-12 text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/4">
                <label htmlFor="countryCode" className="block text-lg font-medium text-gray-700 mb-2">Code</label>
                <select id="countryCode" name="countryCode" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg">
                  <option value="+91">🇮🇳 +91</option>
                </select>
              </div>
              <div className="w-3/4">
                <label htmlFor="mobile" className="block text-lg font-medium text-gray-700 mb-2">Mobile (This is only used by Skill Fusion)</label>
                <input type="tel" id="mobile" name="mobile" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="7428730894" />
              </div>
            </div>
            <div>
              <label htmlFor="aadhar" className="block text-lg font-medium text-gray-700 mb-2">Upload Picture with Aadhar *</label>
              <input type="file" id="aadhar" name="aadhar" className="mt-1 block w-full h-12 text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <div className="relative">
              <label htmlFor="dateOfBirth" className="block text-lg font-medium text-gray-700 mb-2">Date of Birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="additionalDocs" className="block text-lg font-medium text-gray-700 mb-2">Add Documents, Videos, Portfolios and More</label>
              <input type="file" id="additionalDocs" name="additionalDocs" multiple className="mt-1 block w-full h-12 text-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <div>
              <label htmlFor="pincode" className="block text-lg font-medium text-gray-700 mb-2">Pincode *</label>
              <input type="text" id="pincode" name="pincode" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="Pincode" />
            </div>
            <div>
              <label htmlFor="location" className="block text-lg font-medium text-gray-700 mb-2">Location *</label>
              <input type="text" id="location" name="location" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" placeholder="Location" />
            </div>
            <div>
              <label htmlFor="workProfileLink" className="block text-lg font-medium text-gray-700 mb-2">Work Profile Link</label>
              <input type="url" id="workProfileLink" name="workProfileLink" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg" />
            </div>
            <div>
              <label htmlFor="teachingExperience" className="block text-lg font-medium text-gray-700 mb-2">Teaching Experience (years) *</label>
              <select id="teachingExperience" name="teachingExperience" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg">
                <option value="">Teaching Experience in Years</option>
                <option value="0-1">0-1</option>
                <option value="1-2">1-2</option>
                <option value="2-3">2-3</option>
                <option value="3-4">3-4</option>
                <option value="4-5">4-5</option>
                <option value="5-6">5-6</option>
                <option value="6-7">6-7</option>
                <option value="7-8">7-8</option>
                <option value="8-9">8-9</option>
                <option value="9-10">9-10</option>
                <option value="10+">10+</option>
              </select>
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <button type="submit" className="px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EduForm1;