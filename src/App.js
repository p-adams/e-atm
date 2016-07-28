import React from 'react';
import './App.css';
import Screen from './Screen';
import Keypad from './Keypad';


var App = React.createClass({
   
  getInitialState: function(){
    return {
      numbers: [],
      deposits: [],
      depositAmount: '',
      pin: '',
      current: '',
      logged: false,
      showBalance: false,
      withdraw: false, 
      deposit: false
  }
  },
  addNumber: function(num){
    var number = [{n: num}]
    this.setState({
      numbers: this.state.numbers.concat(number),
      deposits: this.state.deposits.concat(number)
  })
  },
  removeNumber: function(){
    this.setState({
       numbers: this.state.numbers.slice(0, -1),
       deposits: this.state.deposits.slice(0, -1)
       
      })
  },
  logout: function(){
    this.setState({logged: false, numbers: []})
  },
  login: function(p){
    var pinNum = parseInt(p)
    var accountNumber = this.props.accounts.map(function(pin){
      return pin.pin
    })
    if(accountNumber.indexOf(pinNum) !== -1){
      this.setState({pin: pinNum, logged: true, deposits: []})
    }
    else{
     alert('Please enter valid pin')
    }
    //console.log('user entered: ', p)
  },
  handleBalance: function(){
    var currentBalance = this.props.accounts.map(function(i){
      return i.balance
    })
    var b = parseInt(currentBalance)
    this.setState({current: b + this.state.depositAmount, showBalance: true, withdraw: false, deposit: false})
  },
  handleWithdraw: function(){
    this.setState({withdraw: true, showBalance: false, deposit: false})
  },
  handleDeposit: function(dep){
    var getDep = parseInt(dep)
    //console.log(dep)
    this.setState({
      depositAmount: getDep,
      deposits: []
    })
  },
  depositMenu: function(){
    alert('meow')
    this.setState({
      deposit: true,
      showBalance: false,
      withdraw: false,})
  },
  render: function() {
    var keys = this.props.keys
    console.log(this.state.depositAmount)
    return (
      <div className="container">
      <h1>E-ATM</h1>
        <div className="jumbotron">
          
          <div className="row">
            <div className="col-md-8">
              <Screen
                accounts={this.props.accounts}
                depositAmount={this.state.deposits}
                depositMenu={this.depositMenu}
                amounts={this.props.amounts}
                login={this.login}
                logged={this.state.logged}
                logout={this.logout}
                handleRm={this.removeNumber}
                pin={this.state.numbers}
                balance={this.handleBalance}
                showBalance={this.state.showBalance}
                current={this.state.current}
                handleWithdraw={this.handleWithdraw}
                withdraw={this.state.withdraw}
                handleDeposit={this.handleDeposit}
                deposit={this.state.deposit} 
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
