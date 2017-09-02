import React, { Component } from 'react';

// our dependencies
import * as SurveyAPI from './utils/SurveyAPI'
import BodyResponse from './utils/BodyResponse'

import './App.css';

class App extends Component {

  state = {
    surveys: [],
    questions: [],
    content: BodyResponse,
    surveyId: '001',
  }

  componentDidMount() {
    SurveyAPI.getAll().then(surveys => {
      this.setState({ surveys, isFetching: false });
    });
  }

getQuestions(id) {
  SurveyAPI.get(id).then(questions => {
    this.setState({ questions });
  });
}

submitAnswers() {
  SurveyAPI.updateAnswer(this.state.surveyId, this.state.content).then(response => {
    // get response from server
    console.log(response);
  })
}

  render() {
    // destructuring state object
    const { surveys, questions } = this.state;

    return (
      <div className="App">
        {
          surveys.map((survey)=>(
            <li key={survey.id}>{survey.title}</li>
          ))
        }
        <button type="button" onClick={()=> this.submitAnswers()}>Click Me!</button>
      </div>
    );
  }
}

export default App;
