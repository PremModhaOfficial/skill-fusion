import React, { useState } from 'react';
import '../index.css';
import stuTeaImg from '../assets/stuTeaImg.jpg'
import stuTeaImg1 from '../assets/StuTeaImg1.jpg'
import companyLogo from '../assets/name.png';
import sandClock from '../assets/Sandclock.gif'
import competitivePay from '../assets/Competitivepay.gif'
import teach from '../assets/Teach.gif'
import { ChevronDown, ChevronUp } from 'lucide-react';

const Educator: React.FC = () => {
  const stuTeaImage = stuTeaImg
  const stuTeaImage1 = stuTeaImg1
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
        <button className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
          Sign Up
        </button>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ms-4">
              EMPOWER STUDENTS
            </h1>
            <p className="text-xl text-black mb-6 ms-4">
              Earn some handsome amount a month<br />
              doing what you love!
            </p>
            <button className="bg-red-600 text-white px-8 py-3 ms-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
              Start Now!
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src={stuTeaImage}
              alt="Student and teacher"
              className="w-96 h-64 ms-2"
            />
          </div>
        </div>

        <div className="mt-16 me-6 ms-6">
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

      <div className="container mx-auto px-4 py-8 mt-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
        <div className="h-1 w-16 bg-red-600 mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={stuTeaImage1}
              alt="Introduction to OLL"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-lg font-bold mb-6">
              Our mission is to kindle the flame of teaching by establishing a platform that enables educators from diverse backgrounds to disseminate their expertise and wisdom to learners across the globe. We are firmly convinced that every educator possesses the potential to impact and inspire thousands of lives. Our objective is to furnish them with the necessary tools, resources, and support to effectively impart their knowledge and skills. Through this endeavor, we aim to create a global community where the transfer of learning becomes seamless and accessible, fostering intellectual growth and empowerment for both teachers and students alike.
            </p>

            <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">
              Teach with Skill Fusion
            </button>
          </div>
        </div>
      </div>

      <FAQSection />
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

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What does Skill Fusion offer teachers?",
    answer: "Skill Fusion offers teachers a platform to share their expertise, create courses, and reach students globally. It provides tools and resources for effective online teaching."
  },
  {
    question: "What topics should I offer?",
    answer: "You can offer topics in your area of expertise, ranging from academic subjects to practical skills and hobbies. The platform supports a wide variety of subjects to cater to diverse learning needs."
  },
  {
    question: "Who can teach?",
    answer: "Anyone with valuable knowledge or skills can teach on Skill Fusion, including professional educators, industry experts, and passionate hobbyists. We welcome educators from all backgrounds and experiences."
  },
  {
    question: "What does it cost? And how do I get paid?",
    answer: "Creating a course is free. You earn money based on student enrollments and engagement. Payments are typically processed monthly, and we offer competitive rates to ensure our educators are fairly compensated for their valuable contributions."
  }
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow-sm mb-4 bg-white">
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
      <div className="h-1 w-16 bg-red-600 mx-auto mb-8"></div>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Educator;
