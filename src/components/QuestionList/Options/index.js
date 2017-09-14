import React from 'react'
import PropTypes from 'prop-types'

const Options = (props) => {

// destructuring props
const { options, questionId, questionTitle, saveAnswer } = props;

return (
  <div className="survey-details">
    <p className="survey-title">{questionTitle}</p>
    {options && options.map((option, index)=>(
          <p key={index}>
          <input type="radio"
            name={questionId}
            value={option}
            onClick={event => saveAnswer(questionId, event.target.value)}/>{option}
          </p>
    ))}
  </div>
  )
}

Options.propTypes = {
  options: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired,
  questionTitle: PropTypes.string.isRequired,
  saveAnswer: PropTypes.func,
}

export default Options;
