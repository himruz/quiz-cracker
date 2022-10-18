import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import './Quiz.css';

const Quiz = () => {
    const allData =  useLoaderData();
    const {data} = allData
    const {name, questions} = data

    return (
        <div className='container mt-5'>
            <div className="row">
                <h2 className='mb-4'>Quiz of {name}</h2>
            </div>
            <div className="row">
            <div className="col-md-8 offset-md-3 width">
                {
                    questions.map((question, index) => <QuestionAnswer key={question.id} questionData={question} index={index}></QuestionAnswer>)
                }
            </div>
            </div>
           
        </div>
    );
};

export default Quiz;