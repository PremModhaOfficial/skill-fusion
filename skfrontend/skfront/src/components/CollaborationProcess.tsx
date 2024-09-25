import React from 'react';

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

export default CollaborationProcess;