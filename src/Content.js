import React from 'react'

var Content = React.createClass({
    render: function(){
        var accountInfo = this.props.accounts
        var welcomeUser = accountInfo.map(function(info){
            return info.name
        })
        return(
            <div>
            <h4>Welcome: {welcomeUser}</h4>
                
            </div>

        )
    }
})
export default Content;