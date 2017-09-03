import React from 'react'

import Options from './Options'

const QuestionList = (props) => {

  // destructuring props
  const { questions, saveAnswer, submitAnswers, anotherSurvey } = props;

  return (
    <div className="list-questions">
    <div>
      <button className="back-button" onClick={anotherSurvey}>Survey List</button>
    </div>
    <ol className="question-list">
      {
        questions.map((question, index)=> (
          <li key={index} className="question-list-item" >
            <Options
              questionTitle={question.title}
              questionId={question.id}
              options={question.options}
              saveAnswer={saveAnswer}
              />
          </li>
        ))
       }
     </ol>
       <button className="submit-button" type="button" onClick={submitAnswers}>Submit Answers</button>
    </div>
  )
}


export default QuestionList;
