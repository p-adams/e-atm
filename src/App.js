import React from 'react';
import './App.css';
import Screen from './Screen';
import Keypad from './Keypad';



var App = React.createClass({
  getInitialState: function(){
    return {numbers: [], pin: '', logged: false}
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
  getPin: function(pinNum){
    this.setState({
      pin: pinNum,
      logged: true
    })
  },
  logout: function(){
    this.setState({
      logged: false,
      numbers: []
    })
  },
  render: function() {
    var keys = this.props.keys
    console.log(this.state.logged)
    console.log(this.state.pin)
    return (
      <div className="container">
      <h1>E-ATM</h1>
        <div className="jumbotron">
          
          <div className="row">
            <div className="col-md-8">
              <Screen
                logged={this.state.logged}
                logout={this.logout}
                handleRm={this.removeNumber}
                pin={this.state.numbers}
                handleGetPin={this.getPin}
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
