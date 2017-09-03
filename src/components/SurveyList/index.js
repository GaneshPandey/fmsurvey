import React from 'react'

// Survey Component
import Survey from '../Survey'

const SurveyList = (props) => {

  // destructuring props
  const { surveys, onStartSurvey } = props;

  return (
    <div className="list-surveys">
      <ol className="survey-list">
        {
          surveys.map((survey, index)=> (
            <li key={index}>
              <Survey
                onStartSurvey={onStartSurvey}
                survey={survey} />
            </li>
          ))
        }
      </ol>
    </div>
  )
}


export default SurveyList;
