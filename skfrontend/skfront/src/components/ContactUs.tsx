import React from 'react';
import Gif01 from '../assets/GIF03.gif'

const ContactUs: React.FC = () => {
    const Gif = Gif01
    return (
        <div className="min-h-screen flex items-center justify-center ms-10 me-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <img
                            src={Gif}
                            alt="Person typing on laptop"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 contact-info-box">
                        <h1 className="text-4xl font-bold mb-6 ">Contact us</h1>
                        <h2 className="text-2xl font-semibold mb-2">Visit us</h2>
                        <p className="mb-4 contact-info">
                            A-402-406, Titanium Business Park, <br />
                            Bopal-Ambli Road, <br />
                            Ahmedabad, <br />
                            Pin - 300054
                        </p>
                        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                        <p>
                            <a href="mailto:skillfusion209@gmail.com" className="text-blue-600 hover:text-blue-800 text-lg">
                                <i className="fas fa-envelope mr-2"></i>skillfusion209@gmail.com
                            </a>
                            <br />
                            <a href="tel:+917043343119" className="text-blue-600 hover:text-blue-800 text-lg">
                                <i className="fas fa-phone mr-2"></i>+91 70433 43119
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

