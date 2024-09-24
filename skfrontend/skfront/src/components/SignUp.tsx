import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../index.css';
import Gif01 from '../assets/GIF02.gif';

// Define the shape of our form data
interface FormData {
  username: string;
  email: string;
  whatsapp_number: string;
  city: string;
}

const SignUp: React.FC = () => {
  const Gif = Gif01;

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    whatsapp_number: '',
    city: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('YOUR_BACKEND_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        // Handle success (e.g., show a success message, redirect, etc.)
      } else {
        console.error('Error:', response.statusText);
        // Handle errors (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors
    }
  };

  return (
    <div className="signup-page min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="signup-container bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2">
            <img
              src={Gif}
              alt="Registration"
              className="img-fluid object-cover w-full h-full p-4"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">Welcome to SkillFusion</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {(Object.keys(formData) as Array<keyof FormData>).map((key) => (
                  <input
                    key={key}
                    type={key === 'email' ? 'email' : key.includes('number') ? 'tel' : 'text'}
                    className="w-full px-3 py-2 border-black border-2 rounded-md focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                    id={key}
                    placeholder={key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    value={formData[key]}
                    onChange={handleInputChange}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md mt-6 signup-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 
