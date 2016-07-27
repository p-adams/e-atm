import React from 'react'

var MenuButtons = React.createClass({
    render: function(){
        return(
            <div>
                <div className="menu-buttons">
                    <button
                        className="btn btn-default"
                        onClick={this.props.logout}
                    >Logout</button>
                    <button
                        className="btn btn-submit"
                        onClick={this.props.balance}
                        >Check balance</button><br/>
                    <button
                        className="btn btn-submit"
                        onClick={this.props.handleWithdraw}
                        >Withdraw</button><br/>
                    <button 
                        className="btn btn-submit"
                        onClick={this.props.handleDeposit}
                        >Deposit</button><br/>
                    
                </div>
            </div>
        )
    }
})

export default MenuButtons