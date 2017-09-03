import React from 'react'

const Options = (props) => {

// destructuring props
const { options, questionId, saveAnswer } = props;

return (
  <ul>
    {options && options.map((option, index)=>(
        <li key={index}>
          <input type="radio"
            name={questionId}
            value={option}
            onClick={event => saveAnswer(questionId, event.target.value)}/>{option}
        </li>
    ))}
  </ul>
)

}

export default Options;
