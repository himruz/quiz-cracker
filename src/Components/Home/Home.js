import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <div className="row mt-5 pt-5">
                <div className="quiz-text">
                    <h2>Let's Choose The Topic</h2>
                </div>
                <div className="col-lg-6 d-flex justify-content-center mt-5">
                                <Card style={{ width: '18rem' }} className='shadow-lg'>
                    <Card.Img variant="top" src="https://taglineinfotech.com/wp-content/uploads/2022/04/Main-Image-6.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Button variant="primary" className='select-btn'>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
          </div>
    );
};

export default HeaderBanner;