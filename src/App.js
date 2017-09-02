import React, { Component } from 'react';

// our dependencies API
import * as SurveyAPI from './utils/SurveyAPI'
import './App.css';

class App extends Component {
  state = {
    surveys: [],
    questions: [],
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

  render() {
    // descructuring state object
    const { surveys, questions } = this.state;
    
    this.getQuestions('001');
    console.log(questions); // checking API is working properly

    return (
      <div className="App">
        {
          surveys.map((survey)=>(
            <li key={survey.id}>{survey.title}</li>
          ))
        }
      </div>
    );
  }
}

export default App;
