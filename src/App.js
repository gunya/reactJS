import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
      persons:[
          {name:"Sergei", age:32},
          {name:"Katya", age:31},
          {name:"Max", age:0},
          {name:"Alice", age:0}
      ],
      showPersons:false
  };

  switchNameHandler = (newName) => {
    console.log("Was clicked");
    // DON'T USE THIS: this.state.persons[0].name = "Not Sergei";
    this.setState({persons:[
              {name:newName, age:21}, {name:"Katya", age:20},
              {name:"Max", age:0}, {name:"Alice", age:0}
    ]});
  };

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
      this.setState({showPersons:!this.state.showPersons});
  };

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1x solid blue',
        paging: '8px',
        cursor: 'pointer'
    };

      let persons = null;

      if (this.state.showPersons){
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}/>
                  })}
              </div>
          );
      }

      return (
      <div className="App">
          <h1> Hello there</h1>
          <button style={style} onClick={() => this.togglePersonsHandler()}>Switch Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
