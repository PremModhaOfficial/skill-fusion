import React from 'react';
import myImage from '../assets/SkillFusion.png';
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white flex flex-col md:flex-row items-center justify-between px-4 py-2">

        {/* Logo, Categories and Search Section */}
        <div className="flex items-center space-x-6">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center px-5">
            <img src={myImage} alt="SkillFusion Logo" className="h-11 w-20" />
          </div>

          {/* Categories dropdown */}
          <div className="relative group">
            <span className="cursor-pointer font-bold text-xl">
              Categories
            </span>
            <div id="dropdown"
              className="absolute left-0 mt-2 w-full bg-white rounded-lg border border-gray-300 shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-out sm:w-auto sm:left-auto sm:right-0"
              style={{ maxWidth: '900%', overflowY: 'auto' }}>
              <ul className="py-2 font-sans font-semibold text-sm max-w-6xl">
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400 hover:cursor-pointer">
                  <a href="/art-craft" className='flex-grow whitespace-nowrap'>Art & Craft </a>
                  <span className="after:content-['>'] after:font-bold  ml-36 "></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/coding-technology" className='flex-grow whitespace-nowrap'>Coding and Technology</a>
                  <span className="after:content-['>'] after:font-bold"></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/digital-arts" className='flex-grow whitespace-nowrap'>Digital Arts</a>
                  <span className="after:content-['>'] after:font-bold  "></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/english" className='flex-grow whitespace-nowrap'>English</a>
                  <span className="after:content-['>'] after:font-bold   "></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/life-skills" className='flex-grow whitespace-nowrap'>Life Skills</a>
                  <span className="after:content-['>'] after:font-bold  "></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/maths-science" className='flex-grow whitespace-nowrap'>Maths & Science</a>
                  <span className="after:content-['>'] after:font-bold "></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/performing-arts" className='flex-grow whitespace-nowrap'>Performing Arts</a>
                  <span className="after:content-['>'] after:font-bold  "></span>
                </li>
                <li className="px-4 py-1 hover:bg-gray-100 flex justify-between hover:text-blue-400">
                  <a href="/world-languages" className='flex-grow whitespace-nowrap'>World Languages</a>
                  <span className="after:content-['>'] after:font-bold "></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Search Section */}
          <form className="w-[180px]">
            <div className="relative flex items-center border border-gray-950 rounded-full px-2 py-1 h-8 focus-within:border-white focus-within:shadow-md focus-within:shadow-gray-500">
              <input
                type="search"
                placeholder="Find Classes"
                className="w-full pr-8 pl-2 rounded-full outline-none focus:ring-opacity-50"
              />
              <button className="absolute right-2 text-gray-500 hover:text-blue-500">
                <IoSearch />
              </button>
            </div>
          </form>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-2">
          <span className="text-sm">I'm a</span>
          <button className="px-4 py-1 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">School</button>
          <button className="px-4 py-1 bg-gray-200 text-black rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Educator</button>
          <button className="px-4 py-1 bg-red-600 text-white rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Learner</button>
        </div>
      </nav>

      {/* Red Banner */}
      <div className="bg-red-600 text-white text-center">
        <a href="#" className="text-lg font-bold hover:underline">
          Register for Skill Titans Season 2
        </a>
      </div>
      <br />
      <br />
    </>
  );
};

export default Navbar;
