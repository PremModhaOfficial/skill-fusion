import React from 'react';
import '../index.css';
import Gif01 from '../assets/GIF01.gif';

const Login: React.FC = () => {
  const Gif = Gif01;

  return (
    <div className="page-container min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="login-page flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="w-full md:w-1/2 login-bg-img flex items-center justify-center bg-gray-200">
          <img
            src={Gif}
            alt="Login visual"
            className="object-contain w-full h-auto max-h-64 md:max-h-full login-image-fluid"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white p-8">
          <h1 className="text-3xl font-bold text-center mb-3">Log In to SkillFusion</h1>
          <p className="mb-6 text-gray-600 login-quote2">
            Start leafing your career with our multi-tasking platform
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="e-mail" className="block text-xl text-black font-bold mb-2">
                Enter your e-mail
              </label>
              <input
                type="text"
                className="appearance-none border-black border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow duration-200"
                id="e-mail"
                placeholder="abc@gmail.com"
              />
            </div>
            <button
              type="submit"
              className=" font-bold py-2 px-4 rounded w-full login-btn"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;