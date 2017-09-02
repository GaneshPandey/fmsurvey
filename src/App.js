import React, { Component } from 'react';

// our dependencies API
import * as SurveyAPI from './utils/SurveyAPI'
import './App.css';

class App extends Component {
  state = {
    surveys: [],
  }

  componentDidMount(){
    SurveyAPI.getAll().then(surveys => {
      this.setState({ surveys, isFetching: false });
    });
  }

  render() {
    // descructuring state object
    const { surveys } = this.state;
    console.log(surveys); // checking API is working properly
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
