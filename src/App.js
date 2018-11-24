import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello there</h1>
        <Person name="Sergei" age="32"/>
        <Person name="Katya" age="31">Segei's wife</Person>
      </div>
    );
  }
}

export default App;
