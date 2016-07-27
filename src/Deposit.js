import React from 'react'

var Deposit = React.createClass({
    render: function(){
        var deposit = this.props.depositAmount.map(function(amt){
            return amt.n
        }).join('')
        return(
            <div className="deposit">
             Deposit menu
                <input
                    className="form-control"
                    type="text"
                    readOnly
                    placeholder="Enter dollar amount (ex: $25.00) "
                    value={deposit}
                />
                <button
                    className="btn btn-default"
                    onClick={this.props.handleDeposit.bind(null, deposit)}
                    >Enter</button>
                <button
                    className="btn btn-default"
                    onClick={this.props.handleRm}
                    >Back</button>
                
            </div>
        )
    }
})

export default Deposit