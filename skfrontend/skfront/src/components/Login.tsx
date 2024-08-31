import React from 'react';
import '../index.css'
import Gif01 from '../assets/GIF01.gif'


const Login: React.FC = () => {
    const Gif = Gif01;
    
    return (
        

    <div className="page-container min-h-screen flex items-center justify-center bg-gray-100">
      <div className="login-page flex shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block w-1/2 login-bg-img">
          <img
            src={Gif}
            alt="Login visual"
            className="object-cover h-full w-full login-image-fluid"
          />
        </div>
        <div className="w-full md:w-1/2 bg-white p-8">
          <h1 className="text-2xl font-bold mb-2">LogIn</h1>
          <p className="mb-6 text-gray-600 login-quote2">Start leafing your career with our multi-tasking platform</p>
          <form>
            <div className="mb-4">
              <label htmlFor="e-mail" className="block text-gray-700 text-sm font-bold mb-2">
                Enter your e-mail
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="e-mail"
                placeholder="abc@gmail.com"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 text-white hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Login;


