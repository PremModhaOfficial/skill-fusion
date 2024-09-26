import React from 'react';
import Video from '../assets/IntroVideo.mp4'

const CollaborationProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Onboarding Meeting",
      description: "OLL initiates the partnership with a structured onboarding meeting - to kickstart the Partnership"
    },
    {
      number: 2,
      title: "Implementation Timeline",
      description: "We develop a customized timeline that aligns with the school's academic calendar so that the school can smoothly integrate OLL's course."
    },
    {
      number: 3,
      title: "Weekly Reports",
      description: "These reports include valuable insights into the progress of the courses, students' performance, photos and videos of classroom activities"
    }
  ];

  return (
    
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">We work very closely with the Schools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-900 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-2">
                {step.number}.
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{step.description}</p>
            {step.number === 1 && (
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 text-sm">
                Book a Meeting
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const School: React.FC = () => {

  const video = Video
  
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row">
          {/* Video section */}
          <div className="w-full md:w-1/2 p-4">
            <video 
              src={video}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">
              India's No.<span className="text-purple-600">1</span> Skill Programs
            </h2>
            <div className="flex justify-between mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">173+</p>
                <p className="text-gray-600 text-2xl font-bold">Schools</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">1.2 Lac+</p>
                <p className="text-gray-600 text-2xl font-bold">Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">94+</p>
                <p className="text-gray-600 text-2xl font-bold">Cities</p>
              </div>
            </div>
            <button className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 self-start">
              Book a Meeting
            </button>
          </div>
        </div>
        
        {/* Collaboration Process */}
        <CollaborationProcess />
      </div>
    </div>
  );
};

export default School;