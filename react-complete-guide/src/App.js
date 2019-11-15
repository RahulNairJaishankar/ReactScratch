import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { throws } from 'assert';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Rahul', age: 22 },
      { name: 'Saul', age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 22 },
        { name: 'Saul', age: 29 }
      ]
    });
  }

  deletePersonHandeler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //same as prev statement^^
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    //in line styles; smaller scope
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
              return <Person
                click={()=>this.deletePersonHandeler(index)}
                name={person.name}
                age={person.age}
              />
            }
          )
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi! This is my React App!</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
