import React from 'react'

const Greeting = (props) => {
  const { message, anotherSurvey } = props;

  return (
    <div>
      <h1>Thank you for Submitting the Response</h1>
      <button type="button" onClick={anotherSurvey}>Submit Another Survey</button>
    </div>

  )
}

export default Greeting;