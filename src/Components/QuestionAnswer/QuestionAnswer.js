import React from 'react';
import './QuestionAnswer.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionAnswer = ({questionData, index} ) => {
    const {question, options, correctAnswer} = questionData;
    
    const getAnswer = (answer) =>{
        if(correctAnswer === options[answer]){
            toast("Wow Correct Answer!!!");
            return
        }else{
            toast("Opps Wrong Answer!!!");
            return
        }

    } 
    return (
        <div>
            <div className="row mt-5 mb-5">
                <h4>Quiz {index+1} : {question} <span><EyeIcon style={{ width: '18px'}}></EyeIcon></span></h4>
            </div>
            <div className="row">
                <div className='option-wrapper'>
                    {
                        options.map((option, index) => <h5 key={index} onClick={()=>{getAnswer(index)}} className='shadow-lg'>{option}</h5>)
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
        
    );
};

export default QuestionAnswer;