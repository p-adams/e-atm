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
      withdrawAmt: '',
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
  },
  handleBalance: function(){
    var currentBalance = this.props.accounts.map(function(i){
      return i.balance
    })
    var b = parseInt(currentBalance)
    var dep = this.state.depositAmount
    var wtd = this.state.withdrawAmt
    this.setState({current: b + (dep - wtd), showBalance: true, withdraw: false, deposit: false})
  },
  handleWithdraw: function(){
    this.setState({withdraw: true, showBalance: false, deposit: false})
  },
  getWithdraw: function(amt){
    this.setState({withdrawAmt: amt})
  },
  handleDeposit: function(dep){
    var removeDollar = dep.replace('$','')
    var getDep = parseInt(removeDollar)
    this.setState({
      depositAmount: getDep,
      deposits: []
    })
  },
  depositMenu: function(){
    this.setState({
      deposit: true,
      showBalance: false,
      withdraw: false,})
  },
  render: function() {
    var keys = this.props.keys
    console.log(this.state.withdrawAmt)
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
                getWithdraw={this.getWithdraw}
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
