import React, { Component } from 'react';

// our dependencies
import * as SurveyAPI from './utils/SurveyAPI'
import BodyResponse from './utils/BodyResponse'

// SurveyList component
import SurveyList from './components/SurveyList'

import './App.css';

class App extends Component {

  state = {
    surveys: [],
    questions: [],
    content: BodyResponse,
    surveyId: '001',
    displayQuestion: false,
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
    const { surveys, questions, isFetching } = this.state;

    return (
      <div className="App">
        {isFetching?
          <h1>loading...</h1>:
          <SurveyList surveys={surveys} />}
      </div>
    );
  }
}

export default App;
