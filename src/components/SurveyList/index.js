import React from 'react'

// Survey Component
import Survey from '../Survey'

const SurveyList = (props) => {

  // destructuring props
  const { surveys } = props;

  return (
    <div className="list-surveys">
      <ol className="survey-list">
        {
          surveys.map((survey, index)=> (
            <li key={index}>
              <Survey survey={survey} />
            </li>
          ))
        }
      </ol>
    </div>
  )
}


export default SurveyList;
