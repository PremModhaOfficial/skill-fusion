import React, { useState } from 'react';
import Footer from './Footer';
import video from '../assets/IntroVideo.mp4'

const CollaborationProcess: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const steps = [
    {
      number: 1,
      title: 'Onboarding Meeting',
      description: 'OLL initiates the partnership with a structured onboarding meeting - to kickstart the Partnership',
    },
    {
      number: 2,
      title: 'Implementation Timeline',
      description: "We develop a customized timeline that aligns with the school's academic calendar so that the school can smoothly integrate OLL's course.",
    },
    {
      number: 3,
      title: 'Weekly Reports',
      description: "These reports include valuable insights into the progress of the courses, students' performance, photos and videos of classroom activities",
    },
  ];

  return (
    <div className="mt-8 mb-8">
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
              <button
                onClick={onOpenModal}
                className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 text-sm"
              >
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    principalName: '',
    city: '',
    email: '',
    meetingDate: '',
    meetingTime: '9:00 AM',
  });

  const times = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCloseModal();
    setSuccessModalOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

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
            <button
              onClick={handleOpenModal}
              className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 self-start"
            >
              Book a Meeting
            </button>
          </div>
        </div>

        {/* Collaboration Process */}
        <CollaborationProcess onOpenModal={handleOpenModal} />
      </div>
      <Footer />

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Book a Meeting</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                value={formData.schoolName}
                onChange={handleInputChange}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="principalName"
                placeholder="Principal Name"
                value={formData.principalName}
                onChange={handleInputChange}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="date"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleInputChange}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <select
                name="meetingTime"
                value={formData.meetingTime}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border rounded"
              >
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-600 text-white py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Meeting booked successfully!</h3>
            <div className="flex justify-end">
              <button
                onClick={handleCloseSuccessModal}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default School;
