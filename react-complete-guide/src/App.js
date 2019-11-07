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

  switchNameHandler = (newName) => {
    //console.log('was pressed')
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Rahul', age: 22 },
        { name: 'Saul', age: 29 }
      ]
    });
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

    return (
      <div className="App">
        <h1>Hi! This is my React App!</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>

        {this.state.showPersons ? //IMP
          <div>
            <Person click={this.switchNameHandler.bind(this, "Max!")} name={this.state.persons[0].name} age={this.state.persons[0].age}>what are my hobbies?</Person>
            <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>what are my hobbies?</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>what are my hobbies?</Person>
          </div> : null
        }

      </div>
    );
  }
}

export default App;
