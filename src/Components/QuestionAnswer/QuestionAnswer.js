import React from 'react';
import './QuestionAnswer.css'
import { EyeIcon } from '@heroicons/react/24/solid'
const QuestionAnswer = ({questionData, index} ) => {
    const {question, options} = questionData;
    // console.log(options)
    const correctAnswer = (answer) =>{
        console.log(options[answer])
    } 
    return (
        <div>
            <div className="row mt-5 mb-5">
                <h4>Quiz {index+1} : {question} <span><EyeIcon style={{ width: '18px'}}></EyeIcon></span></h4>
            </div>
            <div className="row">
                <div className='option-wrapper'>
                    {
                        options.map((option, index) => <h5 key={index} onClick={()=>{correctAnswer(index)}} className='shadow-lg'>{option}</h5>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default QuestionAnswer;