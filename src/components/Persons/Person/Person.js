import React,{ Components } from 'react';

import designs from './Person.css';

class Person extends Components{

	render(){
		return  <div className={designs.Person}>
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
	}


   }





export default Person;