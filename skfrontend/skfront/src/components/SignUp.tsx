import React from 'react';
import '../index.css'
import Gif01 from '../assets/GIF02.gif'

const SignUp: React.FC = () => {
    const Gif = Gif01
    // let login_requirements = [
    //     ["first_name", "text", "Enter your first name"],
    //     ["last_name", "text", "Enter your last name"],
    //     ["email", "email", "Enter your email"],
    //     ["username", "text", "Enter your username"],
    //     ["password", "password", "Enter your password"],
    // ]

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
                        <form>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border-black border-2 rounded-md  focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                                    id="student_name"
                                    placeholder="Student's Full Name"
                                />
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md f focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                                    id="email"
                                    placeholder="Email"
                                />
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md  focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                                    id="parent_name"
                                    placeholder="Parent's Name"
                                />
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md  focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                                    id="mobile_number"
                                    placeholder="Mobile Number"
                                />
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md  focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                                    id="whatsapp_number"
                                    placeholder="WhatsApp Number"
                                />
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md  focus:ring-2 focus:ring-blue-500 leading-tight focus:outline-none focus:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow"
                                    id="city"
                                    placeholder="City"
                                />
                            </div>
                            <button
                                type="submit"
                                className=" w-full py-2 px-4 rounded-md  mt-6 signup-btn"
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


