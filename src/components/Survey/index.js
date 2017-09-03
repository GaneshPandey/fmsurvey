import React from 'react'

const Survey = (props) => {

  // destructuring props
  const { survey } = props;

  return (
    <div className="survey-details">
      <p className="survey-tagline">{survey.tagline}</p>
      <p className="survey-title">{survey.title}</p>
    </div>
  )
}

export default Survey;
