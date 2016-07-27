import React from 'react'

var Deposit = React.createClass({
    render: function(){
        return(
            <div className="deposit">
             Deposit menu
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter dollar amount (ex: 25.00) "
                />
                <button className="btn btn-default">Enter</button>
                <button className="btn btn-default">Back</button>
                
            </div>
        )
    }
})

export default Deposit