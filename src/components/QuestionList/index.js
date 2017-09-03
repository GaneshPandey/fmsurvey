import React from 'react'

import Options from './Options'

const QuestionList = (props) => {

  // destructuring props
  const { questions, saveAnswer, submitAnswers } = props;

  return (
    <div className="question-list">
      {
        questions.map((question, index)=> (
          <li key={index}>{question.title}
            <Options
              questionId={question.id}
              options={question.options}
              saveAnswer={saveAnswer}
              />
          </li>
        ))
       }
       <br />
       <button type="button" onClick={submitAnswers}>Submit Answers</button>
    </div>
  )
}


export default QuestionList;
