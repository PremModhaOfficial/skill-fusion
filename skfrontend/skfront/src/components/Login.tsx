import React from 'react';
import '../index.css'
import Gif01 from '../assets/GIF01.gif'


const Login: React.FC = () => {
    const Gif = Gif01;
    
    return (
        <div className="page-container">
            <div className="container-fluid vh-50 d-flex align-items-center justify-content-center login-page">
                <div className="row shadow-lg">
                    <div className="col-lg-6 col-md-6 d-none d-md-block login-bg-img ">
                        <img
                            src={Gif} 
                            alt="Login visual"
                            className="login-img-fluid vh-50"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 bg-light p-5">
                        <h1 className="mb-2">LogIn</h1>
                        <p className="mb-4 login-quote2">Start leafing your career with our multi-tasking platform</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="e-mail">Enter your e-mail</label>
                                <input
                                    type="text"
                                    className="form-control mt-2 border border-2 border-dark"
                                    id="e-mail"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary login-btn mt-4 w-100">
                                LogIn
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;


