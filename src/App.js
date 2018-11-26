import React, { Component } from 'react';
import classesApp from './App.css';
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

      let persons = null;
      let buttonCls = '';

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
          buttonCls = classesApp.Red;
      }

      const assignedClasses = [];
      if (this.state.persons.length <= 2){
          assignedClasses.push(classesApp.red);
      }
      if (this.state.persons.length <= 1){
          assignedClasses.push(classesApp.bold);
      }

      return (
          <div className={classesApp.App}>
              <h1>Hello there</h1>
              <p className={assignedClasses.join(' ')}>New paragraph</p>
              <button className={buttonCls} onClick={() => this.togglePersonsHandler()}>Switch Name</button>
              {persons}
          </div>
    );
  }
}

export default App;
