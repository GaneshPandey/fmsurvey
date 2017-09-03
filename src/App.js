import React, { Component } from 'react';

// our dependencies
import * as SurveyAPI from './utils/SurveyAPI'
import BodyResponse from './utils/BodyResponse'

// SurveyList component
import SurveyList from './components/SurveyList'
import QuestionList from './components/QuestionList'

import './App.css';

class App extends Component {

  state = {
    surveys: [],
    questions: [],
    content: BodyResponse,
    surveyId: '',
    displayQuestion: false,
  }

  componentDidMount() {
    SurveyAPI.getAll().then(surveys => {
      this.setState({ surveys, isFetching: false });
    });
  }

getQuestions(id) {
  SurveyAPI.get(id).then(questions => {
    this.setState({ questions});
  });
}

onStartSurvey(id){
  this.getQuestions(id)
  this.setState({ surveyId: id })
  this.setState({ displayQuestion: true })
  console.log(id);
}

submitAnswers() {
  SurveyAPI.updateAnswer(this.state.surveyId, this.state.content).then(response => {
    // get response from server
    console.log(response);
  })
}

  render() {
    // destructuring state object
    const { surveys, questions, isFetching, displayQuestion } = this.state;

    return (
      <div className="App">
        {displayQuestion?
          <QuestionList questions={questions} />:
          <SurveyList surveys={surveys} onStartSurvey={(id)=>this.onStartSurvey(id)} />}
      </div>
    );
  }
}

export default App;
