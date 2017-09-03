import React, { Component } from 'react';

// our dependencies
import * as SurveyAPI from './utils/SurveyAPI'
import BodyResponse from './utils/BodyResponse'

// SurveyList component
import SurveyList from './components/SurveyList'
import QuestionList from './components/QuestionList'
import Greeting from './components/Greetings'

import './App.css';

class App extends Component {

  state = {
    surveys: [],
    questions: [],
    content: BodyResponse,
    surveyId: '',
    answers: [],
    displayQuestion: false,
    isSuccess: false,
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
    if(response.status==="ok")
      this.setState({ isSuccess: true })
  });
}

  saveAnswer(question_id, value) {
    this.setState( state=> ({
      answers: state.answers.filter(
        response => response.question_id !== question_id)
        .concat([{ question_id: question_id, value: value }])
    }));
  }

  anotherSurvey() {
    this.setState({ isSuccess: false, displayQuestion: false })
  }

  render() {
    // destructuring state object
    const { surveys, questions, isFetching, displayQuestion, isSuccess } = this.state;

    let displayComponent = null;
    if(!isSuccess) {
      displayComponent =  <QuestionList
        questions={questions}
        saveAnswer={(question_id, value)=>this.saveAnswer(question_id, value)}
        anotherSurvey={()=>{this.anotherSurvey()}}
        submitAnswers={()=>this.submitAnswers()}
      />;
    } else {
      displayComponent = <Greeting anotherSurvey={()=>this.anotherSurvey()} />;
    }

    return (
      <div className="App">

        {displayQuestion?displayComponent
          :<SurveyList surveys={surveys} onStartSurvey={(id)=>this.onStartSurvey(id)} />}

      </div>
    );
  }
}

export default App;
