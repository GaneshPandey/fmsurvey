const api = "https://private-5fb3f-surveysmock.apiary-mock.com/api"

const headers = {
  'Accept': 'application/json'
}

// get all surveys from Survey API
export const getAll = () =>
  fetch(`${api}/surveys`, { headers })
    .then(res => res.json())
    .then(data => data.surveys)

// get survey questions List  *REQUIRES SurveyID*
export const get = (surveyId) =>
  fetch(`${api}/surveys/${surveyId}`, { headers })
    .then(res => res.json())
    .then(data => data.survey.questions)
