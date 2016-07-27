import React from 'react'

var Content = React.createClass({
    render: function(){
        var accountInfo = this.props.accounts
        var welcomeUser = accountInfo.map(function(info){
            return info.name
        })
        var userBalance = accountInfo.map(function(b){
            return ' Your balance is currently: $' + b.balance
        })
        return(
            <div className="content">
            <h4>Welcome: {welcomeUser}</h4>
                {this.props.showBalance ? userBalance : null}
            </div>

        )
    }
})
export default Content;