import React from 'react';
import '../index.css';
import logoImg from '../assets/name.png';


const Educator: React.FC = () => {
  return (
    <div className="min-h-screen bg-sky-100 font-sans">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="">
          <img src=" " alt="Company Logo" className="h-12" />
        </div>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
          Sign in
        </button>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              EMPOWER STUDENTS
            </h1>
            <p className="text-xl text-black mb-6">
              Earn Rs.20000 a month<br />
              doing what you love!
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Start Now!
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="Student and teacher"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <FeatureCard
                imageSrc=" "
                title="Teach What You Want"
                description="This flexibility allows educators to use new and creative teaching methods, which can make all the difference"
              />
              <FeatureCard
                imageSrc=" "
                title="Flexible Timings"
                description="It is essential for educators to have the autonomy to manage their own time to understand individual students"
              />
              <FeatureCard
                imageSrc=" "
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
    <div className="p-8 text-center border-r last:border-r-0 border-gray-200">
      <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Educator;