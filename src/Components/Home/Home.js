import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'


const HeaderBanner = () => {
    const {data} = useLoaderData([]);
    // console.log(data);
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
            <div className="row mt-5 pt-5">
                <div className="quiz-text">
                    <h2>Let's Choose The Topic</h2>
                </div>
                    {
                        data.map(quizData => <Topics key={quizData.id} quizData={quizData}></Topics>)
                        
                    }


                
            </div>
          </div>
    );
};

export default HeaderBanner;