import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Topics.css'

const Topics = ({quizData}) => {
    const {name, logo, total, id} = quizData;
    return (
        <div className="col-lg-6 d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem' }} className='shadow-lg'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}   Questions-{total}</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                    <div className="select-btn-wrapper">
                       <Link to={`/home/${id}`}> <Button variant="primary" className='select-btn'>SELECT
                    </Button></Link>
                    </div>
                
                </Card.Body>
                </Card>
            </div>
    );
};

export default Topics;