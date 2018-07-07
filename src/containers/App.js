import React, { Component } from 'react';
import designs from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {

   


    state={
    persons: [
      { id: 'asfsa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
   



  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );



    const person = {
      ...this.state.persons[personIndex]
    };


    // const person = Object.assign({}, this.state.persons[personIndex]);



    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }


  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }


  render () {
    

    let persons = null;
    let btnclasses='';


    if ( this.state.showPersons ) {

         

      persons = (
        <div>
     
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />

          

        </div>
      );
          btnclasses=designs.Red;
         

      
    }

    const classes = [];

    if ( this.state.persons.length <= 2 ) {
      classes.push( designs.red ); // classes = ['red']
    }


    if ( this.state.persons.length <= 1 ) {
      classes.push( designs.bold ); // classes = ['red', 'bold']
    }

    return (
      
        <div className={designs.App}>

          <Cockpit appTitle={this.props.title} para={classes} buttonclasses={btnclasses} toggle={this.togglePersonsHandler} />
         
          
         
          {persons}
        </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
