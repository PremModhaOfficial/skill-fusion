import React from 'react';
import '../index.css'
import img from '../assets/logo.png'


const Footer: React.FC = () => { 
    const skillfusionlogo = img    
  return (
    <div>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-hand-holding-heart footer-info-logo"></i>
                            <p className=" footer-info">"Fostering an unparalleled connection between scholar and mentor, transcending mere instruction."</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3">
                        <h5><i className="fa-solid fa-hand-point-right"></i> About SkillFusion</h5>
                        <ul>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> About Us</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Contact Us</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Blogs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <h5> <i className="fa-solid fa-hand-point-right"></i> Learn</h5>
                        <ul>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Explore All Class</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Offline Courses</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Free Courses</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <h5> <i className="fa-solid fa-hand-point-right"></i> Educate</h5>
                        <ul>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Apply Now</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Educator Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3">
                        <h5> <i className="fa-solid fa-hand-point-right"></i> Support</h5>
                        <ul>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Help</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Learner Privacy & Safety</a></li>
                            <li><a href="#"> <i className="fa-solid fa-circle-info"></i> Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3 text-center">
                            <img src={skillfusionlogo} alt="OLL Logo" className="footer-logo" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-3">
                            <div className="social-icons text-center">
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <small>Copyright © 2024 Clone Futura Live Solutions Private Ltd</small>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )

};

export default Footer;
