import React,{ Components } from 'react';

class Cockpit extends Components{
  
  


    render(){

     return  <div>
                <h1>Hi, I am a React App</h1>
                <h3>{this.props.appTitle}</h3>
                <p className={this.props.para.join( ' ' )}>This is really working!</p>
                <button className={this.props.buttonclasses} onClick={this.props.toggle}>Toggle Persons</button>
            </div>
           }
    }
   
   



export default Cockpit;