import React from 'react';

const QuestionAnswer = ({questionData, index} ) => {
    const {question} = questionData;
    console.log(question)
    return (
        <div className="row">
            <h4>Quiz of {index+1}</h4>
        </div>
    );
};

export default QuestionAnswer;