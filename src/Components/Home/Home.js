import React from 'react';
import './Home.css'

const HeaderBanner = () => {
    return (
        <div className='container mt-5'>
            <div className="row align-items-center">
                
                <div className="col-lg-6">
                    <div className="banner-img img-fluid">
                    <img className='img-fluid' src="banner.jpg" alt="" />
                    </div>
                    
                </div>
                <div className="col-lg-6">
                    <div className="banner-text">
                        <h2>TALENT HUNT IS A QUIZ WEB APP</h2>
                        <p> THAT'S HELP YOU TO GROW YOUR WEB DEVELOPMENT KNOWLEDGE BY ANWERING QUIZ .</p>
                        <div className="start-btn">
                        <button className='btn btn-primary text-right'>Let's Start</button>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
          </div>
    );
};

export default HeaderBanner;