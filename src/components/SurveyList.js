import React from 'react'

const SurveyList = (props) => {
  const { surveys } = props;

  return (
    <div className="list-surveys">
      <ol className="survey-list">
        {
          surveys.map((survey, index)=> (
            <li key={index}>{survey.title}</li>
          ))
        }
      </ol>
    </div>
  )
}


export default SurveyList;
