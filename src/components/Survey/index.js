import React from 'react'
import PropTypes from 'prop-types'

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

Survey.propTypes = {
  survey: PropTypes.object.isRequired,
}

export default Survey;
