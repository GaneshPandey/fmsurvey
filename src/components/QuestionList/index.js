import React from 'react'

import Options from './Options'

const QuestionList = (props) => {

  // destructuring props
  const { questions } = props;

  return (
    <div className="question-list">
      {
        questions.map((question, index)=> (
          <li key={index}>{question.title}
            <Options
              questionId={question.id}
              options={question.options} />
          </li>
        ))
       }
    </div>
  )
}


export default QuestionList;
