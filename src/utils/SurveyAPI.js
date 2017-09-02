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


// update the survey answers to the backend
// content: answer submitted by users as JSON object
export const updateAnswer = (surveyId, content) =>
  fetch(`${api}/surveys/${surveyId}/completions`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'completion': content })
  }).then(res => res.json())
