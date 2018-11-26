import React, { Component } from 'react';
import Radium, { StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
      persons:[
          {id:0, name:"Sergei", age:32},
          {id:1, name:"Katya", age:31},
          {id:2, name:"Max", age:0},
          {id:3, name:"Alice", age:0}
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}; // new deep object
    //  const person = Object.assign({}, this.state.persons[personIndex]) // new deep object
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
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
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1x solid blue',
        paging: '8px',
        cursor: 'pointer',
        ':hover':{
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };

      let persons = null;

      if (this.state.showPersons){
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                      return <Person
                          click={() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
                  })}
              </div>
          );
          style.backgroundColor = "red";
          style[':hover'] = {
              backgroundColor: 'salmon',
              color: 'black'
          };
      }

      const classes = [];
      if (this.state.persons.length <= 2){
          classes.push('red');
      }
      if (this.state.persons.length <= 1){
          classes.push('bold');
      }

      return (
        <StyleRoot>
          <div className="App">
              <h1>Hello there</h1>
              <p className={classes.join(' ')}>New paragraph</p>
              <button style={style} onClick={() => this.togglePersonsHandler()}>Switch Name</button>
              {persons}
          </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
