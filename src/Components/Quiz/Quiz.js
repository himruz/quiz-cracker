import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const Quiz = () => {
    const allData =  useLoaderData();
    const {data} = allData
    const {name, questions} = data

    return (
        <div className='container mt-5'>
            <div className="row">
                <h2>Quiz of {name}</h2>
            </div>
            <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    questions.map((question, index) => <QuestionAnswer key={question.id} questionData={question} index={index}></QuestionAnswer>)
                }
            </div>
            </div>
           
        </div>
    );
};

export default Quiz;