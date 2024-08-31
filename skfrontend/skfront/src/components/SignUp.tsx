import React from 'react';
import '../index.css'
import Gif01 from '../assets/GIF02.gif'

const SignUp: React.FC = () => {
    const Gif = Gif01

  return (
    <div className="signup-page container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="signup-container card shadow-lg border border-dark border-2">
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img
              src={Gif}
              alt="Registration"
              className="img-fluid h-100 p-4 object-fit-cover"
            />
          </div>
          <div className="col-md-6 bg-light">
            <div className="card-body p-5">
              <h3 className="card-title mb-4">Welcome to SkillFusion</h3>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control bg-light text-dark border-dark border-2" id="student name" placeholder="Student's Full Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control bg-light text-dark border-dark border-2" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control bg-light text-dark border-dark border-2" id="parent name" placeholder="Parent's Name" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control bg-light text-dark border-dark border-2" id="mobile number" placeholder="Mobile Number" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control bg-light text-dark border-dark border-2" id="whatsapp number" placeholder="Whatsapp Number" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control bg-light text-dark border-dark border-2" id="city" placeholder="City" />
                </div>
                <button type="submit" className="btn btn-primary signup-btn w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
