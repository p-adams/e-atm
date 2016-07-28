import React from 'react'

var MenuButtons = React.createClass({
    render: function(){
        return(
            <div className="menu">
                <button
                    className="btn btn-default"
                    onClick={this.props.logout}
                >Logout</button>
                <div className="menu-buttons">
                    <button
                        className="btn btn-default"
                        onClick={this.props.balance}
                        >Check balance</button><br/>
                    <button
                        className="btn btn-default"
                        onClick={this.props.handleWithdraw}
                        >Withdraw</button><br/>
                    <button 
                        className="btn btn-default"
                        onClick={this.props.depositMenu}
                        >Deposit</button><br/>
                    
                </div>
            </div>
        )
    }
})

export default MenuButtons