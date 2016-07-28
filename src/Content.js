import React from 'react'
import Withdraw from './Withdraw.js'
import Deposit from './Deposit.js'

var Content = React.createClass({
    render: function(){
        var accountInfo = this.props.accounts
        var welcomeUser = accountInfo.map(function(info){
            return info.name
        })
        /*var userBalance = accountInfo.map(function(b){
            return ' Your balance is currently: $' + b.balance
        })*/
     
        return(
            <div className="content">
            <h4>Welcome: {welcomeUser}</h4>
                {this.props.showBalance ? this.props.current :
                    this.props.withdraw ? <Withdraw getWithdraw={this.props.getWithdraw}amounts={this.props.amounts}/> :
                    this.props.deposit ? 
                    <Deposit 
                        handleDeposit={this.props.handleDeposit}
                        depositAmount={this.props.depositAmount}
                        handleRm={this.props.handleRm}
                        /> : null}
            </div>

        )
    }
})
export default Content;