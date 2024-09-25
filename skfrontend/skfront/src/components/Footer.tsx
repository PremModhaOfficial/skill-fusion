import React from 'react';
import '../index.css'
import img from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';


const Footer: React.FC = () => {
    const skillfusionlogo = img
    let navigate = useNavigate();
    return (
        <div>
            <footer className="footer px-14">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <i className="footer-info-logo fas fa-hand-holding-heart text-2xl mr-3"></i>
                            <p className="footer-info">"Fostering an unparalleled connection between scholar and mentor, transcending mere instruction."</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h5 className="font-bold mb-4"><i className="fas fa-hand-point-right mr-2"></i>About SkillFusion</h5>
                            <ul>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>About Us</a></li>
                                <li><a href="#"
                                    onClick={() => navigate('/contactus')}
                                    className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Contact Us</a></li>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Blogs</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-4"><i className="fas fa-hand-point-right mr-2"></i>Learn</h5>
                            <ul>
                                <li><a
                                    // href='#'
                                    onClick={(e) => {
                                        navigate('/')
                                    }}
                                    className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Explore All Class</a></li>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Offline Courses</a></li>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Free Courses</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-4"><i className="fas fa-hand-point-right mr-2"></i>Educate</h5>
                            <ul>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Apply Now</a></li>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Educator Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold mb-4"><i className="fas fa-hand-point-right mr-2"></i>Support</h5>
                            <ul>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Help</a></li>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Learner Privacy & Safety</a></li>
                                <li><a href="#" className=" transition-colors"><i className="fas fa-circle-info mr-2"></i>Terms</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center mb-8">
                        <img src={skillfusionlogo} alt="OLL Logo" className="footer-logo" />
                    </div>

                    <div className="flex justify-center social-icons">
                        <a href="#" className="text-3xl  transition-colors"><i className="fab fa-whatsapp"></i></a>
                        <a href="#" className="text-3xl  transition-colors"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-3xl  transition-colors"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-3xl  transition-colors"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-3xl  transition-colors"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )

};

export default Footer;
