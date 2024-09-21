import React from 'react';
import '../index.css';
import stuTeaImg from '../assets/StuTeaImg.png'
import companyLogo from '../assets/name.png';
import sandClock from '../assets/Sandclock.gif'
import competitivePay from '../assets/Competitivepay.gif'
import teach from '../assets/Teach.gif'

import Footer from './Footer';



const Educator: React.FC = () => {

  const stuTeaImage = stuTeaImg
  const companyLogoGif = companyLogo

  const teachGif = teach
  const sandClockGIf = sandClock
  const competitivePayGif = competitivePay

  return (
    <div className="min-h-screen bg-sky-100 font-sans">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="">
          <img src={companyLogoGif} alt="Company Logo" className="h-12 ms-6 bg-black" />
        </div>
        <button className="bg-red-600 text-white px-4 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
          Sign Up!
        </button>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ms-4">
              EMPOWER STUDENTS
            </h1>
            <p className="text-xl text-black mb-6 ms-4">
              Earn Rs.20000 a month<br />
              doing what you love!
            </p>
            <button className="bg-red-600 text-white px-8 py-3 ms-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Start Now!
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src= {stuTeaImage}
              alt="Student and teacher"
              className=" w-full h-64 me-6"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg shadow-black overflow-hidden ms-6 me-6">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <FeatureCard
                imageSrc={teachGif}
                title="Teach What You Want"
                description="This flexibility allows educators to use new and creative teaching methods, which can make all the difference"
              />
              <FeatureCard
                imageSrc={sandClockGIf}
                title="Flexible Timings"
                description="It is essential for educators to have the autonomy to manage their own time to understand individual students"
              />
              <FeatureCard
                imageSrc={competitivePayGif}
                title="Competitive Pay"
                description="A higher pay to our educators serves as a recognition of the invaluable role they play in shaping the future of society."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="p-8 text-center border last:border-2 border-gray-200">
      <div className="flex justify-center mb-1">
        <img src={imageSrc} alt={title} className="w-20 h-20 object-contain" />
      </div>
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Educator; 