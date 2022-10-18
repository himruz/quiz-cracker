import {React,useState, useRef} from 'react';
import './QuestionAnswer.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const QuestionAnswer = ({questionData, index} ) => {
    const {question, options, correctAnswer} = questionData;

    const getAnswer = (answer) =>{
        if(correctAnswer === options[answer]){
            toast("Congratulations Correct Answer!!!");
            return
        }else{
            toast("Opps Wrong Answer!!!");
            return
        }

    } 
    const [show, setShow] = useState(false);
  const target = useRef(null);
    return (
        <div className='qna-wrapper shadow-lg mb-5'>
            <div className="row mt-5 mb-5">
                <h4>Quiz  {index+1} : {question}
                        <span ref={target} onClick={() => setShow(!show)}>
                        <EyeIcon style={{ width: '18px'}}></EyeIcon>
                        </span>
                    <>
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Answer : {correctAnswer}
                    </Tooltip>
                    )}
                </Overlay>
                </>
               </h4>
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