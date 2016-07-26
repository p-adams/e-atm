import React from 'react';
import './App.css';
import Screen from './Screen';
import Keypad from './Keypad';

var App = React.createClass({
   
  getInitialState: function(){
    return {
      numbers: [],
      pin: '',
      logged: false
  }
  },
  addNumber: function(num){
    var number = [{n: num}]
    this.setState({numbers: this.state.numbers.concat(number)})
  },
  removeNumber: function(){
    this.setState({
      numbers: this.state.numbers.slice(0, -1),
      logged: false
    })
  },
  logout: function(){
    this.setState({
      logged: false,
      numbers: []
    })
  },
  login: function(p){
    var pinNum = parseInt(p)
    var accountNumber = this.props.accounts.map(function(pin){
      return pin.pin
    })
   if(accountNumber.indexOf(pinNum) !== -1){
      this.setState({
        pin: pinNum,
        logged: true 
    })
   }else{
     alert('Please enter valid pin')
   }
   console.log('user entered: ', p)
  },
  render: function() {
    var keys = this.props.keys
    return (
      <div className="container">
      <h1>E-ATM</h1>
        <div className="jumbotron">
          
          <div className="row">
            <div className="col-md-8">
              <Screen
                login={this.login}
                logged={this.state.logged}
                logout={this.logout}
                handleRm={this.removeNumber}
                pin={this.state.numbers}
              />
            </div>
            <div className="col-md-4">
              <Keypad
                keys={keys}
                number={this.addNumber}
                />
          </div>
          </div>
        </div>
      </div>
    );
  }
})


export default App;
