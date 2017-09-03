import React from 'react'

const Options = (props) => {

// destructuring props
const { options, questionId, questionTitle, saveAnswer } = props;

return (
  <div className="survey-details">
    <p className="survey-title">{questionTitle}</p>
    {options && options.map((option, index)=>(
        <li key={index}>
          <p>
          <input type="radio"
            name={questionId}
            value={option}
            onClick={event => saveAnswer(questionId, event.target.value)}/>{option}
          </p>
        </li>
    ))}
  </div>
)

}

export default Options;
