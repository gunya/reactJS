import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
      persons:[
          {name:"Sergei", age:32}, {name:"Katya", age:31},
          {name:"Max", age:0}, {name:"Alice", age:0}
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

  nameChangedHandler = (event) => {
      this.setState({persons:[
              {name:"Sergei", age:32}, {name:event.target.value, age:31},
              {name:"Max", age:0}, {name:"Alice", age:0}
          ]});
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
          persons = <div>
              <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}/>
              <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, "Old Sergei")}
                  changed={this.nameChangedHandler}>Sergei's wife</Person>
              <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age}/>
          </div>;
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
