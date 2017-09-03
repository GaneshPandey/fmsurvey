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
    answers: [],
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
  SurveyAPI.updateAnswer(this.state.surveyId, this.state.answers).then(response => {
    // get response from server
    console.log(response);
  });
}

  saveAnswer(question_id, value) {
    this.setState( state=> ({
      answers: state.answers.filter(
        response => response.question_id !== question_id)
        .concat([{ question_id: question_id, value: value }])
    }));
    console.log(this.state.answers);
  }


  render() {
    // destructuring state object
    const { surveys, questions, isFetching, displayQuestion } = this.state;

    return (
      <div className="App">
        {displayQuestion?
          <QuestionList
            questions={questions}
            saveAnswer={(question_id, value)=>this.saveAnswer(question_id, value)}
            submitAnswers={()=>this.submitAnswers()}
           />:
          <SurveyList surveys={surveys} onStartSurvey={(id)=>this.onStartSurvey(id)} />}
      </div>
    );
  }
}

export default App;
