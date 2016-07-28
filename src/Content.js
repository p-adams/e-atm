import React from 'react'
import Withdraw from './Withdraw.js'
import Deposit from './Deposit.js'

var Content = React.createClass({
    render: function(){
        var accountInfo = this.props.accounts
        var welcomeUser = accountInfo.map(function(info){
            return info.name
        })
        var balance = '$' + this.props.current
        return(
            <div className="content">
            <h4>Welcome: {welcomeUser}</h4>
                {this.props.showBalance ? 
                    <div className="current-balance">
                        <h5>Your current balance is:</h5>
                        <h6>{balance}</h6>
                    </div> :
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