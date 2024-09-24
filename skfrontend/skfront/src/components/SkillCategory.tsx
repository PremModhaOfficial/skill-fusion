import React from 'react';
import { Paintbrush, Monitor, Code, BookOpen, Handshake, TriangleRight } from 'lucide-react';

interface Skill {
  name: string;
  subskills: string[];
}

interface SkillCategoryProps {
  icon: React.ReactNode;
  name: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, name, skills }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      {icon}
      <h2 className="text-xl font-bold ml-2">{name}</h2>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div key={skill.name} className="group">
          <div className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300 group-hover:cursor-pointer group-hover:bg-orange-500">
            {skill.name}
          </div>
          <div className="hidden group-hover:flex flex-wrap gap-1 mt-1">
            {skill.subskills.map((subskill) => (
              <span key={subskill} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                {subskill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillCatalog: React.FC = () => {
  const skillCategories = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      name: "Art & Craft",
      skills: [
        { name: "Calligraphy", subskills: [] },
        { name: "Craft", subskills: [] },
        { name: "Drawing", subskills: [] },
        { name: "Painting", subskills: [] },
        { name: "Sketching", subskills: [] },
        { name: "Traditional", subskills: [] },
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      name: "Digital Arts",
      skills: [
        { name: "3D & Animation", subskills: [] },
        { name: "Cinematography", subskills: [] },
        { name: "Design thinking", subskills: [] },
        { name: "Game Design", subskills: [] },
        { name: "Graphic Design and Illustrations", subskills: [] },
        { name: "NFT", subskills: [] },
        { name: "Photography", subskills: [] },
        { name: "User Experience Design", subskills: [] },
        { name: "Video Editing", subskills: [] },
      ],
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Coding and Technology",
      skills: [
        { name: "Data Science", subskills: [] },
        { name: "Database Design and Development", subskills: [] },
        { name: "Game Development", subskills: [] },
        { name: "Mobile Development", subskills: [] },
        { name: "No-Code Development", subskills: [] },
        { name: "Programming Languages", subskills: [] },
        { name: "Robotics", subskills: [] },
        { name: "Web Development", subskills: [] },
      ],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      name: "English",
      skills: [
        { name: "Advanced", subskills: [] },
        { name: "Foundations", subskills: [] },
        { name: "Handwriting", subskills: [] },
        { name: "Reading", subskills: [] },
        { name: "Speaking", subskills: [] },
        { name: "Writing", subskills: [] },
      ],
    },
    {
        icon: <Handshake className="w-6 h-6" />,
        name: "Life Skills",
        skills: [
          { name: "Communication", subskills: [] },
          { name: "Cooking", subskills: [] },
          { name: "Critical Thinking", subskills: [] },
          { name: "Entrepreneurship", subskills: [] },
          { name: "Finance", subskills: [] },
          { name: "Leadership", subskills: [] },
          { name: "Personality Development", subskills: [] },
          { name: "Presentation", subskills: [] },
          { name: "Public Speaking", subskills: [] },
          { name: "Yoga and Meditation", subskills: [] },

        ],
    },
    {
        icon: <TriangleRight className="w-6 h-6" />,
        name: "Maths and Science",
        skills: [
          { name: "Abascus", subskills: [] },
          { name: "Academics", subskills: [] },
          { name: "Advanced", subskills: [] },
          { name: "Astronomy", subskills: [] },
          { name: "Basic Concepts", subskills: [] },
          { name: "Olympaid", subskills: [] },
          { name: "Science", subskills: [] },
          { name: "Vedic Maths", subskills: [] },
        ],
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold mb-2">Skill Fusion's Skill Catalog</h2>
      <div className="h-2 w-12 bg-red-700 mb-6 rounded-md"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-2 me-2">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.name}
            icon={category.icon}
            name={category.name}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCatalog;