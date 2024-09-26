import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface TeamMember {
  name: string;
  mobile: string;
  email: string;
  university: string;
  passingYear: string;
}

const Hackout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [teamName, setTeamName] = useState<string>('');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', mobile: '', email: '', university: '', passingYear: '' },
    { name: '', mobile: '', email: '', university: '', passingYear: '' },
    { name: '', mobile: '', email: '', university: '', passingYear: '' },
    { name: '', mobile: '', email: '', university: '', passingYear: '' },
  ]);

  const handleInputChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const validateRequiredFields = () => {
    // Ensure that the first two members have all their required fields filled
    const requiredMembers = teamMembers.slice(0, 2);
    return requiredMembers.every(
      (member) =>
        member.name.trim() &&
        member.mobile.trim() &&
        member.email.trim() &&
        member.university.trim() &&
        member.passingYear.trim()
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!teamName.trim()) {
      alert('Please enter the team name.');
      return;
    }
    if (!validateRequiredFields()) {
      alert('Please fill out the details for at least two team members.');
      return;
    }

    console.log('Team Name:', teamName);
    console.log('Team Members:', teamMembers);
    setIsModalOpen(false);
    setIsAlertOpen(true);
  };

  return (
    <>
      <a
        href="#register"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
        className="bg-red-600 text-white  px-4 flex justify-center items-center w-full hover:bg-red-700 transition-colors duration-300 cursor-pointer"
      >
        <div className="text-lg font-semibold text-center sticky top-10 z-11">
          Register for HackOut'24: The Ultimate Hackathon (Ahmedabad, Gujarat) on 25 and 26 October 
        </div>
      </a>

      {/* Fullscreen Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-30 overflow-auto">
          <div className="min-h-screen flex items-start justify-center py-6">
            <div className="bg-white w-full max-w-4xl p-6 rounded-lg relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-2xl font-extrabold text-gray-800 hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>

              <h2 className="text-2xl text-center font-bold mb-4">Team Registration</h2>
              <div>
                <p className='text-xl text-back font-bold'>Important Instructions:</p>
                <p className=' text-back font-bold'>1) Please enter all the details.</p>
                <p className=' text-back font-bold'>2) Two members per team are compulsory</p>
                <p className=' text-back font-bold'>3) * All fields are required</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                {/* Team Name Input */}
                <div className="space-y-4">
                  <label className="font-semibold">
                    Team Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="border p-2 w-full"
                    placeholder="Enter Team Name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />
                </div>

                {teamMembers.map((member, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold">
                      {index === 0
                        ? 'Team Leader'
                        : `Team Member ${index + 1}`}{' '}
                      {index < 2 && <span className="text-red-500">*</span>}
                    </h3>

                    <input
                      className="border p-2 w-full"
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                      required={index < 2} // Required only for the first two members
                    />

                    <input
                      className="border p-2 w-full"
                      placeholder="Mobile Number"
                      value={member.mobile}
                      onChange={(e) => handleInputChange(index, 'mobile', e.target.value)}
                      required={index < 2} // Required only for the first two members
                    />

                    <input
                      className="border p-2 w-full"
                      placeholder="Email"
                      type="email"
                      value={member.email}
                      onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                      required={index < 2} // Required only for the first two members
                    />

                    <input
                      className="border p-2 w-full"
                      placeholder="University Name"
                      value={member.university}
                      onChange={(e) => handleInputChange(index, 'university', e.target.value)}
                      required={index < 2} // Required only for the first two members
                    />

                    <select
                      className="border p-2 w-full"
                      value={member.passingYear}
                      onChange={(e) => handleInputChange(index, 'passingYear', e.target.value)}
                      required={index < 2} // Required only for the first two members
                    >
                      <option value="">Select Passing Year</option>
                      {[2024, 2025, 2026, 2027].map((year) => (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Dialog>

      {isAlertOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
            <p>Your team has been successfully registered for HackOut'24. Good luck!</p>
            <button
              className="bg-blue-500 text-white p-2 mt-4"
              onClick={() => setIsAlertOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hackout;
