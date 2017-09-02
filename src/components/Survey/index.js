import React from 'react'

const Survey = (props) => {

  // destructuring props
  const { survey } = props;

  return (
    <div>
      <p>{survey.id}</p>
      <p>{survey.tagline}</p>
      <p>{survey.title}</p>
      <button type='button'>start survey</button>
    </div>
  )
}

export default Survey;
