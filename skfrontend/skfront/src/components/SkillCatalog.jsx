import React from 'react';
import { FaPalette, FaCogs, FaLaptopCode, FaLifeRing, FaBook, FaTheaterMasks, FaFlask, FaGlobe } from 'react-icons/fa'; // For icons

const SkillCatalog = () => {
  // URL mapping for skills
  const skillUrls = {
    Calligraphy: '/calligraphy',
    Craft: '/craft',
    Drawing: '/drawing',
    Painting: '/painting',
    Sketching: '/sketching',
    Traditional: '/traditional',
    'Data Science': '/data-science',
    'Database Design and Development': '/database-design',
    'Game Development': '/game-development',
    'Mobile Development': '/mobile-development',
    'No-Code Development': '/no-code-development',
    'Programming Languages': '/programming-languages',
    Robotics: '/robotics',
    'Web Development': '/web-development',
    '3D Animation': '/3d-animation',
    Cinematography: '/cinematography',
    'Design Thinking': '/design-thinking',
    'Game Design': '/game-design',
    'Graphic Design': '/graphic-design',
    Illustrations: '/illustrations',
    NFT: '/nft',
    Photography: '/photography',
    'User Experience Designing': '/ux-designing',
    'Video Editing': '/video-editing',
    Foundations: '/foundations',
    Handwriting: '/handwriting',
    Reading: '/reading',
    Speaking: '/speaking',
    Writing: '/writing',
    Communication: '/communication',
    Cooking: '/cooking',
    'Critical Thinking': '/critical-thinking',
    Entrepreneurship: '/entrepreneurship',
    Abacus: '/abacus',
    Advanced: '/advanced',
    Astronomy: '/astronomy',
    'Basic Concepts': '/basic-concepts',
    Olympiad: '/olympiad',
    Science: '/science',
    'Vedic Maths': '/vedic-maths',
    Chinese: '/chinese',
    Cultures: '/cultures',
    French: '/french',
    German: '/german',
    Italian: '/italian',
    Japanese: '/japanese',
    Korean: '/korean',
    'Sign Language': '/sign-language',
    Spanish: '/spanish',
  };

  return (
    <div className="bg-white pl-36 pr-24">
      <h1 className="text-3xl font-bold mb-6">Skill Catalog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <span className="block bg-red-500 h-2 rounded-lg w-10 mb-2"></span><br/>
        {/* Art & Craft Section */}
        <div className="space-y-3 pl-7">
          <div className="flex items-center space-x-2">
            <FaPalette className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">Art & Craft</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Calligraphy', 'Craft', 'Drawing', 'Painting', 'Sketching', 'Traditional'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* Coding and Technology Section */}
        <div className="space-y-4 pr-16">
          <div className="flex items-center space-x-2">
            <FaCogs className="text-4xl text-gray-900" />
            <h2 className="text-2xl font-semibold">Coding and Technology</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {[
              'Data Science',
              'Database Design and Development',
              'Game Development',
              'Mobile Development',
              'No-Code Development',
              'Programming Languages',
              'Robotics',
              'Web Development',
            ].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-950 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* Digital Art Section */}
        <div className="space-y-4 pl-7 pt-5">
          <div className="flex items-center space-x-2">
          <FaLaptopCode className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">Digital Art</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['3D Animation', 'Cinematography', 'Design Thinking', 'Game Design', 'Graphic Design', 'Illustrations', 'NFT', 'Photography', 'User Experience Designing', 'Video Editing'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* English Section */}
        <div className="space-y-4 pl-3 pt-5">
          <div className="flex items-center space-x-2">
            <FaBook className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">English</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Foundations', 'Handwriting', 'Reading', 'Speaking', 'Writing'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* Life Skills Section */}
        <div className="space-y-3 pl-7 pt-5">
          <div className="flex items-center space-x-2">
            <FaLifeRing className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">Life Skills</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Communication', 'Cooking', 'Critical Thinking', 'Entrepreneurship', 'Finance', 'Personality Development', 'Presentation', 'Sports', 'Yoga & Meditation'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* Performing Arts Section */}
        <div className="space-y-3 pl-7 pt-5">
          <div className="flex items-center space-x-2">
            <FaTheaterMasks className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">Performing Arts</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Acting', 'Dance', 'Games', 'Musical Instruments', 'Vocal Music'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* Maths & Science Section */}
        <div className="space-y-3 pl-7 pt-5">
          <div className="flex items-center space-x-2">
            <FaFlask className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">Maths & Science</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Abacus', 'Academics', 'Advanced', 'Astronomy', 'Basic Concepts', 'Olympiad', 'Science', 'Vedic Maths'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>

        {/* World Languages Section */}
        <div className="space-y-3 pl-7 pt-5">
          <div className="flex items-center space-x-2">
            <FaTheaterMasks className="text-3xl text-gray-900" />
            <h2 className="text-2xl font-semibold">World Languages</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {['Chinese', 'Cultures', 'French', 'German', 'Italian', 'Japanese', 'Korean', 'Sign Language', 'Spanish'].map((skill) => (
              <a
                key={skill}
                href={skillUrls[skill]} // Navigate to the corresponding URL
                className="px-2 py-0 border rounded-full text-sm font-medium border-gray-900 hover:text-cyan-700 transition-all duration-300"
              >
                {skill}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SkillCatalog;
