import React from 'react'

var Withdraw = React.createClass({
    render: function(){
        var self = this
        var amounts = this.props.amounts.map(function(amount, i){
            return(
                    <tr key={i}>
                        <td>
                        <button
                            className="btn btn-default"
                            onClick={self.props.getWithdraw.bind(null, amount.a)}
                        >$ {amount.a}</button>
                        </td>
                        
                    </tr>
            )
        })
        return(
            <div className="withdraw">
                <table>
                    <thead>
                        {amounts}
                    </thead>
                </table>
            </div>
        )
    }
})

export default Withdraw