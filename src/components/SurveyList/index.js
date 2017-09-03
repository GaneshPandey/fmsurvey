import React from 'react'

// Survey Component
import Survey from '../Survey'

const SurveyList = (props) => {

  // destructuring props
  const { surveys, onStartSurvey } = props;

  return (
    <div className="list-surveys">
      <div className="list-surveys-top"></div>
      <ol className="survey-list">
        {
          surveys.map((survey, index)=> (
            <li key={index} className="survey-list-item">
              <div className="survey-avatar"></div>
              <Survey
                onStartSurvey={onStartSurvey}
                survey={survey} />
              <button type='button' className="survey-start"
                  onClick={()=>onStartSurvey(survey.id)}>start survey</button>
            </li>
          ))
        }
      </ol>
    </div>
  )
}


export default SurveyList;
