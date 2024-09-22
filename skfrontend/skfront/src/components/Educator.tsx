// import React from 'react';
// import '../index.css';
// import stuTeaImg from '../assets/StuTeaImg.png'
// import stuTeaImg1 from '../assets/StuTeaImg1.jpg'
// import companyLogo from '../assets/name.png';
// import sandClock from '../assets/Sandclock.gif'
// import competitivePay from '../assets/Competitivepay.gif'
// import teach from '../assets/Teach.gif'


// const Educator: React.FC = () => {

//   const stuTeaImage = stuTeaImg
//   const stuTeaImage1 = stuTeaImg1
//   const companyLogoGif = companyLogo

//   const teachGif = teach
//   const sandClockGIf = sandClock
//   const competitivePayGif = competitivePay

//   return (
//     <div className="min-h-screen bg-sky-100 font-sans">
//       <header className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="">
//           <img src={companyLogoGif} alt="Company Logo" className="h-12 ms-6 bg-black" />
//         </div>
//         <button className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
//           Sign Up
//         </button>
//       </header>

//       <main className="container mx-auto px-6 py-12">
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <div className="lg:w-1/2 mb-8 lg:mb-0">
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 ms-4">
//               EMPOWER STUDENTS
//             </h1>
//             <p className="text-xl text-black mb-6 ms-4">
//               Earn some handsome amount a month<br />
//               doing what you love!
//             </p>
//             <button className="bg-red-600 text-white px-8 py-3 ms-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
//               Start Now!
//             </button>
//           </div>
//           <div className="lg:w-1/2">
//             <img
//               src= {stuTeaImage}
//               alt="Student and teacher"
//               className=" w-full h-64 me-6"
//             />
//           </div>
//         </div>

//         <div className="mt-16">
//           <div className="bg-white rounded-lg shadow-lg shadow-black overflow-hidden ms-6 me-6">
//             <div className="grid grid-cols-1 md:grid-cols-3">
//               <FeatureCard
//                 imageSrc={teachGif}
//                 title="Teach What You Want"
//                 description="This flexibility allows educators to use new and creative teaching methods, which can make all the difference"
//               />
//               <FeatureCard
//                 imageSrc={sandClockGIf}
//                 title="Flexible Timings"
//                 description="It is essential for educators to have the autonomy to manage their own time to understand individual students"
//               />
//               <FeatureCard
//                 imageSrc={competitivePayGif}
//                 title="Competitive Pay"
//                 description="A higher pay to our educators serves as a recognition of the invaluable role they play in shaping the future of society."
//               />
//             </div>
//           </div>
//         </div>
//       </main>

//       <div className="container mx-auto px-4 py-8 mt-4">
//         <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
//         <div className="h-1 w-16 bg-red-600 mx-auto mb-8"></div>
      
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/2">
//             <img 
//               src={stuTeaImage1} 
//               alt="Introduction to OLL" 
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
        
//           <div className="w-full md:w-1/2">
//             <p className="text-lg font-bold mb-6">
//               Our mission is to kindle the flame of teaching by establishing a platform that enables educators from diverse backgrounds to disseminate their expertise and wisdom to learners across the globe. We are firmly convinced that every educator possesses the potential to impact and inspire thousands of lives. Our objective is to furnish them with the necessary tools, resources, and support to effectively impart their knowledge and skills. Through this endeavor, we aim to create a global community where the transfer of learning becomes seamless and accessible, fostering intellectual growth and empowerment for both teachers and students alike.
//             </p>
          
//             <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">
//               Teach with Skill Fusion
//             </button>
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };


// interface FeatureCardProps {
//   imageSrc: string;
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
//   return (
//     <div className="p-8 text-center border last:border-2 border-gray-200">
//       <div className="flex justify-center mb-1">
//         <img src={imageSrc} alt={title} className="w-20 h-20 object-contain" />
//       </div>
//       <h3 className="text-xl font-semibold ">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// };

// export default Educator; 


import React, { useState } from 'react';
import '../index.css';
import stuTeaImg from '../assets/StuTeaImg.png'
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
    answer: "Skill Fusion presents educators with a comprehensive platform designed to empower them to share their wealth of knowledge and expertise with a worldwide audience. This platform allows teachers to not only create and design their own courses but also to engage with students from diverse regions, cultures, and backgrounds across the globe. In addition to providing a global reach, Skill Fusion equips educators with a suite of advanced tools and resources, specifically curated to enhance the quality of online teaching. These resources are tailored to support effective teaching methodologies, ensuring that educators can deliver their content in an engaging and impactful manner, thereby fostering an enriching learning environment for all students"
  },
  {
    question: "What topics should I offer?",
    answer: "On this platform, you have the opportunity to offer a wide array of topics within your field of expertise, spanning from traditional academic disciplines to more hands-on practical skills and hobbies. Whether you specialize in subjects like mathematics, science, or literature, or prefer to teach creative skills such as photography, cooking, or crafting, the platform is designed to accommodate a broad spectrum of interests and knowledge areas. By supporting a vast variety of subjects, the platform ensures that it caters to the diverse learning needs and passions of students from different walks of life. This versatility allows educators to share their unique knowledge while helping learners explore a wide range of topics that align with their personal or professional growth."
  },
  {
    question: "Who can teach?",
    answer: "Skill Fusion welcomes individuals from all backgrounds who possess valuable knowledge or skills, offering them the chance to teach and share their expertise with a global audience. Whether you're a seasoned professional educator, an industry expert with specialized experience, or a passionate hobbyist with unique skills, the platform provides an inclusive environment for you to make an impact. By embracing educators from a variety of fields and levels of experience, Skill Fusion creates a rich and diverse learning ecosystem. This inclusivity ensures that learners can benefit from the wisdom and insights of professionals as well as those who are deeply passionate about their craft, fostering an educational space where everyone has the opportunity to contribute and thrive."
  },
  {
    question: "What does it cost? And how do I get paid?",
    answer: "On Skill Fusion, creating a course comes at no cost to educators, allowing you to share your expertise freely while earning revenue based on student enrollments and engagement with your content. The more students that enroll and actively participate in your courses, the more you stand to gain financially. Payments are generally processed on a monthly basis, ensuring timely compensation for your efforts. Additionally, we offer competitive payment rates that reflect the value of your contributions, ensuring that educators are fairly rewarded for the knowledge and skills they impart. This structure encourages a mutually beneficial environment where educators can focus on delivering high-quality content while being confident in the fair and reliable compensation they receive."
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
        <span className="font-bold text-xl">{item.question}</span>
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
      <div className="w-full mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Educator;