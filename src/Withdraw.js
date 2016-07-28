import React from 'react'

var Withdraw = React.createClass({
    render: function(){
        var amounts = this.props.amounts.map(function(amount, i){
            return(
                    <tr key={i}>
                        <td><button>{amount.a}</button></td>
                    </tr>
            )
        })
        return(
            <div className="withdraw">
            Withdraw menu
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