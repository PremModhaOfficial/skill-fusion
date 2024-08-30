import React from 'react';
import Gif01 from '../assets/GIF03.gif'

const ContactUs: React.FC = () => {
  const Gif = Gif01
  return (
    <div className="contact-page container-fluid min-vh-100 d-flex">
    <div className="contact-container container">
      <div className="row">
        <div className="col-md-6 ">
          <img
            src={Gif}
            alt="Person typing on laptop"
            className="contact-img-fluid"
          />
        </div>
        <div className="col-md-6 contact-info-box">
          <h1 className="display-4 mb-4 contact-title">Contact us</h1>
          <h2 className="mb-2 contact-info">Visit us</h2>
          <p className="justify-content-start">
            A-402-406, Titanium Business Park, <br />
            Bopal-Ambli Road, <br />
            Ahmedabad, <br />
            Pin - 300054
          </p>
          <h2 className="mb-2 contact-info">Contact</h2>
          <p>
            <a href="mailto:skillfusion209@gmail.com" className="text-decoration-none fs-6"><i className="fa-solid fa-envelope me-1"></i>skillfusion209@gmail.com</a><br />
            <a href="tel:+917043343119" className="text-decoration-none fs-6"><i className="fa-solid fa-phone me-1"></i>+91 70433 43119</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;